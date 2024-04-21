import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod'
import { superValidate, message } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'


const schema = z.object({
	email: z.string().email(),
	password: z.string().min(5)
});

export const load = async ({ locals }) => {
	if (locals.pb.authStore.model) {
		return redirect(303, '/dashboard');
	}

	const form = await superValidate(zod(schema))
	return {
		form
	};
};

export const actions = {
	login: async ({ locals, request }) => {
		const form = await superValidate(request, zod(schema))

		if (!form.valid) {
			return fail(400, { form })
		}

		try {
			await locals.pb.collection('users').authWithPassword(form.data.email, form.data.password);
		} catch (error) {
			return message(
				form,
				"User doesn't exist :/",
				{ status: 404 }
			)
		}

		throw redirect(303, '/dashboard');
	}
};
