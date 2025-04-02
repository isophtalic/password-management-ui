<script setup lang="ts">
import type { Credential, CredentialDetail } from 'src/ui/model/credentials';
import { ref } from 'vue';
import TabList from '../TabList/TabList.vue';
import TabDetail from '../TabDetail/TabDetail.vue';
const fakeCredentials: Credential[] = [
    {
        name: "Google Account",
        platform: "Google"
    },
    {
        name: "GitHub",
        platform: "GitHub"
    },
    {
        name: "Twitter",
        platform: "Twitter"
    },
    {
        name: "Facebook",
        platform: "Facebook"
    },
    {
        name: "LinkedIn",
        platform: "LinkedIn"
    }
];

const fakeCredentialDetail: CredentialDetail[] = [
    {
        name: "Google Account",
        username: "john.doe@gmail.com",
        password: "P@ssw0rd123",
        platform: "Google",
        created_at: 1712035200,
        updated_at: 1714636800
    },
    {
        name: "GitHub",
        username: "johndoe",
        password: "G1tHub$ecret!",
        platform: "GitHub",
        created_at: 1711123200,
        updated_at: 1713724800
    },
    {
        name: "Twitter",
        username: "john_doe",
        password: "Tw!tterPass99",
        platform: "Twitter",
        created_at: 1709510400,
        updated_at: 1712112000
    },
    {
        name: "Facebook",
        username: "john.doe.fb",
        password: "FbSuperSecure!",
        platform: "Facebook",
        created_at: 1710307200,
        updated_at: 1712908800
    }
];

const selected = ref<string>("")
</script>
<template>
    <div class="grid grid-cols-2">
        <div>
            <TabList :credentials="fakeCredentials" v-model:selected="selected" />
        </div>
        <div>
            <TabDetail :data="fakeCredentialDetail.find(e => e.platform === selected) ?? {}" />
        </div>
    </div>
</template>