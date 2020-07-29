<template>
    <div id="help-body">
        <div v-if="helpType.includes('50')">
            <p v-for="(answer, i) in getTwoRandomAnswers" :key="i">
                {{ answer.text }}
            </p>
        </div>
        <div v-else-if="helpType === 'Call'">
            Random Answer
            {{ getRandomAnswer }}
        </div>
        <div v-else>
            <div v-for="(answer, i) in getCrowdAnswer" :key="i" style="text-align: left">
                <span>
                    {{ i+1 }}:
                </span>
                <div class="graph-answer" :style="`width: ${answer.val}%`">
                    {{ answer.val }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Help",

        props: ['helpType', 'answers'],

        computed: {
            getTwoRandomAnswers() {
                //TODO maybe add a random? I am not since i am considering the answers to be shuffled already
                //but for the same structure the selection will always be within the same 2 options
                let tmp = this.answers;
                let sortFnc = function (a, b) {
                    if (a.correct) return 1;
                    if (b.correct) return -1;

                    return 0
                };
                tmp.sort(sortFnc).shift();
                tmp.shift();
                return Math.floor(Math.random() * 2) ? tmp : tmp.reverse()
            },

            getRandomAnswer() {
                //TODO add difficulty level to this
                return this.answers[Math.floor(Math.random() * 4)].text
            },

            getCrowdAnswer() {
                //TODO add difficulty also here
                //right now this is distributed only having the correct one being favourite
                // this is fine for the easy questions, need to upgrade afterwards
                let tmp = this.answers;
                let correctRandom = 100 - Math.floor(Math.random() * 50);
                let wrong1 = Math.floor(Math.random() * (100 - correctRandom));
                let wrong2 = Math.floor(Math.random() * (101 - correctRandom - wrong1));
                let wrong3 = 100 - (correctRandom + wrong1 + wrong2);
                let wrongs = [wrong1, wrong3, wrong2];

                tmp.map(x => {

                    if (x.correct) {
                        x.val = correctRandom;
                    } else {
                        x.val = wrongs.shift();
                    }
                    return x;
                });

                return tmp;
            }
        },

        methods: {

        }
    }
</script>

<style scoped>

</style>
