<script lang="ts">
	import { enhance } from '$app/forms';
    import { getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';

	const toastStore: ToastStore = getToastStore();
	const t: ToastSettings = {
		message: 'expense deleted',
		timeout: 2000,
        background: 'variant-filled-error'
	};
    export let record: Expense
</script>

<div class="card p-2 md:w-1/3 w-3/4 rounded-sm">
    <header class="card-header">
        {record.category}
        <div class="float-right">
            <form action="?/delete" method="post" use:enhance>
                <input type="hidden" class="id" name="id" value={record.id}>
                <button type="submit" class="btn btn-sm variant-filled-error" on:click={() => toastStore.trigger(t)}>Delete</button>
            </form>
        </div>
    </header>
    <section class="p-4">
        <p>{record.title}</p>
        <br>
        <p>${record.amount.toFixed(2)} | {record.date}</p>
    </section>
</div>