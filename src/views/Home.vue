<template>
  <div class="home">
    <NavBar/>

    <v-container >
      <v-layout id="intro" justify-center>
        <v-flex >
          <span>Hi.</span> I'm a second year undergraduate computer engineering student.
          <a href="https://vipulchodankar.github.io/rgb-color-game-app/">RGB Game PWA</a>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'home',
  components: {
    NavBar
  }
}
</script>

<style scoped>
  #intro{
    font-size: 200%;
  }
</style>
