<template>
    <div class="intro">
        <div class="intro__layer intro__layer--1"></div>
        <div class="intro__layer intro__layer--2"></div>
        <div class="intro__layer intro__layer--3"></div>
        <div class="intro__layer intro__layer--4"></div>
        <div class="intro__layer intro__layer--final">
            <div class="intro__elevator">
                <router-link :to="{name: 'about'}" class="btn">About</router-link>
            </div>
        </div>
        <div class="intro__layer intro__layer--picture">
            <div class="intro__project">
                <h3>Baksteen IV</h3>
                <p>A fully working website with the external website tickerscript implemented so people
                    are able to pre-order / buy their ticket online. Overall response to the finished website
                    was very positive.</p>
                <router-link :to="{name: 'project', params: {slug: 'baksteen'}}" class="btn"><img src="/assets/img/right-arrow-angle.png"> Explore</router-link>
            </div>
        </div>
        <div class="intro__content">
            <div class="container">
                <div class="intro__titlecontainer">
                    <h1 class="intro__title">
                        AKXIS
                    </h1>
                    <span class="intro__subtitle">혁신과 창조성</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },

        mounted() {

        }

    }
</script>