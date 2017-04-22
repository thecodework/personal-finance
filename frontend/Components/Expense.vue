<template>
  <f7-page name="expense">
<form class="ui form">
      <div class="field">
      <div class="ui fluid search selection dropdown">
      <input type="hidden" name="Account">
      <i class="dropdown icon"></i>
      <div class="default text">Select Account</div>
        <div class="menu">
        <div v-for="account in accounts" class="item" data-value="_id"><i class="af flag"></i>{{ account.name }}</div>
        </div>
      </div>
      </div>
      <div class="field">
        <div class="ui fluid search selection dropdown">
        <input type="hidden" name="Category">
        <i class="dropdown icon"></i>
        <div class="default text">Select Category</div>
          <div class="menu">
          <div v-for="category in categories" class="item" data-value="_id"><i class="af flag"></i>{{ category.name }}</div>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="ui right labeled input">
          <div class="ui label">₹</div>
          <input type="text" v-model="expense" placeholder="Amount">
          <div class="ui basic label">.00</div>
        </div>
      </div>


        <div class="field">
          <input type="text" name="first-name" v-model="contents" placeholder="Description">
        </div>

        <div class="ui buttons">
          <button class="ui button">Cancel</button>
          <div class="or"></div>
          <button class="ui positive button" @click="addExpense" v-if="! isUpdating">Save</button>
          <button class="ui positive button" @click="addExpense" v-else>Update</button>
        </div>

          </form>
    </div>

    <div>
        <ul>
            <li v-for="exp in expenses">Expense:{{ exp.expense}} Type of Expense:{{exp.typeOfExpense}} Category Of Expense:{{exp.categoryOfExpense}} Contents:{{exp.contents}} Total expense:{{exp.totalExpense}}<button style="color: green" @click="editExpense(exp._id)">Edit</button> <button style="color: red" v-on:click="deleteExpense(exp._id)">Delete</button></li>
        </ul>
    </div>
  </div>
  </f7-page>
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
      accounts: [],
      categories: [],
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
      fetchAccounts(){
        axios.get('http://localhost:8000/api/accounts').then(function(response){
          this.accounts = response.data
        }.bind(this))
      },
      fetchCategories () {
          axios.get('http://localhost:8000/api/categories').then(function(response){
              this.categories = response.data
          }.bind(this))
      },
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
    }
  },
  mounted () {
    this.fetchAccounts()
    this.fetchCategories()
    // $('.ui.dropdown').dropdown()
  }
}

</script>

