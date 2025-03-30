<script setup lang="ts">
import LoginForm from './LoginForm.vue';

</script>
<template>
    <div class="flex justify-center items-center min-h-screen login-wrapper">
        <LoginForm />
    </div>
</template>

<style scoped>
.login-wrapper {
    background: rgb(0, 198, 255);
    background: radial-gradient(circle, rgba(0, 198, 255, 1) 0%, rgba(1, 166, 220, 1) 2%, rgba(1, 152, 205, 1) 3%, rgba(1, 145, 197, 1) 5%, rgba(1, 130, 181, 1) 7%, rgba(1, 120, 170, 1) 9%, rgba(1, 115, 164, 1) 11%, rgba(1, 93, 139, 1) 14%, rgba(1, 76, 120, 1) 17%, rgba(1, 53, 95, 1) 22%, rgba(2, 40, 81, 1) 26%, rgba(2, 33, 73, 1) 30%, rgba(2, 25, 64, 1) 48%, rgba(2, 0, 36, 1) 100%);
}
</style>