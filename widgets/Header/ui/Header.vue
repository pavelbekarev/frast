<script lang="ts" setup>
import "../style.scss";

import NavList from '~/features/NavList';
import Button from '~/shared/ui/Button';
import Logo from '~/shared/ui/Logo';
import ContentBar from '~/widgets/ContentBar';

import lightIcon from "~/public/assets/lightIcon.svg"
import shieldIcon from "~/public/assets/shieldIcon.svg"
import serverIcon from "~/public/assets/serverIcon.svg"
import FlagsRow from "~/shared/ui/FlagsRow";

const burgerActive = ref<boolean>(false);
</script>
<template>
    <header class="header__wrapper">
        <div class="countryLabel">
            <span class="countryLabel__text">Мощные серверы<br/> в 5 странах</span>
            <FlagsRow class="countryLabel__flags" />
        </div>
        <div class="container header">
            <div class="header__head">
                <Logo />
                <div class="burger" :class="{ 'burger--active': burgerActive }" @click="burgerActive = !burgerActive">
                    <span class="burger__line"></span>
                    <span class="burger__line"></span>
                    <span class="burger__line"></span>
                </div>
                <div class="header__contentBarWrapper" :class="burgerActive && 'header__contentBarWrapper--expanded'">
                    <ContentBar>
                        <template #content>
                            <NavList />
                        </template>
                    </ContentBar>
                    <ContentBar class="header__info" #content>
                        <a href="tel: +7(495)123-45-67" class="header__phone">+7 (495) 123-45-67</a>
                        <Button class="header__button header__button--fill">
                            Получить консультацию
                        </Button>
                    </ContentBar>
                </div>
            </div>
            <div class="header__content">
                <h1 class="headline"><span class="headline--accent">Ваши данные</span><br/>
                    <span class="headline--text">в надежных руках</span>
                </h1>
                <h2 class="subtitle subtitle--textColor subtitle--h2 header__subtitle">Арендуйте выделенные серверы и VPS
                    Гарантируем молниеносную поддержку<br/> 
                    и прозрачные тарифы без скрытых платежей
                </h2>
                <div class="header__controls">
                    <Button class="header__button header__button--fill">Подобрать сервер</Button>
                    <Button class="header__button header__button--notFill">Наши тарифы</Button>
                </div>
            </div>
            <div class="header__bottom">
                <div class="icon">
                    <img class="icon__img" :src="shieldIcon" alt="Иконка щита">
                    <span class="icon__label">DDoS защита</span>
                </div>
                <div class="icon">
                    <img class="icon__img" :src="lightIcon" alt="Иконка молнии">
                    <span class="icon__label">Мгновенная активация</span>
                </div>
                <div class="icon">
                    <img class="icon__img" :src="serverIcon" alt="Иконка сервера">
                    <span class="icon__label">99.9% Uptime</span>
                </div>
            </div>
        </div>
    </header>
</template>