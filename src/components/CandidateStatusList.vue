<template>
    <MainCard class="candidate-status-list">
        <Title class="main-title" :title="title" />
        <div class="cards">
            <Card class="card-1-3 info-card" v-for="candidate in candidates" :key="candidate.email+'.'+candidate.status">
                <Title :title="candidate.name" />
                <Subtitle :title="candidate.email" />
                <BodyList :items="candidate.thirdPartyLinks" />
            </Card>
        </div>
    </MainCard>
</template>
<script>
import MainCard from '@/components/MainCard.vue'
import Title from '@/components/Title.vue'
import Subtitle from '@/components/Subtitle.vue'
import Card from '@/components/Card.vue'
import BodyList from '@/components/BodyList.vue'
export default {
    name: 'CandidateStatusList',
    components: {
        MainCard,
        Title,
        Subtitle,
        Card,
        BodyList,
    },
    props: {
        title: String,
        candidates: Array, // {name, email, modifiedAt, status, thirdPartyLinks: []}
    }
}
</script>
<style>
.candidate-status-list {
}
.main-title {
    margin: auto;
}
.cards {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.card-1-3 {
    width: 320px;
    height: 300px;
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
</style>