<script setup lang="ts">
import Header from '~/widgets/Header';
import GlobalArchitecture from '~/widgets/GlobalArchitecture';
import PriceList from '~/widgets/PriceList';
import AboutCompany from '~/widgets/AboutCompany';
import FAQ from '~/widgets/FAQ';
import FeedbackDetails from '~/widgets/FeedbackDetails';
import Footer from '~/widgets/Footer';
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
    <Footer />
</template>
<style scoped lang="scss">
.priceListSection {
    height: 100vh;
    padding: 10rem 0;
    background-color: #F4F8FE;

    @media (max-width: 1240px) {
        height: 100%;
    }
}

.aboutCompanySection {
    height: 50vh;

    @media (max-width: 610px) {
        height: auto;
    }
}

.faqSection {
    height: 100%;
    padding: 10rem 0;
}

.feedbackDetailsSection {
    position: relative;
    height: 100vh;

    @media (max-width: 670px) {
        height: auto;
        margin: 10rem 0;
    }
}
</style>