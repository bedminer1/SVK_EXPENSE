import PocketBase from 'pocketbase';
import { SECRET_PASSWORD, SECRET_EMAIL, SECRET_URL } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export const actions = {
	create: async ({ request }) => {
		const pb = new PocketBase(SECRET_URL);
		await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);

		const form = await request.formData();
		const title = (form.get('title') as string) ?? '';
		const category = (form.get('category') as string) ?? '';
		const amount = (form.get('amount') as unknown as number) ?? 0;
		const date = (form.get('date') as string) ?? '';

		const newRecord: ExpenseInput = {
			title,
			category,
			amount,
			date
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

		redirect(301, '/login')
	}
};

export const load = async ({ fetch }) => {
	const pb = new PocketBase(SECRET_URL);
	await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD);
	const records = await pb.collection('EXPENSES').getFullList(200, {
		sort: '-created'
	});

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
		records: results
	};
};
