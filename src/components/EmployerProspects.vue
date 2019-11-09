<template>
    <div>
        <table class="table table-dark employerProspects" v-if="sortedFilteredProspects.length > 0">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">URL</th>
                    <th scope="col">State</th>
                    <th v-if="screeningState === 3 || screeningState === -1" scope="col">Score</th>
                </tr>
            </thead>
            <tbody>
            <EmployerProspect
            v-for="ps in sortedFilteredProspects"
            v-bind:key="ps.prospect.URL"
            v-bind:name="ps.prospect.name"
            v-bind:email="ps.prospect.email"
            v-bind:url="ps.prospect.url"
            v-bind:id="ps.prospect.id"
            v-bind:role="ps.prospect.role"
            v-bind:prospectScore="ps.score"
            v-bind:screeningState="ps.prospect.screeningState"
            />
            </tbody>
        </table>
        <div v-if="sortedFilteredProspects.length === 0">
            No prospects to show
        </div>
    </div>
</template>
<script>
import EmployerProspect from "@/components/EmployerProspect.vue"
export default {
    name: "EmployerProspects",
    components: {
        EmployerProspect,
    },
    props: {
        prospectScores: Array,
        screeningState: Number,
    },
    data() {
        return {}
    },
    methods: {
        filteredProspects() {
            return this.prospectScores.filter(p => this.screeningState < 0 ? p : p.prospect.screeningState === this.screeningState)
        },
    },
    computed: {
        sortedFilteredProspects() {
            return this.filteredProspects().sort((a, b) => {
                if (Date.parse(a.prospect.modified) < Date.parse(b.prospect.modified)) {
                    return 1
                }
                if (Date.parse(a.prospect.modified) === Date.parse(b.prospect.modified)) {
                    return 0
                }
                return -1
            })
        }
    }
}
</script>