<template>
    <!-- <div>
        <div class="column">
            <h2 class="ui teal image header">
              <img src="assets/images/logo.png" class="image"> 
              <div class="content">
                Register for new user
              </div>
            </h2>
            <form class="ui large form">
              <div class="ui stacked segment">
                <div class="field">
                  <div class="ui left icon input">
                    <i class="user icon"></i>
                    <input v-model="userEmail" type="text" name="email" placeholder="E-mail address">
                  </div>
                </div>
                <div class="field">
                  <div class="ui left icon input">
                    <i class="lock icon"></i>
                    <input v-model="userPassword" type="password" name="password" placeholder="Password">
                  </div>
                </div>
                <div @click="register" class="ui fluid large teal submit button">Register</div>
              </div>
              <div class="ui error message"></div>
            </form>
            <div class="ui message">
              Already Member? <router-link to="/login" class="item">Login</router-link>
            </div>
          </div>
    </div>
 -->
<f7-view id ="register">
  <f7-pages>
    <f7-page data-page="register">
      <f7-list form>
          <f7-list-item>
          <f7-label>E-mail</f7-label>
            <f7-input v-model="userEmail" type="text" placeholder="E-mail address"></f7-input>
          </f7-list-item>
          <f7-list-item>
            <f7-label>Password</f7-label>
            <f7-input v-model="userPassword" type="password" placeholder="Password"></f7-input>
          </f7-list-item>
      </f7-list>

      <f7-list>
          <f7-list-button title="Register" @click="register"></f7-list-button>
      </f7-list>    
    </f7-page>
  </f7-pages>
</f7-view>
</template>
<script>
import axios from 'axios'

    export default {
        data () {
            return {
                userEmail: '',
                userPassword: ''
            }
        },
        methods: {
            register () {
                axios.post('http://localhost:8000/api/register', {
                    email: this.userEmail,
                    password: this.userPassword
                }).then(function(response){

                }.bind(this))
            }
        },
        mounted () {

        }
    }
</script>