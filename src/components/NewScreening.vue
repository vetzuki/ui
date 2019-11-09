<template>
  <b-col class="newScreening">
      <b-form v-on:submit.prevent="createNewScreening">
          <b-form-group>
            <label for="prospectEmailInput">Prospect email</label>
            <input
            type="email"
            class="form-control"
            v-model.lazy="prospectEmail"
            id="prospectEmailInput"
            aria-describedby="emailHelp"
            placeholder="Enter email">
            <small
            id="emailHelp"
            class="form-text text-muted">
            An email address the prospect can access
            </small>
          </b-form-group>
        <b-form-group>
            <label for="prospectNameInput">Full prospect name</label>
            <input
              type="text"
              class="form-control"
              v-model.lazy="prospectName"
              id="prospectNameInput"
              aria-describedby="nameHelp"
              placeholder="Look A. Full-Name">
            <small
              id="nameHelp"
              class="form-text text-muted">
              The full name of the prospect.
            </small>
          </b-form-group>
        <b-form-group>
            <label for="jobRoleSelect">Job Role</label>
            <select class="form-control" id="jobRoleSelect" v-model="jobRole">
                <option value="devOps">DevOps</option>
            </select>
          </b-form-group>
        <button @submit.prevent="createNewScreening" class="btn btn-primary btn-sm">Submit</button>
      </b-form>
      <b-alert :show="createdCountdown">
        Notified {{ prospectEmail }} they have a {{ jobRole }}  screening waiting
        </b-alert>
  </b-col>
</template>

<script>
import axios from 'axios'
export default {
  name: 'NewScreening',
  data() {
      return {
          prospectName: "",
          prospectEmail: "",
          jobRole: "",
          createdCountdown: 0,
      }
  },
  props: {
    employerID: Number,
    getEmployerProspects: Function,
    screeningCreated: Function,
  },
  methods: {
      createNewScreening() {
            console.log("employerID", this.employerID)

          let createProspectURL = "/api/prospects"
          // TODO: Check if accessToken is still valid, refresh as needed
          axios.post(
              createProspectURL,
              JSON.stringify({
                  "employerID": this.employerID,
                  name: this.prospectName,
                  email: this.prospectEmail,
                  role: this.jobRole,
              }),
              {
                  headers: {
                      "Content-Type": "application/json",
                      "Authorization": localStorage.getItem("accessToken"),
                  },
              }
          )
          .then(response => {
            let r = response.data
            this.getEmployerProspects()
            return r.employerProspect.prospect
          })
          .then(prospect => {
            this.createdCountdown = 3
            setTimeout(() => {
              this.screeningCreated(prospect)
            }, 3000)
          })
          .catch(error => {
            console.log("error", error)
            if (error.response) {
            console.log("API error", error.response.data)
            } else if (error.request) {
            console.log("Client error: ", error.request)
            } else {
            console.log("Invalid request:", error.message)
            }
          })
      }
  }
}
</script>
<style scoped>
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');
</style>