import PocketBase from 'pocketbase';
import { SECRET_URL } from '$env/static/private';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

// first we confirm that the user is in our database
export const authentication: Handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(SECRET_URL);

	// load the store data from the request cookie string
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	try {
		// get updated auth store by verifying and refreshing auth model
		event.locals.pb.authStore.isValid && event.locals.pb.collection('users').authRefresh;
	} catch (_) {
		event.locals.pb.authStore.clear();
	}

	const response = await resolve(event);

	// send back the default 'pb_auth' cookie to the client with the latest store state
	response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie());

	return response;
};


// then we set permissions for this user
const unprotectedPrefix = ['/login'];
export const authorization: Handle = async ({ event, resolve }) => {
	// protect routes under auth
	if (
		// checks if event.url.pathname starts with one of the unprotected prefixes
		!unprotectedPrefix.some((path) => event.url.pathname.startsWith(path)) &&
		// except home, home doesnt have to have the prefix
		event.url.pathname !== '/'
	) {
		// check if there is an active session, else redirect to login
		const loggedIn = event.locals.pb.authStore;
		if (!loggedIn) {
			throw redirect(303, '/login');
		}
	}

// once all the checks are done, resolve the event to be sent back as a response
	const result = await resolve(event);
	return result;
};

export const handle = sequence(authentication, authorization);
