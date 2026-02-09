<script setup lang="ts">
import Question from "~/features/Question";
import "../style.scss";
import type { IQuestion } from "~/entities/Question/interface/IQuestion";
import { useQuestionStore } from "~/entities/Question/store/questionStore";

const questionStore = useQuestionStore();
</script>
<template>
    <div class="faq">
        <h2 class="subtitle subtitle--h2 faq__title">Часто задаваемые вопросы</h2>
        
        <div class="faq__questions">
            <Question v-for="item in questionStore.questions" :data="item" />
        </div>
    </div>
</template>