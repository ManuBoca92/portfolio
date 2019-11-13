<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex>
        <v-list>
          <template v-for="(item, index) in educationList">
            <v-subheader
              v-if="item.header"
              id="item.header"
              :key="item.header"
              v-html="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item v-else :key="item.title" two-line>
              <v-layout row wrap justify-space-around>
                <SchoolPhoto :avatar="item.avatar" />
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
