<template>
    <Minimal>
        <MainCard>
            <Title class="title" :title="userGreetingText" />
            <div class="cards">
                <Card class="card-1-3 info-card">
                    <Title class="card-title" :title="'Organization'" />
                    <Subtitle class="card-subtitle" :title="'Amazing Recruiters'" />
                    <BodyList
                      class="body-list"
                      :items="['Terry Chi', 'Jayla Jones', 'Brent Lihem', 'Azkol Buvesh']" />
                </Card>
                <Card class="card-1-3 info-card">
                    <Title class="card-title" :title="'Billing'" />
                    <Subtitle class="card-subtitle" :title="'Pay-as-you-go'" />
                    <BodyList 
                      class="body-list"
                      :items="['12 screenings open', '14 screenings this billing period', '$70 due by November 30']" />
                </Card>
                <Card class="card-1-3 info-card">
                    <Title class="card-title" :title="'Candidates'" />
                    <Subtitle class="card-subtitle" :title="'13 candidates'" />
                    <BodyList
                      class="body-list"
                      :items="['3 screenings on offer', '8 in screenings now', '1 screening completed']" />
                </Card>
            </div>
        </MainCard>
        <CallToAction :text="'New Screening'" class="background-primary color-white thin-border" />
    </Minimal>
</template>
<script>
import Minimal from '@/views/Minimal.vue'
import MainCard from '@/components/MainCard.vue'
import CallToAction from '@/components/CallToAction.vue'
import Card from '@/components/Card.vue'
import Title from '@/components/Title.vue'
import Subtitle from '@/components/Subtitle.vue'
import BodyList from '@/components/BodyList.vue'
export default {
    name: 'NewUser',
    components: {
        CallToAction,
        Card,
        Title,
        Subtitle,
        BodyList,
        MainCard,
        Minimal,
    },
    created() {
        this.getEmployer()
    },
    computed: {
        userGreetingText() {
            return `Hello ${this.employer.name}`
        }
    },
    data() {
        return {
            employer: {},
        }
    },
    methods: {
        getEmployer() {
            this.employer = {name: 'Laomi Hozza'}
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
</style>