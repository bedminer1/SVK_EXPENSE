<script lang="ts">
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
	import { enhance } from '$app/forms';

	const toastStore: ToastStore = getToastStore();
	const t: ToastSettings = {
		message: 'expense logged',
		timeout: 4000,
		background: 'variant-soft-primary'
	};


	const date = new Date()
	const defaultDate = date.toLocaleString('en-US',{hour12:false}).split(",")
	const day = defaultDate[0].split('/')
	const formattedDate = day[2] + '-' + day[1] + '-' + day[0]
</script>

<form class="card p-3 rounded-sm md:w-1/3 w-3/4 gap-3 flex flex-col justify-center items-center h-1/5 m-10" method="post" action="?/create" use:enhance>
	<input class="input rounded-sm" required id="title" name="title" title="Title" type="text" placeholder="Enter Title" />
	<select class="select px-5 rounded-sm" id="select" name="category">
		<option value="FOOD">food</option>
		<option value="SHOPEE">shopee</option>
		<option value="GYM">gym</option>
		<option value="GROCERIES">groceries</option>
	</select>
	<input class="input rounded-sm" required id="amount" name="amount" title="Amount" type="text" placeholder="Enter Amount" />
	<input class="hidden" id="date" name="date" type="text" value={formattedDate}/>
	<button class="btn btn-sm variant-filled-primary" type="submit" on:click={() => toastStore.trigger(t)}>Add Expense</button>
</form>