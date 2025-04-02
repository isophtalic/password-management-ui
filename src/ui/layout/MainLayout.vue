<script setup lang="ts">
import Sidebar from './SideBar/Sidebar.vue';
import TopBar from './TopBar/TopBar.vue';

</script>
<template>
    <div class="w-full flex h-screen">
        <Sidebar />
        <div class="flex-grow flex flex-col">
            <TopBar />
            <div>
                <slot />
            </div>
        </div>
    </div>
</template>