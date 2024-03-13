import PocketBase from 'pocketbase';
import { SECRET_URL } from '$env/static/private';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const authentication: Handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(SECRET_URL);

	// load the store data from the request cookie string
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	try {
		// get updated auth store by verifying and refreshing auth model
		event.locals.pb.authStore.isValid && (await event.locals.pb.collection('users').authRefresh);
	} catch (_) {
		event.locals.pb.authStore.clear();
	}

	const response = await resolve(event);

	response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie());

	return response;
};

const unprotectedPrefix = ['/login'];
export const authorization: Handle = async ({ event, resolve }) => {
	// protect routes under auth
	if (
		!unprotectedPrefix.some((path) => event.url.pathname.startsWith(path)) &&
		event.url.pathname !== '/'
	) {
		const loggedIn = await event.locals.pb.authStore;
		if (!loggedIn) {
			throw redirect(303, '/login');
		}
	}

	const result = await resolve(event);
	return result;
};

export const handle = sequence(authentication, authorization);
