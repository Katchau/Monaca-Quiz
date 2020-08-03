<template>
    <f7-page id="question-page">

        <f7-popover id="help-page" ref="helpPopUp">
            <div v-if="!hasVerified">
                <h3>
                    Do you really want to select {{helpType}} ?
                </h3>
                <f7-button @click="hasVerified = true">
                    Yes
                </f7-button>
                <f7-button @click="closePopUp()">
                    No
                </f7-button>
            </div>
            <div v-else id="help-card">
                Player has chosen to use the {{helpType}} help !
                <Help id="help-view" :answers="answers" :help-type="helpType" help-page />
            </div>
        </f7-popover>

        <f7-navbar>
            <f7-nav-left>
                <f7-button @click="retBack()">
                    Give Up
                </f7-button>
            </f7-nav-left>
            <f7-nav-right>
                <f7-button class="help-button width-auto" type="button" @click="openPopUp('50/50')" outline round large>
                    50/50
                </f7-button>
                <f7-button class="help-button width-auto" @click="openPopUp('Audience')" outline round large icon>
                    <img alt="group-help" src="/src/assets/help2.png" width="30px"/>
                </f7-button>
                <f7-button class="help-button width-auto" @click="openPopUp('Call')" outline round large icon pt5>
                    <img alt="cell-help" src="/src/assets/help3.png" width="20px"/>
                </f7-button>
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
    import Help from '@/pages/game/Help'

    export default {
        name: "Question",

        props: ['question', 'answers'],

        components: {
          Help
        },

        data () {
            return {
                hasVerified: false,
                helpType: ''
            }
        },

        methods: {
            retBack() {
                this.$f7router.back()
            },
            openPopUp(help) {
                if(this.hasVerified) {
                    if(this.helpType !== help)
                        return false
                }

                this.helpType = help;
                this.$refs.helpPopUp.open()
            },
            closePopUp() {
                this.hasVerified = false;
                this.$refs.helpPopUp.close()
            }
        }
    }
</script>

<style scoped>

</style>
