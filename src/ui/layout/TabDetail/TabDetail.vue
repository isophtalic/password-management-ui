<script setup lang="ts">
import { formatDate } from '../../lib/utils';
import type { CredentialDetail } from 'src/ui/model/credentials';

const props = defineProps<{
    data: CredentialDetail
}>()
</script>
<template>
    <div class="p-2">
        <div>{{ props.data.name }}</div>
        <div>{{ props.data.username }}</div>
        <div>{{ props.data.password }}</div>
        <div>{{ formatDate(props.data.created_at ?? 0) }}</div>
        <div>{{ formatDate(props.data.updated_at ?? 0) }}</div>
    </div>
</template>