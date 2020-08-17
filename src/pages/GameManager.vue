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
                    default-value="0"
                >
                    <option value="0">Any Kind</option>
                    <option v-for="(category, i) in categories" :key="i" :value="category.id">
                        {{category.name}}
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
                    <option value="medium">Normal</option>
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
    const quizApi = require('@/js/quizApiService');

    export default {
        name: "GameManager",

        components: {
           MoneyTree,
            Question,
            End
        },

        data() {
            return {
                difficulty: 'easy', //0 - easy, 1 - normal, 2 - hard
                categorySelected: 0,
                categories: quizApi.categoriesJSON,
                gameState: 'create', //create check play loose win next stop
                questionState: {
                    helpUsed: [],
                    state: []
                },
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
                let self = this;

                let successMethod = function (data) {
                    console.log('success!');
                    let result = data.results[0];
                    let answers = [];
                    result.incorrect_answers.forEach(x => {
                        answers.push({
                            text: unescape(x),
                            correct: false
                        })
                    });
                    answers.push({
                        text: unescape(result.correct_answer),
                        correct: true
                    });

                    self.$f7router.navigate('/game/question', {
                        props: {
                            question: unescape(result.question),
                            answers: answers,
                            questionState: self.questionState
                        }
                    });
                };

                quizApi.quizQuestionRequest(successMethod, this.categorySelected, this.difficulty);
            },

            startGame(){
                this.categorySelected = this.$$('#game-create [name="genre"]').val();
                this.difficulty = this.$$('#game-create [name="difficulty"]').val();
                this.transitionState()
            },

            transitionAsyncTimer () {
                let self = this;
                let timeOutFunc = function () {
                    self.$f7router.back();
                    self.sleepForBit()
                    //self.transitionState();
                };

                setTimeout(timeOutFunc, 2000)
            },

            sleepForBit() {
                setTimeout(() => {this.transitionState()},1000 );
            },

            transitionState() {
                console.log(`current state: ${this.gameState}`)
                if (this.gameState === 'check') {
                    this.gameState = 'play';
                    this.getQuestion();
                } else if (this.gameState === 'play') {
                    this.gameState = 'check';
                    this.currentLevelState++;

                    if (this.currentLevelState === 6 || this.currentLevelState === 11)
                        this.difficulty = this.difficulty === 'easy' ? 'medium' : 'hard';

                    if (this.currentLevelState > 15) {
                        this.gameState = 'win';
                        this.transitionState();
                        return
                    }
                    //TODO prolly get a question here or somewhere
                    this.$f7router.navigate('/game/table', {
                        props: {
                            currentState: this.currentLevelState
                        }
                    });
                    this.transitionAsyncTimer()
                } else if (this.gameState === 'loose' || this.gameState === 'stop' || this.gameState === 'win') {
                    this.$f7router.navigate('/game/end', {
                        props: {
                            state: this.gameState,
                            moneyIndex: this.currentLevelState - 1
                        }
                    });
                    this.gameState = 'end';
                } else if(this.gameState === 'end') {
                    //TODO something like save the record?
                    this.$f7router.back();
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
            }
        },

        watch: {
            "questionState.state": function (val) {
                if (val.length === 0) return;
                this.gameState = val[0];
                this.questionState.state = [];
                this.sleepForBit()
            }
        }
    }
</script>

<style scoped>

</style>
