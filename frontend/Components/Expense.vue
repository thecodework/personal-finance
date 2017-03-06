<template>
	<div>

		<div>
			<h2> Add Your Expense Here! </h2>
      <hr>
			<form>
        <p>Expense: 
			     <input type="text" name="expense" v-model="expense" placeholder="Enter the Expense">
				</p>
        <p>Select The Mode Of Expnese: 
        <select v-model="typeOfExpense" placeholder="Select the Expense Type">
    			<option value="Cash">Cash</option>
    			<option value="Atm">ATM</option>
    			<option value="Online">Online</option>
 	 			</select>
        </p>
        
        <p> Selesct The Category Of Expense:
 	 			
        <select v-model="categoryOfExpense" placeholder="Select the Expense Category">
          <option value="shopping">Shoping</option>
          <option value="cloths">cloths</option>
          <option value="others">others</option>
        </select>


        <p> Enter Expense Description:
 	 	<input type="text" name="contents" v-model="contents" placeholder="Enter the Content">
        </p>

        	<button type="button" @click="addExpense" v-if="! isUpdating">Add Expense</button>
        	<button type="button" @click="updateExpense" v-else >Update Expense</button>

        	</form>
          <hr>
		</div>

		<div>
			<h2> Your All Expense Details!</h2>
          
        <ul>
            <li v-for="exp in expenses">Expense:{{ exp.expense}} Type of Expense:{{exp.typeOfExpense}} Category Of Expense:{{exp.categoryOfExpense}} Contents:{{exp.contents}} Total expense:{{exp.totalExpense}}<button style="color: green" @click="editExpense(exp._id)">Edit</button> <button style="color: red" v-on:click="deleteExpense(exp._id)">Delete</button></li>
        </ul>
		</div>
	</div>
</template>



<script>
import axios from 'axios'

export default {
  data () {
    return {
  		expense : '',
  		typeOfExpense : '',
  		categoryOfExpense : '',
  		contents : '',
      expenses : [],
  		categories : [],
  		isUpdating : false ,
  		updatingExpenseId : ''
  		    }
  		},

    computed: {
        totalExpense: function () {
                return   this.expense
                    }
     },
  	methods: {

      addExpense () {
        axios.post('http://localhost:8000/api/expense', {expense: this.expense, typeOfExpense: this.typeOfExpense , categoryOfExpense: this.categoryOfExpense ,
        contents:this.contents , totalExpense:this.totalExpense}).then(function(response){
            this.fetchExpense()
            this.expense= ''
            this.totalExpense = ''
            this.typeOfExpense = ''
            this.categoryOfExpense = ''
            this.contents= ''
        }.bind(this))
      },

      fetchExpense () {
        axios.get('http://localhost:8000/api/expenses').then(function(response){
            this.expenses = response.data
        }.bind(this))
      },

      fetchCategory () {
        axios.get('http://localhost:8000/api/categories').then(function(response){
            this.categories = response.data
        }.bind(this))
    },

      editExpense (id) {
        this.isUpdating = true
        axios.get('http://localhost:8000/api/expense/' + id).then(function(response){
            this.expense =  response.data.expense
            this.typeOfExpense = response.data.typeOfExpense
            this.categoryOfExpense = response.data.categoryOfExpense
            this.totalExpense = response.data.totalExpense
            this.contents = response.data.contents
            this.updatingExpenseId = response.data._id
        }.bind(this))
      },

      updateExpense () {
        axios.patch('http://localhost:8000/api/expense/',{id: this.updatingExpenseId, expense: this.expense ,typeOfExpense:this.typeOfExpense , categoryOfExpense:this.categoryOfExpense , totalExpense:this.totalExpense , contents: this.contents }).then(function(response){
            this.fetchExpense()
            this.expense= ''
            this.totalExpense = ''
            this.typeOfExpense = ''
            this.categoryOfExpense = ''
            this.contents= ''
            this.isUpdating = false
        }.bind(this))
      },

    deleteExpense (id) {
        axios.delete('http://localhost:8000/api/expense/' + id).then(function(response){
            this.fetchExpense()
        }.bind(this))
    },
    mounted () {
    this.fetchExpense()
      }

  }
}

</script>

