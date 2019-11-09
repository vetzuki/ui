<template>
    <b-col class="employerHome">
        <b-row>
            <b-col>
                <div class="employerName">{{ name }}</div>
            </b-col>
            <b-col class="no-gutters">
                <div class="unconfirmedScreenings" @click="screeningState = 0" v-bind:class="{active: screeningState === 0}">
                    {{ unconfirmedScreeningCount }} Unconfirmed screenings
                </div>
                <div class="confirmedScreenings" @click="screeningState = 1" v-bind:class="{active: screeningState === 1}">
                    {{ confirmedScreeningCount }} Confirmed screenings
                </div>
                <div class="activeScreenings" @click="screeningState = 2" v-bind:class="{active: screeningState === 2}">
                    {{ activeScreeningCount}} Active screening
                </div>
                <div class="completedScreenings" @click="screeningState = 3" v-bind:class="{active: screeningState === 3}">
                    {{ completedScreeningCount }} Completed screenings
                </div>
                <div class="totalProspects" @click="screeningState = -1" v-bind:class="{active: screeningState === -1}">
                    {{ totalProspectsCount }} Prospects in total
                </div>
                <button @click="showCreateScreening = !showCreateScreening" type="button" class="btn btn-primary btn-sm">
                    {{ !showCreateScreening ? "New Screening" : "View data" }}
                </button>
            </b-col>
        </b-row>
        <b-row v-if="showCreateScreening" class="container createScreening">
            <NewScreening :employerID="id" :screeningCreated="screeningCreated" :getEmployerProspects="getEmployerProspects" />
        </b-row>
        <b-row v-if="!showCreateScreening" class="container prospectStates">
            <EmployerProspects :prospectScores="prospectScores" :screeningState="screeningState" />
        </b-row>
    </b-col>
</template>
<script>
    const ALL_PROSPECTS = -1
    import NewScreening from "@/components/NewScreening.vue"
    import EmployerProspects from "@/components/EmployerProspects.vue"
    import axios from "axios"
    export default {
        name: "EmployerHome",
        props: {
            id: Number,
            name: String,
            email: String,
        },
        created() {
            this.getEmployerProspects()
            this.getProspectScores()
        },
        components: {
            NewScreening,
            EmployerProspects,
        },
        data() {
            return {
                prospects: [],
                prospectScores: [],
                showCreateScreening: false,
                screeningState: ALL_PROSPECTS,
            }
        },
        computed: {
            unconfirmedScreeningCount: function() {
                return this.prospects.filter(p => p.screeningState === 0).length
            },
            confirmedScreeningCount: function() {
                return this.prospects.filter(p => p.screeningState === 1).length
            },
            activeScreeningCount: function() {
                return this.prospects.filter(p => p.screeningState === 2).length
            },
            completedScreeningCount: function() {
                return this.prospects.filter(p => p.screeningState === 3).length
            },
            totalProspectsCount: function() {
                return this.prospects.length
            }
        },
        methods: {
            // screeningCreated: Callback when a new screening is created
            screeningCreated(prospect) {
                this.showCreateScreening = false
            },
            // getProspectScores : Get the prospects with scores for an employer
            getProspectScores() {
                const prospectScoresURL = "/api/scores"
                const headers = {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("accessToken"),
                }
                axios.get(prospectScoresURL, {headers: headers})
                .then(r => this.prospectScores = r.data)
                .catch(e => {
                    if (e.response) {
                        if (e.response.status === 404 || e.response.status === 502) {
                            console.log("error: getProspectScores failed: ", e.response.data)
                        }
                    }
                })
            },
            // getEmployerProspects : Get the prospects for an employer
            getEmployerProspects() {
                const employerProspectsURL = "/api/prospects"
                const headers = {
                    "content-type": "application/json",
                    "Authorization": localStorage.getItem("accessToken"),
                }
                axios.get(employerProspectsURL,{headers: headers})
                .then(response => {
                    this.prospects = response.data
                })
                .catch(error => {
                    console.log("error: getEmployerProspects", error)
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
    .employerHome{
        background-color: #f9f871;
    }
    .active {
        font-weight: bolder;
    }

</style>