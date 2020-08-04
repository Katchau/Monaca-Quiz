<template>
    <f7-page>
        <div v-if="gameState === 'create'" id="game-create">
            <f7-list form>
                <!--  this could have smart select if we want more than 1 option               -->
                <f7-list-input
                    label="Select Genre"
                    name="genre"
                    placeholder=""
                    type="select"
                    default-value="any"
                >
                    <option value="any">Any Kind</option>
                    <option v-for="(category, i) in categories" :key="i" :value="category.val">
                        {{category.text}}
                    </option>
                </f7-list-input>

                <f7-list-input
                        label="Select Difficulty"
                        name="difficulty"
                        placeholder="Please choose"
                        type="select"
                        default-value="easy"
                >
                    <option value="easy">Easy</option>
                    <option value="normal">Normal</option>
                    <option value="hard">Hard</option>
                </f7-list-input>

                <f7-list-button @click="startGame()" title="Start Game" />
            </f7-list>
        </div>
        <div v-else id="game" style="text-align: center">
            <img src="/src/assets/coin1.gif" alt="loading pic"/>
        </div>
    </f7-page>
</template>

<script>
    import MoneyTree from "@/pages/game/MoneyTree";
    import Question from "@/pages/game/Question";
    import End from "@/pages/game/End";

    export default {
        name: "GameManager",

        components: {
           MoneyTree,
            Question,
            End
        },

        data() {
            return {
                difficulty: 0, //0 - easy, 1 - normal, 2 - hard
                categories: [
                    {
                        val: 'music',
                        text: 'Music'
                    }
                ],
                gameState: 'create', //create check play loose win next stop
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

            startGame(){
                // TODO check difficulty and that stuff
                this.transitionState()
            },

            transitionAsyncTimer () {
                let self = this;
                let timeOutFunc = function () {
                    self.$f7router.back();
                    setTimeout(()=> {self.transitionState()},2000);
                    //self.transitionState();
                };

                setTimeout(timeOutFunc, 2000)
            },

            transitionState() {
                console.log(`current state: ${this.gameState}`)
                if (this.gameState === 'check') {
                    this.gameState = 'play';
                    let question = this.getQuestion();
                    this.$f7.views.main.router.navigate('/game/question', {
                        props: {
                            question: question.question,
                            answers: question.answers
                        }
                    });
                } else if (this.gameState === 'play') {
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
