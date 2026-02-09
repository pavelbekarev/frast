<script setup lang="ts">
import "../style.scss";

defineProps<{
    countryTitle: string;
    countryCapital: string;
    details?: any
}>();
</script>
<template>
    <div class="countryCard">
        <slot name="img" />
        <span class="countryCard__countryTitle">{{ countryTitle }}</span>
        <span class="countryCard__countryCapital">{{ countryCapital }}</span>
    </div>
</template>
