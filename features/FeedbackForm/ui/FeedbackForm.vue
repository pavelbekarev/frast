<script setup lang="ts">
import "../style.scss";
import FormRenderer from "~/shared/ui/FormRenderer";
import { contactFormFields } from "~/entities/FormField/model/contactFormFields";
import { useFeedbackForm } from "../model/useFeedbackForm";

const { onSubmit } = useFeedbackForm();
</script>
<template>
    <FormRenderer @submit="onSubmit" :fields="contactFormFields" />
</template>