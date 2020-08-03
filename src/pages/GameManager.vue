<template>
    <f7-page>
        <div id="game">
        </div>
    </f7-page>
</template>

<script>
    import MoneyTree from "@/pages/game/MoneyTree";

    export default {
        name: "GameManager",

        components: {
           MoneyTree,
        },

        data() {
            return {
                gameState: 'next', //check playing loose win next stop
                currentLevelState: 1,
                //this is just an example, the goal is to push as you go along
                questions: [{
                    question: 'Template question?',
                    answers: [
                        {
                            text: 'Bananas',
                            correct: true
                        }
                    ]
                }]
            }
        },

        beforeMount () {
            this.transitionState()
        },

        methods: {
            //TODO unfinished. Here is where you request
            getQuestion() {
                let difficulty = this.currentLevelState;

                return {
                    question: 'Question?',
                    answers: [
                        {
                            text: 'Answer 1',
                            correct: true
                        },
                        {
                            text: 'Answer 2',
                            correct: false
                        },            {
                            text: 'Answer 3',
                            correct: false
                        },            {
                            text: 'Answer 4',
                            correct: false
                        }
                    ]
                }
            },

            transitionAsyncTimer () {
                let self = this;
                let timeOutFunc = function () {
                    // self.$f7.views.main.router.back();
                    self.transitionState();
                };

                setTimeout(timeOutFunc, 2000)
            },

            transitionState() {
                console.log(`current state: ${this.gameState}`)
                if (this.gameState === 'check') {
                    this.gameState = 'playing';
                    let question = this.getQuestion();
                    this.$f7.views.main.router.navigate('/game/question', {
                        props: {
                            question: question.question,
                            answers: question.answers
                        }
                    });

                } else if (this.gameState === 'playing') {
                    //TODO check on how to get if the answer was correct or not
                } else {
                    //TODO por enquanto esta so o next
                    this.gameState = 'check';
                    this.$f7router.navigate('/game/table', {
                        props: {
                            currentState: this.currentLevelState
                        }
                    });
                    this.transitionAsyncTimer()
                }
            },

            displayCurrentLevel() {
                this.$$('#game').append(`<f7-view id="table-score-view" url="/game/table" score-table />`);
            }
        }
    }
</script>

<style scoped>

</style>
