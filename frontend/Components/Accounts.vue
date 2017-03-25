<template>
<f7-page name="account">

<form id="account" class="list-block">
  <div>
    <h3 align="center">Add Your Account Details Here!</h3>
  </div>
  <ul>
    <li>
      <div class="item-content">
        <div class="item-inner">
          <div class="item-title label">Account Name</div>
          <div class="item-input">
            <input type="text" name="account-name" placeholder=":Your Account Name" v-model="accountName">
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="item-content">
        <div class="item-inner">
          <div class="item-title label">Initail Balance</div>
          <div class="item-input">
            <input type="text" name="initial-balance" v-model="initialBalance" placeholder=":Enter the initial balance">
          </div>
        </div>
      </div>
    </li>
    
  </ul>
</form>

      <f7-buttons>
        <f7-button small round fill="green" @click="addAccount" v-if="! isUpdating">Add Account</f7-button>
        <f7-button small round fill="green" @click="updateAccount" v-else>Update Account</f7-button>
      </f7-buttons>
  


    <div>
    	<h4>Your All Account Details:</h4>
		    <ul>
            <li v-for="account in accounts">Name:{{ account.name}} Initial Balance:{{account.initialBalance}} <button style="color: green" @click="editAccount(account._id)">Edit</button> <button style="color: red" v-on:click="deleteAccount(account._id)">Delete</button></li>
        </ul>
    </div>

</f7-page>
</template>



<script>
import axios from 'axios'

export default {
  data () {
    return {
      accountName: '',
      initialBalance: '',
      accounts: [],
      isUpdating: false,
      updatingAccountId: ''
    }
  },
  methods: {
  	addAccount (){
  	axios.post('http://localhost:8000/api/account', {accountName: this.accountName,initialBalance: this.initialBalance}).then(function(response){
            this.fetchAccount()
            this.accountName = ''
            this.initialBalance = ''
        }.bind(this))
  	},
  	fetchAccount(){
		axios.get('http://localhost:8000/api/accounts').then(function(response){
            this.accounts = response.data
        }.bind(this))
  	},
  	editAccount (id) {
        this.isUpdating = true
        axios.get('http://localhost:8000/api/account/' + id).then(function(response){
            this.accountName = response.data.name
            this.initialBalance = response.data.initialBalance
            this.updatingAccountId = response.data._id
        }.bind(this))
    },
  	updateAccount (){
  		axios.patch('http://localhost:8000/api/account/',{id: this.updatingAccountId, accountName: this.accountName ,initialBalance: this.initialBalance }).then(function(response){
            this.fetchAccount()
            this.accountName = ''
            this.initialBalance =''
            this.isUpdating = false
        }.bind(this))
  	},
  	deleteAccount (id) {
        axios.delete('http://localhost:8000/api/account/' + id).then(function(response){
            this.fetchAccount()
        }.bind(this))
    }
  },
  mounted () {
      this.fetchAccount()
    }
}
</script>

