<template>
    <div>
        <div class="column">
            <h2 class="ui teal image header">
              <!-- <img src="assets/images/logo.png" class="image"> -->
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