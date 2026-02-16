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
        <Transition name="questionResize">
            <div class="question" :class="data.isOpened && 'question--opened'">
                <div class="question__textWrapper">
                    <span class="subtitle question__questNumber">{{ questionNumber }}</span>
            
                    <span class="subtitle subtitle--h2 question__text">
                        {{ data.title }}
                    </span>
                    <img 
                        class="question__toggleButton"
                        :src="
                            data.isOpened ? closeArrow : openArrow
                        "
                        :alt="
                            data.isOpened ? 
                            'Кнопка закрытия вопроса' : 
                            'Кнопка открытия вопроса'
                        " 
                        @click="handleToggleQuestion"
                    />
                </div>
                <Transition name="answerAppear">
                    <span 
                        v-if="data.isOpened"
                        class="subtitle subtitle--h2 question__answer question__answer--visible"
                    >
                        {{ data.answer }}
                    </span>
                </Transition>
            </div>
        </Transition>
</template>