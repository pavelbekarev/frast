<script setup lang="ts">
import "../style.scss";
import CountryCard from "~/shared/ui/CountryCard";
import bg from "~/public/assets/globalArchitecture__bg.svg";
import { countryConfig } from "~/shared/config/countryConfig";
import InteractiveMap from "~/features/InteractiveMap";
import { useCountryPointStore } from "~/entities/CountryPoint/store/countryPoint";

const countryPointsStore = useCountryPointStore();

watch(() => countryPointsStore.hoveredPointId, (newVal) => {
    console.debug(newVal)
})

watch(() => countryPointsStore.selectedPointId, (newVal) => {
    console.debug(newVal)
})
</script>
<template>
    <div class="globalArchitecture">
        <h2 class="subtitle subtitle--h2 subtitle--accentColor">Глобальная инфраструктура</h2>
        <h3 class="subtitle subtitle--h3 subtitle--textColor globalArchitecture__h3">Наши дата-центры расположены в ключевых точках мира,<br/> 
            обеспечивая минимальную задержку и максимальную доступность<br/> 
            для ваших проектов.
        </h3>
        <div class="globalArchitecture__countryCards">
            <CountryCard 
                v-for="item in countryConfig" 
                :country-title="item.countryTitle" 
                :country-capital="item.countryCapital"
            >
                <template #img>
                    <img class="globalArchitecture__img" :src="item.img" :alt="item.countryTitle">
                </template>
            </CountryCard>
        </div>
        <img class="globalArchitecture__bg" :src="bg" alt="">

        <InteractiveMap />
        <div class="globalArchitecture__promptWrapper">
            <span class="globalArchitecture__hoverPrompt">Наведите на страну, чтобы узнать подробнее </span>
        </div>
    </div>
</template>