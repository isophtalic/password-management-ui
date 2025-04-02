<script setup lang="ts">
import HomeSVG from "../../assets/home.svg"
import AllItemSVG from "../../assets/all-item.svg"

</script>
<template>
    <div class="w-60 bg-amber-400 h-full p-4 flex flex-col gap-4">
        <div class="h-10 flex items-center gap-4">
            <HomeSVG class="text-xl font-bold" />
            <div class="text-xl font-bold flex-grow ">Vault</div>
        </div>
        <div>
            <div class="flex gap-2">
                <AllItemSVG />
                <span>All Items</span>
            </div>
        </div>
    </div>
</template>