// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		pb: import('pocketbase').default
	}

	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

interface ExpenseInput {
	title: string,
	category: string,
	amount: number,
	date: string
}

interface Expense {
	title: string,
	category: string,
	amount: number,
	date: string,
	id: string
}
