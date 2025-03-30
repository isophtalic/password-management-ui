<script setup lang="ts">
const props = defineProps<{
    text: string
}>()
</script>

<template>
    <div class="text-2xl font-bold text-white">
        {{ props.text }}
    </div>
</template>