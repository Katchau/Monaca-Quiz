<template>
    <f7-page id="question-page">
        <f7-navbar>
            <f7-nav-left>
                <f7-button @click="retBack()">
                    Give Up
                </f7-button>
            </f7-nav-left>
            <f7-nav-right>
                <f7-button class="help-button width-auto" type="button" outline round large>
                    50/50
                </f7-button>
                <f7-button popup-open="help-page width-auto" class="help-button" outline round large icon>
                    <img alt="group-help" src="/src/assets/help2.png" width="30px"/>
                </f7-button>
                <f7-button class="help-button width-auto" outline round large icon pt5>
                    <img alt="cell-help" src="/src/assets/help3.png" width="20px"/>
                </f7-button>
            </f7-nav-right>
        </f7-navbar>
        <f7-view id="help-page-view" url="/game/help/" help-page hidden />
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

        props: ['question', 'answers'],

        methods: {
            retBack() {
                this.$f7router.back()
            }
        }
    }
</script>

<style scoped>

</style>
