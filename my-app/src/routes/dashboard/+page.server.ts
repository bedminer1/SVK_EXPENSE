import PocketBase from 'pocketbase';
import { SECRET_PASSWORD, SECRET_EMAIL, SECRET_URL } from '$env/static/private';
import { redirect, fail } from '@sveltejs/kit';
import { z } from 'zod'
import { superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'

const schema = z.object({
	title: z.string().min(2),
	category: z.string().min(3).default("FOOD"),
	amount: z.number().min(0.01),
});

export const actions = {
	create: async ({ request }) => {
		const form = await superValidate(request, zod(schema))

		const pb = new PocketBase(SECRET_URL);
		await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);

		if (!form.valid) {
			return fail(400, { form })
		}

		const date = new Date()
		const defaultDate = date.toLocaleString('en-US',{hour12:false}).split(",")
		const day = defaultDate[0].split('/')
		const formattedDate = day[2] + '-' + day[1] + '-' + day[0]

		const newRecord: ExpenseInput = {
			...form.data,
			date: formattedDate
		};

		const record = await pb.collection('EXPENSES').create(newRecord);
	},

    delete: async ({ request }) => {
        const pb = new PocketBase(SECRET_URL);
        await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
    
        const form = await request.formData();
        const id = (form.get("id") as string) ?? "";
    
        await pb.collection("EXPENSES").delete(id);
      },

	logout: async (event) => {
		const {
			locals: { pb }
		} = event
		pb.authStore.clear()
		event.cookies.delete('session', { path: '/'} )

		redirect(301, '/login')
	}
};

export const load = async ({ fetch, locals }) => {
	const pb = new PocketBase(SECRET_URL);
	await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
	const records = await pb.collection('EXPENSES').getFullList(200, {
		sort: '-created'
	});

	const form = await superValidate(zod(schema))
	const results: Expense[] = records.map((record) => {
		return {
			title: record.title,
			category: record.category,
			amount: record.amount,
			date: record.date,
			id: record.id
		};
	});

	return {
		records: results,
		form
	};
};
