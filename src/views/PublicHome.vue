<template>
    <b-col class="publicHome">
        <b-row>
            <b-col>
                <b-jumbotron class="scaryWords">
                    <h4>
                        This year your company is going to lose money
                    </h4>
                    <h4>
                        It’s going to hire the wrong people.
                    </h4>
                    <h4>
                        It’s not going to know what went wrong.
                    </h4>
                </b-jumbotron>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div>
                    Hiring IT and DevOps engineers is hard. Knowing which candidates to spend time on takes a talented recruiter. Avoiding <span class="scaryWords">hiring bias, cunning social engineers</span>, and dodging resume spam are just some of what they’ll contend with. In their feedback loop with the hiring manager, and then the engineers, <span class="scaryWords">thousands of dollars will be spent</span> to get a single candidate to a phone or on-site interview.
                </div>
                <p></p>
                <div>
                    VetZuki is a way to screen IT and DevOps candidates that <span class="scaryWords">removes bias and uncertainty</span> from the candidate screening process. It uses an interactive environment testing one or more of their skills as it would be used in the field. Testing is drawn from real world examples to be sure the candidate has a fair chance and your expensive engineers will be spending their time well in follow-up interviews.
                </div>
                <p></p>
                <div>
                <h4>Interview the right people and don’t waste time. It’s time to hire better.</h4>
                </div>
            </b-col>
        </b-row>
    </b-col>
</template>
<script>
export default {
    name: "PublicHome",
    data() {
        return {}
    }
}
</script>
<style scoped>
    .publicHome{
        background-color: #f9f871;
    }
    .scaryWords{
        background-color: #A3CFCD;
    }
</style>