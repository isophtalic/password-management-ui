<script setup lang="ts">
import { Input, InputPassword } from '../../components/input';
import HeaderForm from '../../components/header/HeaderForm.vue';



</script>
<template>
    <form
        class="bg-white/25 shadow-lg backdrop-blur-md border border-white/20 rounded-xl p-4 w-80 h-96 flex items-center flex-col gap-4">
        <HeaderForm text="Login Vault" />
        <div class="w-full">
            <Input label="Email" error="alksjkdlasd" />
            <InputPassword label="Password" type="password" error="alksjkdlasd" />
        </div>
        <div class="w-full flex gap-2">
            <div class="text-white">
                may khong co tai khoan ?
            </div>
            <div class="text-primary">Sign up</div>
        </div>
        <div class="w-full">
            <div class="btn text-primary">Sign In</div>
        </div>
    </form>
</template>

<style scoped></style>