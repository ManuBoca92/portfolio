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
                <v-flex xs3 sm3 md3 lg3 xl3>
                  <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>
                </v-flex>

                <v-flex xs10 sm8 md8 lg8 xl8 class="my-auto">
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-flex>
              </v-layout>
            </v-list-item>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['educationList']
}
</script>
