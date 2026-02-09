<script setup lang="ts">
import "../style.scss";
import type { IQuestion } from "~/entities/Question/interface/IQuestion";
import openArrow from "~/public/assets/openArrow.svg"
import closeArrow from "~/public/assets/closeArrow.svg"

const props = defineProps<{
    data: IQuestion;
}>();

const handleToggleQuestion = () => {
    props.data.isOpened = !props.data.isOpened
}

const questionNumber = computed(() => props.data.id <= 9 ? `0${props.data.id}` : `${props.data.id}`)
</script>
<template>
    <div class="question" :class="data.isOpened && 'question--opened'">
        <span class="subtitle question__questNumber">{{ questionNumber }}</span>

        <div class="question__textWrapper">
            <span class="subtitle subtitle--h2 question__text">
                {{ data.title }}
            </span>
            <span 
                :class="data.isOpened && 'question__answer--visible'" 
                class="subtitle subtitle--h2 question__answer"
            >
                {{ data.answer }}
            </span>
        </div>

        <div class="question__toggleButtonWrapper">
            <img 
                class="question__toggleButton"
                :src="data.isOpened ? closeArrow : openArrow"
                :alt="data.isOpened ? 'Кнопка закрытия вопроса' : 'Кнопка открытия вопроса'" 
                @click="handleToggleQuestion"
            />

        </div>
    </div>
</template>