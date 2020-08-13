<template>
    <f7-page>
        <f7-block-header class="landing-header">
            <img class="esbetaculo-logo" alt="app-logo" src="src/assets/logo1.png"/>
        </f7-block-header>
        <f7-block strong id="landing-body">
            <f7-list>
                <f7-button fill raised login-screen-open="#register-screen">Register Screen</f7-button>
                <f7-button fill raised login-screen-open="#login-screen">Login Screen</f7-button>
                <f7-button fill raised href="/game/">Game Test</f7-button>
                <f7-button fill raised href="/game/question">Question test</f7-button>
            </f7-list>
        </f7-block>
    </f7-page>
</template>

<script>
    const fb = require('@/js/firebaseConfig');

    export default {
        mounted () {
            let self = this;
            fb.auth.onAuthStateChanged(user => {
                if (user && user.displayName) {
                    // we are redirecting here when opening the app in case the user is still logged in
                    // or if he just logged in. this is because when registering the displayName does not update
                    // so we have to update the router only at that time
                    // self.$f7router.navigate('/main/')
                }
            })
        }
    }
</script>
