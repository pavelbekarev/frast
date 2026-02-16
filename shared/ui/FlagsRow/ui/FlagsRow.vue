<script setup lang="ts">
import "../style.scss";

import turkey from "~/public/assets/turkey.png"
import russia from "~/public/assets/russia.png"
import kz from "~/public/assets/kz.png"
import sing from "~/public/assets/sing.png"
import oae from "~/public/assets/oae.png"
</script>
<template>
    <div class="flagsRow">
        <img :src="turkey" alt="Флаг Турции">
        <img :src="russia" alt="Флаг РФ">
        <img :src="kz" alt="Флаг Казахстана">
        <img :src="sing" alt="Флаг Сингапура">
        <img :src="oae" alt="Флаг ОАЭ">
    </div>
</template>