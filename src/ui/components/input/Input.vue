<script setup lang="ts">
import { cn } from '../../lib/utils';

const model = defineModel<string>()

const props = defineProps<{
    label: string
    placeholder?: string
    type?: string
    error?: string
}>()

function capitalizeFirstLetter(val: string) {
    val = val.toLowerCase()
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

</script>
<template>
    <div class="flex flex-col gap-1">
        <label :class="cn('fieldset-label font-medium', props.error ? 'text-error' : 'text-white')">{{
            capitalizeFirstLetter(props.label) }}</label>
        <div>
            <input v-model="model" :type="props.type ?? 'text'" class="input w-full"
                :class="props.error ? 'border-error' : ''" :placeholder="props.placeholder" />
            <div class="text-error">{{ props.error }}</div>
        </div>
    </div>
</template>