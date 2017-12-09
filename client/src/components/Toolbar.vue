<template>
  <v-toolbar dark color="primary" fixed>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <router-link :to="{ name: 'root' }">
      <v-toolbar-title class="white--text pr-2">Journal, eh?</v-toolbar-title>
    </router-link>
    <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!this.$store.state.isUserLoggedIn"
        flat dark to="Register">
        Sign Up
      </v-btn>
      <v-btn v-if="!this.$store.state.isUserLoggedIn"
        flat dark to="Login">
        Log In
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
v-toolbar-title:hover {
  cursor: none;
}
</style>
