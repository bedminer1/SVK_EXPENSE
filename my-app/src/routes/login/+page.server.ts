import type { ClientResponseError } from 'pocketbase';
import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	if (locals.pb.authStore.model) {
		return redirect(303, '/dashboard');
	}
	return {};
};

export const actions = {
	register: async ({ locals, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		// check email and password not blank
		if (!email || !password) {
			return fail(400, { emailRequired: email === null, passwordRequired: password === null });
		}

		data.set('passwordConfirm', password?.toString());

		try {
			await locals.pb.collection('users').create(data);
			await locals.pb.collection('users').authWithPassword(email.toString(), password.toString());
			await locals.pb.collection('users').requestVerification(email.toString());
		} catch (error) {
			const errorObj = error as ClientResponseError;
			return fail(500, { fail: true, message: errorObj.data.message });
		}

		throw redirect(303, '/');
	},

	login: async ({ locals, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (!email || !password) {
			return fail(400, { emailRequired: email === null, passwordRequired: password === null });
		}

		try {
			await locals.pb.collection('users').authWithPassword(email.toString(), password.toString());
		} catch (error) {
			const errorObj = error as ClientResponseError;
			return fail(500, { fail: true, message: errorObj.data.message });
		}

		throw redirect(303, '/');
	}
};
