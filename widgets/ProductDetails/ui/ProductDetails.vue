<script setup lang="ts">
import type { IProductDetails } from "~/entities/ProductDetails/interface/IProductDetails";
import "../style.scss";
import Button from "~/shared/ui/Button";

defineProps<{
    data: IProductDetails;
}>()
</script>
<template>
    <div class="productDetails" :class="data.isPopular ? 'productDetails--popular' : ''">
        <span class="productDetails__title">{{ data.title }}</span>
        <span class="productDetails__text">{{ data.description }}</span>
        <div class="productDetails__price">
            <span class="productDetails__price productDetails__price--large">
                {{ data.price }} 
            </span> 
            /мес
        </div>
        <div class="productDetails__advantages">
            <ul class="productDetails__list">
                <li class="productDetails__item" v-for="adv in data.advantages">
                    <svg class="checkmark" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#000"/>
                    </svg>
                    {{ adv }}
                </li>
            </ul>
        </div>
        <Button class="productDetails__button" :class="data.isPopular && 'productDetails__button--popular'" text="Заказать" />
    </div>
</template>