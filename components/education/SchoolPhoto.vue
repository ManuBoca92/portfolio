<template>
  <v-flex xs3 sm3 md3 lg3 xl3>
    <v-list-item-avatar>
      <v-img :src=avatar></v-img>
    </v-list-item-avatar>
  </v-flex>
</template>

<script>
export default {
  props: ['avatar']
}
</script>
