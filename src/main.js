import { createApp } from 'vue';
import App from './App.vue';


import HeroSection from './components/HeroSection.vue';
import ThreeBlurbs from './components/ThreeBlurbs.vue';
import SocialProof from './components/SocialProof.vue';
import FeaturesPartOne from './components/FeaturesPartOne.vue';
import FeaturesPartTwo from './components/FeaturesPartTwo.vue';
import CallToAction from './components/CallToAction.vue';
import FooterSection from './components/FooterSection.vue';

const app = createApp(App);


app.component('hero-section', HeroSection);
app.component('three-blurbs', ThreeBlurbs);
app.component('social-proof', SocialProof);
app.component('features-part-one', FeaturesPartOne);
app.component('features-part-two', FeaturesPartTwo);
app.component('call-to-action', CallToAction);
app.component('footer-section', FooterSection);

app.mount('#app');