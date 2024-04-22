<script lang="ts">
	import ExpenseInput from '$lib/components/ExpenseInput.svelte'
	import ExpenseDisplayCard from '$lib/components/ExpenseDisplayCard.svelte'

	// default month to current month, month picker
	const currDate = new Date()
	let monthPicked: string = (currDate.getMonth() + 1).toString()
	$: currMonth = parseInt(monthPicked) ?? currDate.getMonth() + 1

	const months: string[] = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']

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
<!-- NAV -->
	<nav class="w-[95vw] justify-between flex">
		<img src="stonks.png" alt="stonks" class="size-10 sm:size-12">
		<form action="?/logout" method="POST">
			<button class="w-20 btn">Logout</button>
		</form>
	</nav>
<!-- HEADER -->
	<h1 class="h1 text-5xl mt-5">$100&#60</h1>
<!-- INPUT FORM -->
	<ExpenseInput superform={data.form}/>
<!-- DATA SUMMARY -->
	<hr class="w-[60%] md:w-1/3 my-4" />
	<div class="w-[60%] md:w-1/3 flex flex-col items-center">
		<div class="w-full flex justify-end">
			<select class="select h-10 w-20" name="month" id="month" bind:value={monthPicked}>
				{#each months as month, index}
					<option value={(index + 1).toString()}>{month}</option>
				{/each}
			</select>
		</div>
		<div class="p-3 text-center mb-4 w-2/3 whitespace-pre">
			<h2 class="h2 text-center">RECEIPT</h2>
			<h3 class="h3">food:          ${foodSum.toFixed(2)}</h3>
			<h3 class="h3">shopee:     ${shopeeSum.toFixed(2)}</h3>
			<h3 class="h3">groceries: ${groceriesSum.toFixed(2)}</h3>
			<h3 class="h3">gym:          ${gymSum.toFixed(2)}</h3>
			<h3 class="h3">total:         ${monthlySum.toFixed(2)}</h3>
		</div>
	</div>
	<hr class="w-[60%] md:w-1/3 my-7" />
	<h1 class="h1">Expenses</h1>	
	{#each data.records as record}
		{#if parseInt(record.date.split('-')[2]) === currMonth} 
		<ExpenseDisplayCard {record}/>
		{/if}
	{/each}
</div>

