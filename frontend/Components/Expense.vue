<template>
	<div>

		<div>
			<h2> Add Your Expense Here! </h2>
      <hr>
<form class="ui form">
      <div class="field">
        <div class="ui basic buttons">
          <div class="ui button active">Cash</div>
          <div class="ui button">Atm</div>
          <div class="ui button">Online</div>
        </div>
      </div>
      <div class="field">
        <div class="ui basic buttons">
          <div class="ui button">Food</div>
          <div class="ui button active">Travel</div>
          <div class="ui button">Shopping</div>
          <div class="ui button">Others</div>
        </div>
      </div>
      <div class="field">
        <div class="ui right labeled input">
          <div class="ui label">₹</div>
          <input type="text" v-model="expense" placeholder="Amount">
          <div class="ui basic label">.00</div>
        </div>
      </div>
        <!-- <p>Expense:
			     <input type="text" name="expense" v-model="expense" placeholder="Enter the Expense">
				</p> -->
        <!-- <p>Select The Mode Of Expnese:
        <select v-model="typeOfExpense" placeholder="Select the Expense Type">
    			<option value="Cash">Cash</option>
    			<option value="Atm">ATM</option>
    			<option value="Online">Online</option>
 	 			</select>
        </p> -->

        <!-- <p> Selesct The Category Of Expense:
 	 			<select v-model="categoryOfExpense" placeholder="Select the Category Type" >
    			<option value="food">Food</option>
    			<option value="travel">Travel</option>
    			<option value="shopping">Shopping</option>
    			<option value="others">others</option>
 	 			</select> -->
        <div class="field">
          <input type="text" name="first-name" v-model="contents" placeholder="Description">
        </div>
        <!-- <p> Enter Expense Description:
 	 	<input type="text" name="contents" v-model="contents" placeholder="Enter the Content">
        </p> -->
        <div class="ui buttons">
          <button class="ui button">Cancel</button>
          <div class="or"></div>
          <button class="ui positive button" @click="addExpense" v-if="! isUpdating">Save</button>
          <button class="ui positive button" @click="addExpense" v-else>Update</button>
        </div>
        	<!-- <button type="button" @click="addExpense" v-if="! isUpdating">Add Expense</button>
        	<button type="button" @click="updateExpense" v-else >Update Expense</button> -->
          </form>
		</div>

		<div>
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

