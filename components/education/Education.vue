<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex>
        <v-list>
          <template v-for="item in educationList">
            <v-subheader
              v-if="item.header"
              id="item.header"
              :key="item.header"
              v-html="item.header"
            ></v-subheader>

            <v-list-item v-else :key="item.title" two-line>
              <v-layout row wrap justify-space-around>
                <SchoolPhoto :avatar="item.avatar" :url="item.url" />
                <Degree :degreeType="item.title" />
              </v-layout>
            </v-list-item>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SchoolPhoto from './SchoolPhoto.vue'
import Degree from './Degree.vue'
export default {
  components: { SchoolPhoto, Degree },
  props: ['educationList']
}
</script>
