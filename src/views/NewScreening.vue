<template>
    <Minimal>
        <MainCard>
            <Title class="title" :title="'New Screening'" />
            <div class="cards">
                <Card class="card-1-3 info-card">
                    <Title class="card-title" :title="'Candidate'" />
                    <div class="inputs">
                        <form>
                            <input class="font-primary color-faded" placeholder="Full Name" id="name" />
                            <input class="font-primary color-faded" placeholder="some.email@yahoo.com" id="email" />
                        </form>
                    </div>
                </Card>
                <Card class="card-1-3 info-card">
                    <Title class="card-title" :title="'Position'" />
                    <div class="inputs">
                        <form>
                            <select v-model="jobRole" class="font-primary color-faded">
                                <option disabled value="" >Job Role</option>
                                <option v-for="(jobRole, name) in jobRoles" :key="name">{{ name }} </option>
                            </select>
                        </form>
                        <Body>
                            {{ jobRoles.hasOwnProperty(jobRole) ? jobRoles[jobRole].text : ''}}
                        </Body>
                    </div>
                </Card>
                <Card class="card-1-3 info-card">
                    <Title class="card-title" :title="'Links'" />
                    <div class="inputs">
                        <form>
                            <input class="font-primary color-faded" placeholder="Add HR software link" @blur="addHRLink"/>
                        </form>
                    </div>
                    <BodyList :items="Array.from(thirdPartyLinks)" />
                </Card>
            </div>
        </MainCard>
        <CallToAction :text="'Invite Candidate'" class="background-primary color-white thin-border" :disabled="hasErrors.length > 0" />
    </Minimal>
</template>
<script>
import Minimal from '@/views/Minimal.vue'
import MainCard from '@/components/MainCard.vue'
import CallToAction from '@/components/CallToAction.vue'
import Card from '@/components/Card.vue'
import Title from '@/components/Title.vue'
import Body from '@/components/Body.vue'
import BodyList from '@/components/BodyList.vue'
import * as isValidUrl from 'is-valid-http-url'
export default {
    name: 'NewUser',
    components: {
        CallToAction,
        Card,
        Title,
        Body,
        BodyList,
        MainCard,
        Minimal,
    },
    created() {
        this.getEmployer()
        this.getJobRoleDescriptions()
    },
    data() {
        return {
            employer: {},
            hasErrors: [],
            jobRoles: {},
            jobRole: '',
            thirdPartyLinks: [],
        }
    },
    computed: {
        hrLinkList() {
            // eslint-disable-next-line
            console.log(Array.from(this.thirdPartyLinks))
            return Array.from(this.thirdPartyLinks)
        }
    },
    methods: {
        getEmployer() {
            this.employer = {name: 'Laomi Hozza'}
        },
        getJobRoleDescriptions() {
            this.jobRoles = {
                'DevOps': {
                    text: "A robust test of an engineer",
                },
                'SysAdmin': {
                    text: "Tests basic Linux engineer skills"
                }
            }
        },
        addHRLink(e) {
            if (isValidUrl(e.target.value) && this.thirdPartyLinks.indexOf(e.target.value) < 0) {
                this.thirdPartyLinks.push (e.target.value)
            }
            e.target.value = ''
        },
        deleteHRLink(link) {
            let idx = this.thirdPartyLinks.indexOf(link)
            if (idx < 0 ) {
                return
            }
            this.thirdPartyLinks.splice(idx, 1)
        }

    }
}
</script>
<style scoped>
.body-list {
    margin-left: 18px;
}
.cards {
    display: flex;
    justify-content: space-evenly;
}
.card-1-3 {
    width: 320px;
}
.card-title {
    margin-left: 10px;
}
.card-subtitle {
    margin-left: 10px;
}
.title {
    justify-self: center;
}
.info-card {
    justify-content: left;
}
.body {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 34px;
}
.inputs {
    display: flex;
    flex-wrap: wrap;
}
.inputs input, select {
    margin: 5px 10px;
    width: 295px;
    height: 24px;
}

</style>