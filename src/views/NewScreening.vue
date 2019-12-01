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
                            <select>
                                <option>DevOps</option>
                            </select>
                        </form>
                    </div>
                </Card>
                <Card class="card-1-3 info-card">
                    <Title class="card-title" :title="'Links'" />
                    <div class="inputs">
                        <form>
                            <input class="font-primary color-faded" placeholder="Add HR software link" id="hr-link" />
                        </form>
                    </div>
                </Card>
            </div>
        </MainCard>
        <CallToAction :text="'Invite Candidate'" class="background-primary color-white thin-border" />
    </Minimal>
</template>
<script>
import Minimal from '@/views/Minimal.vue'
import MainCard from '@/components/MainCard.vue'
import CallToAction from '@/components/CallToAction.vue'
import Card from '@/components/Card.vue'
import Title from '@/components/Title.vue'
import Body from '@/components/Body.vue'
export default {
    name: 'NewUser',
    components: {
        CallToAction,
        Card,
        Title,
        Body,
        MainCard,
        Minimal,
    },
    created() {
        this.getEmployer()
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