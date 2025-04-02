<script setup lang="ts">
import { Input, InputPassword } from '../../components/input';
import HeaderForm from '../../components/header/HeaderForm.vue';
import { ref } from 'vue';

const username = ref<string>("")
const password = ref<string>("")

const onSubmit = () => {
    console.log(username.value, password.value)
}

</script>
<template>
    <form
        class="bg-white/25 shadow-lg backdrop-blur-md border border-white/20 rounded-xl p-4 w-80 h-96 flex items-center flex-col gap-4">
        <HeaderForm text="Login Vault" />
        <div class="w-full">
            <Input v-model="username" label="Email" />
            <InputPassword v-model="password" label="Password" type="password" />
        </div>
        <div class="w-full flex gap-2">
            <div class="text-white">
                Don't have an account?
            </div>
            <div class="text-primary hover:underline cursor-pointer">Sign up</div>
        </div>
        <div class="w-full">
            <button type="button" class="btn text-primary" @click="onSubmit">Sign In</button>
        </div>
    </form>
</template>

<style scoped></style>