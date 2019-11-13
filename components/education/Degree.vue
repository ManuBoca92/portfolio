<template>
  <v-flex xs10 sm8 md8 lg8 xl8 class="my-auto">
    <v-list-item-content>
      <v-list-item-title
        class="schoolTitle"
        v-text="degreeType"
      ></v-list-item-title>
      <!-- <v-list-item-subtitle v-text="subtitle"></v-list-item-subtitle> -->
    </v-list-item-content>
  </v-flex>
</template>

<script>
export default {
  props: ['degreeType']
}
</script>

<style lang="stylus" scoped>
.schoolTitle {
  font-size: 20px;
  font-weight : bold;
  font-family: 'Permanent Marker', cursive;
}
</style>
