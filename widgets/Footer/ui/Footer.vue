<script setup lang="ts">
import Logo from "~/shared/ui/Logo";
import "../style.scss";
import FlagsRow from "~/shared/ui/FlagsRow";
import { Phone } from "lucide-vue-next";
</script>
<template>
    <div class="footerWrapper">
        <div class="container footer">
            <div class="footer__content">
                <div class="footer__top"> 
                    <div class="footer__item">
                        <Logo class="footer__logo" />
                        <h2 class="subtitle footer__subtitle">
                            Надёжный хостинг-провайдер с дата-центрами в 5
                            странах мира. Ваши данные — в надёжных руках.
                        </h2>
                        <FlagsRow class="footer__flags" />
                    </div>
                    <ul class="list">
                        <span class="list__title">Услуги</span>
                        <div class="list__items">
                            <li class="list__item list__item--link">VPS серверы</li>
                            <li class="list__item list__item--link">Выделенные серверы</li>
                            <li class="list__item list__item--link">Облачный хостинг</li>
                            <li class="list__item list__item--link">Защита от DDoS</li>
                        </div>
                    </ul>
                    <ul class="list">
                        <span class="list__title">Компания</span>
                        <div class="list__items">
                            <li class="list__item list__item--link">О компании</li>
                            <li class="list__item list__item--link">Контакты</li>
                            <li class="list__item list__item--link">Партнёрам</li>
                            <li class="list__item list__item--link">Вакансии</li>
                        </div>
                    </ul>
                    <ul class="list">
                        <span class="list__title">Контакты</span>
                        <div class="list__items">
                            <li class="list__item">
                                <Phone />
                                +7 (495) 123-45-67
                            </li>
                            <li class="list__item">info@Frast.com</li>
                            <li class="list__item">Москва, ул. Примерная, д. 1</li>
                        </div>
                    </ul>
                </div>
                <div class="privacy">
                    <span class="privacy__item">© 2026 Frast. Все права защищены.</span>
                    <ul class="list list--row">
                        <span class="privacy__item privacy__item--link">Политика конфиденциальности</span>
                        <span class="privacy__item privacy__item--link">Условия использования</span>
                        <span class="privacy__item privacy__item--link">Договор оферты</span>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>