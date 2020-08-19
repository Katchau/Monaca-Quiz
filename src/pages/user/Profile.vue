<template>
    <f7-page id="profile-page">
        <h3>
            {{username}} Profile Page
        </h3>
        <f7-list id="score-list">
            <f7-list-item v-for="(category, i) in categories" :key="i" :value="category.id">
                <div>
                    {{category.name}}
                </div>
                <div>
                    Total score
                </div>
            </f7-list-item>
        </f7-list>
        <h4 @click="retBack()">Back to main menu</h4>
    </f7-page>
</template>

<script>
    const quizApi = require('@/js/quizApiService');

    export default {
        name: "Profile",

        data() {
            return {
                username: '',
                categories: quizApi.categoriesJSON,
                scores: []
            }
        },

        methods: {
            retBack() {
                this.$f7router.back()
            }
        }
    }
</script>

<style scoped>

</style>
