<template>
    <f7-page>
        <f7-card id="question-page">
            <f7-card-header>
                <h1 class="question-box">
                    {{question}}
                </h1>
            </f7-card-header>
            <f7-card-content>
                <ul class="answers">
                    <li class="answer" v-for="(answer, i) in answers" :key="'answer' + i">
                        <button class="question-box" >
                            {{answer.text}}
                        </button>
                    </li>
                </ul>
            </f7-card-content>
        </f7-card>
    </f7-page>
</template>

<script>
    export default {
        name: "Question",

        props: ['question', 'answers']
    }
</script>

<style scoped>

</style>
