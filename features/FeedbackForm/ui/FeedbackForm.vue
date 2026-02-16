<script setup lang="ts">
import "../style.scss";
import type { IFormField } from "~/entities/FormField/types/IFormField";
import Button from "~/shared/ui/Button";

const props = defineProps<{
    fields: IFormField[]
}>();

const emit = defineEmits<{
    (e: 'submit', values: Record<string, unknown>): void;
}>();

const values = reactive<Record<string, unknown>>({});

const updateValue = (name: string, value: unknown) => {
    values[name] = value;
}

const deleteFile = (name: string) => {
    values[name] = null
}

const onSubmit = () => {
    emit('submit', { ...values })
}


</script>
<template>
    <form class="feedbackForm" @submit.prevent="onSubmit">
        <slot>
            <div class="feedbackForm__item" :class="field.type === 'checkbox' && 'feedbackForm__item--row'" v-for="field in fields" :key="field.id">
                <label class="feedbackForm__label" v-if="field.type !== 'text' && field.type !== 'checkbox'" :for="field.name">
                    {{ field.label }}
                </label>
                <input 
                    v-if="field.type === 'text' && field.name !== 'phone'"
                    :id="field.name"
                    type="text"
                    class="feedbackForm__input"
                    :name="field.name" 
                    :placeholder="field.placeholder" 
                    :required="field.required" 
                    @input="updateValue(field.name, ($event.target as HTMLInputElement).value)"
                >
                <textarea 
                    v-else-if="field.type === 'textarea'"
                    :id="field.name"
                    type="textarea"
                    class="feedbackForm__input feedbackForm__input--textarea"
                    :name="field.name"
                    :placeholder="field.placeholder"  
                    :required="field.required"
                    @input="updateValue(field.name, ($event.target as HTMLInputElement).value)"
                />
                <template v-else-if="field.type === 'checkbox'" >
                    <label class="feedbackForm__label" :for="field.name">{{ field.label }}</label>
                    <input 
                        :id="field.name"
                        type="checkbox"
                        class="feedbackForm__input feedbackForm__input--checkbox"
                        :name="field.name"
                        :required="field.required"
                        @change="updateValue(field.name, ($event.target as HTMLInputElement).checked)"
                    />
                </template>

                <div v-else-if="field.type === 'file'" class="feedbackForm__fileWrapper">
                    <label v-if="!values[field.name]" class="feedbackForm__input feedbackForm__input--file" :for="field.name">
                        Загрузить файл
                    </label>
                    <label v-else class="feedbackForm__input feedbackForm__input--file" @click="deleteFile(field.name)">
                        Удалить файл
                    </label>
                    <input 
                        style="display: none;"
                        type="file"
                        :id="field.name"
                        :name="field.name"
                        :required="field.required"
                        @change="updateValue(field.name, ($event.target as HTMLInputElement).files?.[0])"
                    />
                    <div v-if="values[field.name]">
                        <span class="feedbackForm__label">
                            Вы выбрали файл: <br/>{{ values[field.name]?.name }}
                        </span>
                    </div>
                </div>

                <!-- кастомный инпут -->
                <slot
                    v-else
                    :name="field.name"
                    :field="field"
                    :value="values[field.name]"
                    :updateValue="(value: unknown) => updateValue(field.name, value)"
                />
            </div>
        </slot>

        <Button class="feedbackForm__button">Оставить заявку</Button>
    </form>
</template>