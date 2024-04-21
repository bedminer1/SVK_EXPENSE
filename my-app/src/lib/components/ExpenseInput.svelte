<script lang="ts">
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms';

	export let superform

	const { form, errors, message, enhance } = superForm(superform)

	const toastStore: ToastStore = getToastStore();
	const t: ToastSettings = {
		message: 'expense logged',
		timeout: 4000,
		background: 'variant-soft-primary'
	};
</script>

<form class="card p-3 rounded-sm md:w-1/3 w-3/4 gap-3 flex flex-col justify-center items-center h-1/5 m-10" method="post" action="?/create" use:enhance>
<!-- EMAIL -->
	<input class="input rounded-sm" name="title" type="text" placeholder="Enter Title" bind:value={$form.title}/>
	{#if $errors.title}<span class="invalid">{$errors.title}</span>{/if}
<!-- CATEGORY -->
	<select class="select px-5 rounded-sm" name="category" bind:value={$form.category}>
		<option value="FOOD">food</option>
		<option value="SHOPEE">shopee</option>
		<option value="GYM">gym</option>
		<option value="GROCERIES">groceries</option>
	</select>
	{#if $errors.category}<span class="invalid">{$errors.category}</span>{/if}
<!-- AMOUNT -->
	<input class="input rounded-sm" name="amount" type="text" placeholder="Enter Amount" bind:value={$form.amount}/>
	{#if $errors.amount}<span class="invalid">{$errors.amount}</span>{/if}

	<button class="btn btn-sm variant-filled-primary" type="submit" on:click={() => toastStore.trigger(t)}>
		Add Expense
	</button>
</form>