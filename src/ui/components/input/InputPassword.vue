<script setup lang="ts">
import { cn } from '../../lib/utils';
import EyeOpenSVG from "../../assets/eye-open.svg"
import EyeCloseSVG from "../../assets/eye-close.svg"
import { ref } from 'vue';

const props = defineProps<{
    label: string
    placeholder?: string
    error?: string
}>()

const isView = ref(false)

function capitalizeFirstLetter(val: string) {
    val = val.toLowerCase()
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

</script>
<template>
    <div class="flex flex-col gap-1">
        <label :class="cn('fieldset-label font-medium', props.error ? 'text-error' : 'text-white')">{{
            capitalizeFirstLetter(props.label) }}</label>
        <div class="relative">
            <input :type="isView ? 'text' : 'password'" class="input w-full" :class="props.error ? 'border-error' : ''"
                :placeholder="props.placeholder" />
            <span class="absolute top-0 right-0 h-10 w-10 flex justify-center items-center cursor-pointer"
                @click="isView = !isView">
                <EyeOpenSVG class="text-black " v-if="!isView" />
                <EyeCloseSVG class="text-black " v-if="isView" />
            </span>
            <div class="text-error">{{ props.error }}</div>
        </div>
    </div>
</template>