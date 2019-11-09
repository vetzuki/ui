<template>
  <EmployerHome v-bind:name="employer.name" v-bind:id="employer.id" />
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import NewScreening from '@/components/NewScreening.vue'
import EmployerHome from '@/components/EmployerHome.vue'
import axios from 'axios'
const employerLoginURL = "/api/login"
export default {
  name: 'home',
  data() {
    return {
      profile: this.$auth.profile,
      employer: {}
    }
  },
  components: {
    EmployerHome,
  },
  async created() {
    try {
      await this.$auth.renewTokens();
    } catch (e) {
      console.log("error: while renewing token", e.error);
    }
  },
  beforeMount() {
    this.getEmployerLogin()
  },
  methods: {
    getEmployerLogin() {
      const headers = {
        "authorization": localStorage.getItem("accessToken"),
        "content-type": "application/json",
      }
  
      axios.post(employerLoginURL, "{}", {headers: headers})
      .then(employer => {
        this.employer = employer.data
      })
      .catch(error => {
        console.log("error: unable to fetch employer profile")
        if (error.response) {
          console.log("API error", error.respose.data)
        } else if (error.request) {
          console.log("Client error: ", error.message)
        } else {
          console.log("Invalid request:", error.message)
        }
      })
    }
  }
}
</script>
