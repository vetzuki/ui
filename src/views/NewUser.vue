<template>
    <Minimal>
        <MainCard>
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
        </MainCard>
        <CallToAction :text="'Sign up'" class="background-primary color-white thin-border" />
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
    }
}
</script>
<style scoped>
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