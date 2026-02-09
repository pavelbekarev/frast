<script setup lang="ts">
import { defaultNavList } from "../config/defaultNavList";
import "../style.scss";
import { navigateTo } from "../model/navigateTo";

defineProps<{
    navigationList?: any
}>();
</script>
<template>
    <ul class="navList">
        <template v-if="navigationList">
            <li class="navList__item" v-for="item in navigationList" @click="navigateTo(item.to)">
                {{ item.name }}
            </li>
        </template>
        <template v-else>
            <li class="navList__item" v-for="item in defaultNavList" @click="navigateTo(item.to)">
                {{ item.name }}
            </li>
        </template>
    </ul>
</template>