<script setup lang="ts">
import ProductDetails from "~/widgets/ProductDetails";
import "../style.scss";
import { priceListConfig } from "../config/priceListConfig";


</script>
<template>
    <div class="priceList">
        <h2 class="subtitle subtitle--h2 subtitle--accentColor">Тарифные планы</h2>
        <h3 class="subtitle subtitle--h3 subtitle--textColor globalArchitecture__h3">
            Выберите подходящий тариф или свяжитесь с нами<br/>
            для индивидуального решения. Все тарифы включают<br/>
            техническую поддержку 24/7.
        </h3>

        <div class="priceList__products">
            <ProductDetails v-for="item in priceListConfig" :data="item" />
        </div>
    </div>
</template>
