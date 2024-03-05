<script lang="ts">
	import ExpenseInput from '$lib/components/ExpenseInput.svelte'
	export let data
	const { records } = data
</script>


<div class="flex flex-col container justify-center items-center gap-4">
	<ExpenseInput />	
	{#each records as record} 
		<div class="card p-2 w-1/3">
			<header class="card-header">
				{record.category}
				<div class="float-right">
					<form action="?/delete" method="post">
						<input type="hidden" class="id" name="id" value={record.id}>
						<button type="submit" class="btn btn-sm variant-filled-error">Delete</button>
					</form>
				</div>
			</header>
			<section class="p-4">
				<p>{record.title}</p>
				<br>
				<p>${record.amount.toFixed(2)}</p>
			</section>
		</div>
	{/each}
</div>



