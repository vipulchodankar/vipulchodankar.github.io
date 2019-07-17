<template>
  <v-toolbar dark>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Vipul Chodankar</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat><router-link to="/">Home</router-link></v-btn>
      <v-btn flat><router-link to="/about">About</router-link></v-btn>
      
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->