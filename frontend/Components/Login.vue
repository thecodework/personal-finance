<template>
    <f7-page name="login">
        <div class="column">
            <h2 class="ui teal image header">
              <!-- <img src="assets/images/logo.png" class="image"> -->
              <div class="content">
                Log-in to your account
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
                <div @click="login" class="ui fluid large teal submit button">Login</div>
              </div>

              <div class="ui error message"></div>

            </form>

            <div class="ui message">
              New to us? <router-link to="/register" class="item">Register</router-link>
            </div>
          </div>
    </f7-page>
</template>
<script>
import axios from 'axios'
import store2 from 'store2'
    export default {
        data () {
            return {
                userEmail: '',
                userPassword: ''
            }
        },
        methods: {
            login () {
                axios.post('http://localhost:8000/api/authenticate', {
                    email: this.userEmail,
                    password: this.userPassword
                }).then(function(response){
                    if(response.data.success) {
                        store2('_token', response.data.token)
                        this.$router.push('/')
                    } else {
                        alert('Email Password Does not match')
                    }
                }.bind(this));
            }
        },
        mounted() {

        }
    }
</script>