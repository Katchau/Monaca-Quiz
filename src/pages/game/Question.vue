<template>
    <f7-page id="question-page">
        <!--TODO this section would be better to be in a Help.vue component and the current Help.vue would be HelpModule or smthing-->
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
                <h3> Player has chosen to use the {{helpType}} help ! </h3>
                <Help id="help-view" :answers="answers" :help-type="helpType" help-page />
            </div>
        </f7-popover>

        <f7-popover id="error-pop" ref="unavailablePopUp">
            <h3>Help option not available now!</h3>
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
        <!--  TODO same thing as the other todo, just add the component here if changes are made to this      -->

        <f7-card id="question-body">
            <f7-card-header>
                <h1 class="game-box question-box">
                    {{question}}
                </h1>
            </f7-card-header>
            <f7-card-content>
                <ul class="answers">
                    <li class="answer" v-for="(answer, i) in answers" :key="'answer' + i">
                        <button :id="`button${i}`" class="game-box" @click="checkingAnimation(answer, $event)">
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

        props: ['question', 'answers', 'questionState'],

        components: {
          Help
        },

        data () {
            return {
                hasVerified: false,
                helpType: '',
                hasClicked: false
            }
        },

        methods: {
            retBack() {
                this.questionState.state.push('stop');
                this.$f7router.back()
            },
            openPopUp(help) {
                if(this.questionState.helpUsed.includes(help)) {
                    this.$refs.unavailablePopUp.open();
                    return false;
                }

                if(this.hasVerified) {
                    if(this.helpType !== help) {
                        this.$refs.unavailablePopUp.open();
                        return false
                    }
                }

                this.helpType = help;
                this.$refs.helpPopUp.open()
            },
            closePopUp() {
                this.hasVerified = false;
                this.$refs.helpPopUp.close()
            },
            checkAnswer(answer) {
                let state = 'play';
                if(!answer.correct) state = 'loose';

                if (this.helpType && this.hasVerified)
                    this.questionState.helpUsed.push(this.helpType);

                this.questionState.state.push(state);

                this.$f7router.back()
            },
            checkingAnimation(answer, btn){
                if (this.hasClicked) return;
                this.hasClicked = true;
                let self = this;
                btn.srcElement.className += answer.correct ? ' win' : ' loose' ;

                let timeOutMethod1 = () => {
                    self.answers.forEach((ans, i) => {
                        if (ans.correct)
                            self.$$(`#button${i}`).addClass('correct');
                    })
                };
                let timeOutMethod2 = () => {self.checkAnswer(answer)};

                if (!answer.correct) setTimeout(timeOutMethod1, 1600);
                setTimeout(timeOutMethod2, 3000)
            }
        }
    }
</script>

<style scoped>

</style>
