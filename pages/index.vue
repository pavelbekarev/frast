<script setup lang="ts">
import Header from '~/widgets/Header';
import GlobalArchitecture from '~/widgets/GlobalArchitecture';
import PriceList from '~/widgets/PriceList';
import AboutCompany from '~/widgets/AboutCompany';
import FAQ from '~/widgets/FAQ';
import FeedbackDetails from '~/widgets/FeedbackDetails';
</script>
<template>
    <Header />
    <main class="main">
        <section class="container">
            <GlobalArchitecture />
        </section>
        <section class="priceListSection">
            <div class="container">
                <PriceList />
            </div>
        </section>
        <section class="aboutCompanySection">
            <div class="container">
                <AboutCompany />
            </div>
        </section>
        <section class="faqSection">
            <div class="container">
                <FAQ />
            </div>
        </section>
        <section class="feedbackDetailsSection container">
                <FeedbackDetails />
        </section>
    </main>
</template>
<style scoped lang="scss">
.main {
    height: 100vh;
}

.priceListSection {
    height: 100vh;
    padding-top: 10rem;
    background-color: #F4F8FE;
}

.aboutCompanySection {
    height: 50vh;
}

.faqSection {
    height: 100vh;
    padding-top: 10rem;
}

.feedbackDetailsSection {
    position: relative;
    margin-top: 10rem;
    height: 100vh;
}
</style>