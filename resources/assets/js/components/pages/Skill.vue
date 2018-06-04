<template>
    <div class="project">
        <div class="project__header"
             :style="{background: 'url(\'/storage/' + skill.header_image + '\') center center'}">
            <div class="project__headerinfo">
                <div class="container">
                    <h1>{{ skill.title }}</h1>
                    <p>
                        {{ skill.quick_description }}
                    </p>
                </div>
            </div>
        </div>
        <div class="project__info">
            <div class="container">
                <router-link :to="{name: 'skills'}" class="btn"><img src="/assets/img/left-arrow-angle.png"> Back to
                    overview
                </router-link>
                <div class="project__bit project__bit--objective">
                    <div class="row">
                        <div class="col-md-3">
                            <h3>Description</h3>
                        </div>
                        <div class="col-md-6">
                            <p v-html="skill.description">

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="project__images">
            <div class="container">
                <div v-for="image in skill.images" class="project__image">
                    <img :src="'/storage/' + image">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                skill: {
                    images: []
                },
            }
        },

        mounted() {
            let that = this;
            axios.get('/api/v1/skill/' + that.$route.params.slug)
                .then(response => {
                    that.skill = response.data;
                    that.skill.images = JSON.parse(that.skill.images);
                    that.skill.header_image = that.skill.images[1].replace(/\\/g, '/');
                });
        }

    }
</script>