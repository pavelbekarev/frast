<script setup lang="ts">
import "../style.scss";

defineProps<{
    text?: string;
}>();
</script>
<template>
    <button class="button">
        <slot>{{ text }}</slot>
    </button>
</template>