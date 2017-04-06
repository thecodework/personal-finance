<template>
    <f7-login-screen id="login-screen" :opened="! isLoggedIn">
      <f7-view>
        <f7-pages>
          <f7-page login-screen>
            <f7-login-screen-title>Login</f7-login-screen-title>
            <f7-list form>
              <f7-list-item>
                <f7-label>Username</f7-label>
                <f7-input v-model="userEmail" name="userEmail" placeholder="Email" type="text"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Password</f7-label>
                <f7-input v-model="userPassword" name="password" type="password" placeholder="Password"></f7-input>
              </f7-list-item>
            </f7-list>
            <f7-list>
              <f7-list-button title="Sign In" @click="login"></f7-list-button>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-login-screen>
</template>
<script>
import axios from 'axios'
import store2 from 'store2'
    export default {
        props: [ 'isLoggedIn' ],
        data () {
            return {
                userEmail: '',
                userPassword: '',
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
                        // this.$router.push('/')
                        this.$emit('logged-in')
                    } else {
                        alert('Email Password Does not match')
                    }
                }.bind(this));
            },
            cancle(){

            }
        },
        mounted() {

        }
    }
</script>