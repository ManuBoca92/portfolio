<template>
  <v-container fluid>
    <v-layout row wrap justify-space-around>
      <v-flex xs3 sm3 md3 lg3 xl3>
        <MyPhoto />
      </v-flex>
      <v-flex xs8 sm8 md8 lg8 xl8 class="my-auto">
        <p>Hi, my name is Ebonom Mfam and I am</p>
        <h1>QA & WEB DEVELOPER</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MyPhoto from '~/components/profile/MyPhoto.vue'

export default {
  components: {
    MyPhoto
  }
}
</script>

<style scoped>
h1 {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 32px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}
</style>
