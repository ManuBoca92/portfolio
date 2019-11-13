<template>
  <v-container>
    <v-list>
      <template
        ><h1>Experience</h1>
        <v-layout row wrap justify-space-around>
          <v-flex xs9 sm9 md9 lg9 xl9>
            <v-list-item
              >QA Automation Engineer & Python Developer, SNOWDOG.</v-list-item
            >
          </v-flex>
          <v-flex xs2 sm2 md2 lg2 xl2>
            <v-list-item>May 20118</v-list-item>
          </v-flex>
          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="subItem in item.items" :key="subItem.title">
                <v-list-item-content>
                  <v-list-item-title v-text="subItem.title"></v-list-item-title>
                  <v-divider dark></v-divider>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-flex>
        </v-layout>
      </template>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          action: 'restaurant',
          title: '<h3>Responsiblities</h3>',
          active: false,
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' }
          ]
        }
      ]
    }
  }
}
</script>
