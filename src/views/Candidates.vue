<template>
    <Minimal>
        <CandidateStatusList :title="title()" :candidates="this.candidates" />
        <CallToAction :text="'New Screening'" class="background-primary color-white thin-border" />
    </Minimal>
</template>
<script>
import Minimal from '@/views/Minimal.vue'
import CallToAction from '@/components/CallToAction.vue'
import CandidateStatusList from '@/components/CandidateStatusList.vue'
const pluralize = (s, l) => {
    return l > 0 ? s+"s" : s
}
export default {
    name: 'NewUser',
    components: {
        Minimal,
        CandidateStatusList,
        CallToAction,
    },
    props: {
        candidateStatus: String,
    },
    created() {
        this.getScreenings(this.candidateStatus)
    },
    data() {
        return {
            candidates: [],
        }
    },
    methods: {
        title() {
            let ll = this.candidates.length
            if (this.candidateStatus === 'Open') {
                return `${ll} ${pluralize('screening', ll)} on offer`
            }
            if (this.candidateStatus === 'InProgress') {
                return `${ll} in ${pluralize('screening', ll)} now`
            }
            if (this.candidateStatus === 'Completed') {
                return `${ll} ${pluralize('screening', ll)} completed`
            }
            return `${ll} candidates`
        },
        getScreenings(candidateStatus) {
            if (candidateStatus === undefined) {
                candidateStatus = 'All'
            }
            const l = [
                {
                    name: 'Libor Hama',
                    email: 'libor@gmail.com',
                    thirdPartyLinks: ['https://bamboohr.com'],
                    modifiedAt: '11/21/2019T15:15:00',
                    status: 'Open',
                },
                {
                    name: 'Ji Loo',
                    email: 'Loo@jiloo.net',
                    thirdPartyLinks: ['https://bamboohr.com'],
                    modifiedAt: '11/21/2019T15:15:00',
                    status: 'Open',
                },
                {
                    name: 'Wish Salonti',
                    email: 'w.salonti@yahoo.com',
                    thirdPartyLinks: ['https://bamboohr.com'],
                    modifiedAt: '11/21/2019T15:15:00',
                    status: 'Open',
                },
                {
                    name: 'Libor Hama',
                    email: 'libor@gmail.com',
                    thirdPartyLinks: ['https://bamboohr.com'],
                    modifiedAt: '11/21/2019T15:15:00',
                    status: 'InProgress',
                },
                {
                    name: 'Ji Loo',
                    email: 'Loo@jiloo.net',
                    thirdPartyLinks: ['https://bamboohr.com'],
                    modifiedAt: '11/21/2019T15:15:00',
                    status: 'InProgress',
                },
                {
                    name: 'Wish Salonti',
                    email: 'w.salonti@yahoo.com',
                    thirdPartyLinks: ['https://bamboohr.com'],
                    modifiedAt: '11/21/2019T15:15:00',
                    status: 'InProgress',
                },
                {
                    name: 'Libor Hama',
                    email: 'libor@gmail.com',
                    thirdPartyLinks: ['https://bamboohr.com'],
                    modifiedAt: '11/21/2019T15:15:00',
                    status: 'Completed',
                },
                {
                    name: 'Ji Loo',
                    email: 'Loo@jiloo.net',
                    thirdPartyLinks: ['https://bamboohr.com'],
                    modifiedAt: '11/21/2019T15:15:00',
                    status: 'Completed',
                },
                {
                    name: 'Wish Salonti',
                    email: 'w.salonti@yahoo.com',
                    thirdPartyLinks: ['https://bamboohr.com'],
                    modifiedAt: '11/21/2019T15:15:00',
                    status: 'Completed',
                }
            ]
            if (candidateStatus === 'All') {
                return this.candidates = l
            }
            this.candidates = l.filter(i => i.status === candidateStatus)
            return this.candidates
        }
    }
}
</script>
<style scoped>
.body-list {
    margin-left: 18px;
}
.title {
    justify-self: center;
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
.info-card {
    justify-content: left;
}
.body {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 34px;
}
</style>