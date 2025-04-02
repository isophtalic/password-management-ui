<script setup lang="ts">
import SearchIconSVG from "../../assets/search-icon.svg"
const model = defineModel<string>()
</script>
<template>
    <div class="input-wrapper relative max-w-96 w-[65%]">
        <input v-model="model" type="text" class="input w-full" />
        <div class="icon-search-wrapper absolute right-0 top-0 h-10 w-10 flex items-center justify-center">
            <SearchIconSVG class="w-6 h-6 text-red-400" />
        </div>
    </div>
</template>