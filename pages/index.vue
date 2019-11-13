<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <MyProfile />
        <Education :education-list="educationList" />
        <Experience />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { fireDb } from '~/plugins/firebase.js'
import MyProfile from '~/components/profile/MyProfile.vue'
import Education from '~/components/education/Education.vue'
import Experience from '~/components/experience/Experience.vue'

export default {
  components: {
    Education,
    MyProfile,
    Experience
  },
  async asyncData() {
    const { docs } = await fireDb.collection('education').get()
    return { educationList: docs.map(doc => doc.data()) }
  }
}
</script>
