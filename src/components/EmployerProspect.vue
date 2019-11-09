<template>
    <tr>
        <td class="col-sm">{{ name }}</td>
        <td class="col-sm">{{ email }}</td>
        <td class="col-sm">{{ role }}</td>
        <td class="col-sm">{{ url }}</td>
        <td class="col-sm">{{ prospectScreeningState }}</td>
        <td class="col-sm" v-if="screeningState === 3">{{ this.score }}</td>
    </tr>
</template>
<script>
import axios from 'axios'

export default {
    name: "EmployerProspect",
    props: {
        name: String,
        email: String,
        role: String,
        screeningState: Number,
        id: Number,
        url: String,
        prospectScore: Object,
    },
    data() {
        return {
        }
    },
    methods: {
        getScore() {
            if (this.screeningState === 3) {
                const scoreURL = `/api/scores/${this.url}`
                const headers = {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("accessToken"),
                }
                this.fetchingScore = true
                // This is overwhelming the Auth0 API and needs to be throttled
                // TODO
                this.fetchedScore = true
                this.fetchingScore = false
                this.score = '100%'
                return
                axios.get(scoreURL, {headers: headers})
                .then(r => {
                    this.fetchingScore = false
                    this.fetchedScore = true
                    this.score = `${(r.data.score * 100).toFixed(2)}%`
                })
                .catch(error => {
                    if (error.response) {
                     console.log(`[${error.response.status}] for ${this.url}`)
                    if (error.response.status === 404) {
                        this.fetchingScore = false
                        this.fetchedScore = true
                        this.score = 'na'
                    }
                    if (error.response.status === 502) {
                        this.fetchingScore = false
                        this.fetchedScore = true
                        this.score = 'na'
                    }
                    } else if (error.request) {
                    console.log("Client error: ", error.request)
                    } else {
                        console.log("Invalid request:", error.message)
                    }
                })
            }
        }
    },
    computed: {
        prospectScreeningState() {
            let screeningStates = ['Unconfirmed', 'Confirmed', 'In progress', 'Completed']
            return screeningStates[this.screeningState]
        },
        score() {
            if (this.prospectScore) {
                return `${(this.prospectScore.score*100).toFixed(2)}%`
            }
            return 'na'
        }
    }
}
</script>