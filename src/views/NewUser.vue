<template>
    <div class="new-user">
        <div class="empty">
        </div>
        <Card class="main">
            <Title class="title" :title="'Hiring Should be a Sure Thing'" />
            <div class="cards">
                <Card class="card-1-3 info-card">
                    <Title :title="'Time'" />
                    <Body class="body">
                        On average, a candidate screening will cost $80 per candidate.
                        With dozens of candidates being screened, this can quickly become 
                        an expensive process.  Factor in referral bonuses and recruitment 
                        expenses and a single candidate is now a multi-thousand dollar event.
                    </Body>
                </Card>
                <Card class="card-1-3 info-card">
                    <Title :title="'Bias'" />
                    <Body class="body">
                        Unconscious bias can ruin a good candidate's chances. Evaluating their 
                        skill against real system scenarios gives a strong indicator of their 
                        ability to do the requested work.
                    </Body>
                </Card>
                <Card class="card-1-3 info-card">
                    <Title :title="'Diversity'" />
                    <Body class="body">
                        Pass/fail divides a population into binary groups. We see candidates 
                        and people as being fluid in their strongest abilities and level of 
                        practice of them. Our scoring system gives you a good idea where 
                        candidates are on the problem and against other applicants.
                    </Body>
                </Card>
            </div>
        </Card>
        <div class="empty"></div>
        <div class="empty"></div>
        <div class="empty"></div>
        <div class="empty"></div>
        <div class="empty"></div>
        <div class="empty"></div>
        <div class="empty"></div>
        <div class="empty"></div>
        <div class="call-to-action background-primary color-white thin-border">
            Sign up
        </div>
    </div>
</template>
<script>
import Card from '@/components/Card.vue'
import Title from '@/components/Title.vue'
import Body from '@/components/Body.vue'
export default {
    name: 'NewUser',
    components: {
        Card,
        Title,
        Body,
    }
}
</script>
<style scoped>
.new-user {
    display: grid;
    grid-template-columns: 140px 1000px 140px;
    grid-template-rows: 3px 400px 47px 100px;
    grid-template-areas:
        "empty empty empty"
        "empty main empty"
        "empty empty empty"
        "empty callToAction empty";
}
.empty {
    grid-area: "empty";
    width: 100%;
    height: 100%;
}
.call-to-action {
    grid-area: "callToAction";
    width: 333px;
    height: 100px;
    margin: auto;
    text-align: center;
    padding-top: 41px;
    font-size: 1.5em;
}
.main {
    grid-area: "main";
    width: 100%;
    height: 400px;

    display: grid;
    grid-template-columns: 1000px;
    grid-template-rows: 93px 300px 7px;
}

.cards {
    display: flex;
    justify-content: space-evenly;
}
.card-1-3 {
    width: 320px;

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