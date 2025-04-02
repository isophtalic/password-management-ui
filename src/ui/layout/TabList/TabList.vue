<script setup lang="ts">
import { cn } from '../../lib/utils';
import type { Credential } from 'src/ui/model/credentials';

const model = defineModel<string>("selected")

const props = defineProps<{
    credentials: Credential[]
}>()
</script>
<template>
    <div v-for="c in props.credentials">
        <div :class="cn('flex gap-4 cursor-pointer ', model === c.platform ? 'bg-accent' : 'hover:bg-gray-200')"
            @click="model = c.platform">
            <div class="p-2">icon</div>
            <div class="p-2">
                <div>{{ c.name }}</div>
                <div>{{ c.platform }}</div>
            </div>
        </div>
    </div>
</template>