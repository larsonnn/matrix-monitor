
<script setup>
import Form from '../components/Form.vue';
import FormElementContainer from '../components/FormElementContainer.vue';
import TextInput from '../components/Inputs/TextInput.vue';
import PasswordInput from '../components/Inputs/PasswordInput.vue';
import SubmitInput from '../components/Inputs/SubmitInput.vue';
</script>

<template>
    <Form>
        <FormElementContainer>
            <TextInput label="username" @change:input="$value => this.username = $value" />
        </FormElementContainer>
        <FormElementContainer>
            <PasswordInput label="password" @change:input="$value => this.password = $value" />
        </FormElementContainer>
        <FormElementContainer>
            <SubmitInput text="Login" />
        </FormElementContainer>
    </Form>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: ""
        }
    }
}
</script>