<script setup lang="ts">
import "../style.scss";
import closeArrow from "~/public/assets/closeArrow.svg"

const props = defineProps<{
    menu: any[]
}>()

const currentValue = ref(props.menu[0])
const isMenuExpanded = ref<boolean>(false);

const handleExpandSelect = () => {
    isMenuExpanded.value = !isMenuExpanded.value;
}
</script>
<template>
    <div class="customSelect">
        <img @click="handleExpandSelect" :src="currentValue.img" alt="Флаг страны" class="customSelect__label">
        <img 
            :src="closeArrow" 
            alt="" 
            class="customSelect__expandButton"
            :class="
                isMenuExpanded ? 
                'customSelect__expandButton--expanded' : 
                'customSelect__expandButton--hidden'
            "
        />
        <Transition name="expandMenu">
            <div class="customSelect__menu" v-if="isMenuExpanded">
                <div class="customSelect__item" v-for="item in menu" :id="item.id" @click="currentValue = item">
                    <img :src="item.img" alt="asdasd">
                </div>
            </div>
        </Transition>
    </div>
</template>