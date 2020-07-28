<template>
    <f7-popup id="help-page" ref="helpPopUp">
        <div v-if="!hasVerified">
            <h3>
                Do you really want to select {{helpType}} ?
            </h3>
            <f7-button @click="hasVerified = true">
                Yes
            </f7-button>
            <f7-button @click="retBack()">
                No
            </f7-button>
        </div>
        <div v-else>
            <v
        </div>
    </f7-popup>
</template>

<script>
    export default {
        name: "Help",

        props: ['helpType', 'answers'],

        data() {
            return {
                hasVerified: false
            }
        },

        methods: {
            retBack() {
                // this.$f7router.back()
                this.$refs.helpPopUp.close();
            }
        }
    }
</script>

<style scoped>

</style>
