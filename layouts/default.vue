<template>
  <v-app light>
    <v-toolbar flat color="white" app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <a href="/">
        <v-toolbar-title class="text-uppercase black--text text--darken-3">
          <span class="font-weight-bold">Ebonom N. Mfam</span>
        </v-toolbar-title>
      </a>

      <v-btn
        flat
        left
        text
        icon
        large
        color="blue"
        href="https://www.linkedin.com/in/ebonom-n-mfam-870136101/"
      >
        <v-icon>mdi-linkedin-box</v-icon>
      </v-btn>

      <v-btn
        flat
        left
        text
        icon
        large
        color="black"
        href="https://github.com/ManuBoca92"
      >
        <v-icon>mdi-github-circle</v-icon>
      </v-btn>

      <v-spacer />
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="indigo">
      <v-list>
        <v-list-tile
          v-for="link in links"
          :key="link.text"
          nuxt
          :to="link.route"
        >
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{
              link.text
            }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy;Ebonom N. Mfam 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      drawer: false,
      links: [
        { icon: 'mdi-school', text: 'Education', route: '/#education' },
        {
          icon: 'mdi-briefcase-outline',
          text: 'Experience',
          route: '/#experience'
        },
        {
          icon: 'mdi-certificate',
          text: 'Certification',
          route: '/#certification'
        },
        {
          icon: 'mdi-thumb-up-outline',
          text: 'Interests',
          route: '/#interests'
        },
        { icon: 'mdi-contact-mail', text: 'Contact', route: '/#contact' }
      ]
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
