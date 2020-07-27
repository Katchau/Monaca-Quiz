<template>
    <f7-page id="question-page">
        <f7-navbar>
            <f7-nav-left>
                Give Up
            </f7-nav-left>
            <f7-nav-right>
                <button class="help-button">
                    50/50
                </button>
                <button class="help-button">
                    <img alt="group-help" src="/src/assets/help2.png"/>
                </button>
                <button class="help-button">
                    <img alt="cell-help" src="/src/assets/help3.png"/>
                </button>
            </f7-nav-right>
        </f7-navbar>
        <f7-card id="question-body">
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
