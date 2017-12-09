<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense dark class="cyan">
          <v-toolbar-title>Log In</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            :rules="[rules.required]"
            type="email" name="email" label="Email" v-model="email" />
          <v-text-field
            :rules="[rules.required]"
            :type="pwd_visible ? 'text' :'password'"
            :append-icon="pwd_visible ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (pwd_visible = !pwd_visible)"
            name="password" label="Password" v-model="password"
            hint="Atleast 8 and not more than 32 characters long" min="8" max="32" /><br><br>
          <div class="error" v-html="error" /><br><br>
          <v-btn
            @click="login" class="cyan" flat>Log In</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
  
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      pwd_visible: false,
      rules: {
        required: (value) => value.length > 0 || 'Required'
      }
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        console.log(response)
        this.$store.dispatch('setUser', response.data.user)
        this.$store.dispatch('setToken', response.data.token)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
