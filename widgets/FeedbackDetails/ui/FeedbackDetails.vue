<script setup lang="ts">
import FeedbackForm from "~/features/FeedbackForm";
import "../style.scss";
</script>
<template>
    <div class="feedbackDetails">
        <div class="feedbackDetails__head">
            <h2 class="subtitle subtitle--h2 feedbackDetails__title">Обсудим ваш проект?</h2>
            <h3 class="subtitle subtitle--h3 feedbackDetails__subtitle">
                Оставьте заявку, и наш специалист свяжется<br/> с вами для подбора оптимального решения.
            </h3>
        </div>
        <div class="feedbackDetails__form">
            <FeedbackForm />
        </div>
    </div>
</template>