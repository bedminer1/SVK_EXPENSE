<script lang="ts">
	import ExpenseInput from '$lib/components/ExpenseInput.svelte'
	import ExpenseDisplayCard from '$lib/components/ExpenseDisplayCard.svelte'

	// default month to current month, month picker
	const currDate = new Date()
	let monthPicked: string = (currDate.getMonth() + 1).toString()
	$: currMonth = parseInt(monthPicked) ?? currDate.getMonth() + 1

	// monthlySum of a category 
	function getSum(records: Expense[], category: string, month: number) {
		return records
		// filter month
		.filter(record => parseInt(record.date.split('-')[2]) === month)
		// filter category
		.filter(record => record.category === category)
		// accumulate values to a sum
		.reduce((accm, curr) => {
			return accm + curr.amount
		}, 0)
	}

	export let data

	// monthly sum of each category
	let foodSum = getSum(data.records, "FOOD", currMonth)
	let shopeeSum = getSum(data.records, "SHOPEE", currMonth)
	let groceriesSum = getSum(data.records, "GROCERIES", currMonth)
	let gymSum = getSum(data.records, "GYM", currMonth)

	$: foodSum = getSum(data.records, "FOOD", currMonth)
	$: shopeeSum = getSum(data.records, "SHOPEE", currMonth)
	$: groceriesSum = getSum(data.records, "GROCERIES", currMonth)
	$: gymSum = getSum(data.records, "GYM", currMonth)

	// sum of all categories
	$: monthlySum = gymSum + groceriesSum + shopeeSum + foodSum
</script>


<div class="flex flex-col container justify-center items-center gap-4">
	<nav class="w-screen justify-end flex ">
		<form action="?/logout" method="POST">
			<button class="w-20 btn">Logout</button>
		</form>
	</nav>
	<img src="stonks.png" alt="stonks" class="size-1/2 sm:size-1/4 mt-10">
	<h1 class="h1 text-5xl mt-5">$100&#60</h1>
	<ExpenseInput superform={data.form}/>
	<hr class="w-[60%] md:w-1/3 my-4" />
	<div class="w-[60%] md:w-1/3 flex flex-col items-center">
		<div class="p-3 text-center mb-4 w-2/3 whitespace-pre">
			<h2 class="h2 text-center">RECEIPT</h2>
			<h3 class="h3">food:          ${foodSum.toFixed(2)}</h3>
			<h3 class="h3">shopee:     ${shopeeSum.toFixed(2)}</h3>
			<h3 class="h3">groceries: ${groceriesSum.toFixed(2)}</h3>
			<h3 class="h3">gym:          ${gymSum.toFixed(2)}</h3>
			<h3 class="h3">total:         ${monthlySum.toFixed(2)}</h3>
		</div>
		<select class="select h-10" name="month" id="month" bind:value={monthPicked}>
			<option value="1">jan</option>
			<option value="2">feb</option>
			<option value="3">mar</option>
			<option value="4">apr</option>
			<option value="5">may</option>
			<option value="6">jun</option>
			<option value="7">jul</option>
			<option value="8">aug</option>
			<option value="9">sep</option>
			<option value="10">oct</option>
			<option value="11">nov</option>
			<option value="12">dec</option>
		</select>
	</div>
	<hr class="w-[60%] md:w-1/3 my-7" />
	<h1 class="h1">Expenses</h1>	
	{#each data.records as record}
		{#if parseInt(record.date.split('-')[2]) === currMonth} 
		<ExpenseDisplayCard {record}/>
		{/if}
	{/each}
</div>

