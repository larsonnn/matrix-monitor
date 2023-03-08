
<script setup>
import matrixcs from "matrix-js-sdk";
import mx from "../libs/matrix";

import Form from '../components/Form.vue';
import FormElementContainer from '../components/FormElementContainer.vue';
import TextInput from '../components/Inputs/TextInput.vue';
import PasswordInput from '../components/Inputs/PasswordInput.vue';
import SubmitInput from '../components/Inputs/SubmitInput.vue';
import { matrixStore } from "../store";
</script>

<template>
    <div>
        <Form @submit="login">
            <FormElementContainer>
                <TextInput label="Server" :value="this.server" autocomplete="url"
                    @change:input="$value => this.server = $value" />
            </FormElementContainer>
            <FormElementContainer>
                <TextInput label="E-Mail" :value="this.username" autocomplete="email"
                    @change:input="$value => this.username = $value" />
            </FormElementContainer>
            <FormElementContainer>
                <PasswordInput label="Password" :value="this.password" @change:input="$value => this.password = $value" />
            </FormElementContainer>
            <FormElementContainer>
                <SubmitInput text="Login" />
            </FormElementContainer>
        </Form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            server: import.meta.env.VITE_DEFAULT_MATRIX_SYNAPSE || "",
            username: "",
            password: ""
        }
    },
    methods: {
        login() {
            mx.client = matrixcs.createClient({
                baseUrl: this.server,
                timelineSupport: true,
                useAuthorizationHeader: true,
            });
            mx.client.login('m.login.password', {
                identifier: {
                    address: this.username,
                    medium: 'email',
                    type: 'm.id.thirdparty',
                },
                password: this.password,
            }
            ).then((res) => {
                matrixStore.isLoggedIn = !!res.access_token;
                matrixStore.auth = res;
                localStorage.setItem('mon_auth', JSON.stringify(res));
            });
            this.clear();
        },
        clear() {
            this.username = "";
            this.password = ""
        }
    }
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>