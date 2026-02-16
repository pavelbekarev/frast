<script setup lang="ts">
import CustomSelect from "~/shared/ui/CustomSelect";
import { countries } from "../config/phoneCountriesConfig";
import "../style.scss";

</script>
<template>
    <div class="phoneInput">
        <CustomSelect :menu="countries" />
        <input 
            type="text"
            class="phoneInput__input"
        >
    </div>
</template>
