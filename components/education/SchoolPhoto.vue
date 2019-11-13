<template>
  <v-flex xs3 sm3 md3 lg3 xl3>
    <v-list-item-avatar>
      <a :href="url" target="_blank">
        <v-img :src="avatar" />
      </a>
    </v-list-item-avatar>
  </v-flex>
</template>

<script>
export default {
  props: ['avatar', 'url']
}
</script>
