<template>
    <div class="login">
        <div class="logo my-5">
            <span style="color: #AB47BC" class="display-2 font-weight-black">Aut</span><i class="fa fa-cog" style="font-size: 2.5em;"></i><span class="font-weight-light display-1" style="color: #4FC3F7">glasi</span>
        </div>
        <div class="form">
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                v-model="email"
                :rules="emailRules"
                outline
                label="E-mail"
                required
                ></v-text-field>
                <v-text-field
                v-model="password"
                type="password"
                label="Password"
                outline
                required
                ></v-text-field>

                <v-btn
                :disabled="!valid"
                @click="submit"
                >
                submit
                </v-btn>
                <v-btn @click="clear">clear</v-btn>
            </v-form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            valid: true,
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            password: ''
        }
    }
}
</script>

<style scoped>
    .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .fa {
        
    }
</style>

