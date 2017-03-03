<template>
	<div>
		<div>
			<h2> Add Your Expense Here! </h2>
			<form>

			<input type="text" name="expense" v-model="expense" placeholder="Enter the Expense">
				<select v-model="typeOfExpense" placeholder="Select the Expense Type">
    			<option value="Cash">Cash</option>
    			<option value="Atm">ATM</option>
    			<option value="Online">Online</option>
 	 			</select>

 	 			<select v-model="categoryOfExpense" placeholder="Select the Category Type">
    			<option value="food">Food</option>
    			<option value="travel">Travel</option>
    			<option value="shopping">Shopping</option>
    			<option value="other">other</option>>
 	 			</select>

 	 			<input type="text" name="contents" v-model="contents" placeholder="Enter the Contents ">

        	<button type="button" @click="addExpense" v-if="! isUpdating">Add Expense</button>
        	<button type="button" @click="updateExpense" v-else >Update Expense</button>
        	</form>
		</div>
		<div>
			<h2></h2>






		</div>





	</div>
</template>



<script>
import axios from 'axios'

export default {
  data () {
    return {
  		expense :'',
  		typeOfExpense:'',
  		categoryOfExpense : '',
  		contents :'',
  		totalExpense : '',
  		isUpdating: false ,
  		updatingAccountId: ''
  		    }
  		},
  	methods: {

  	}
}

</script>

