<template>
    <div class="project">
        <div class="project__header"
             :style="{background: 'url(\'/assets/img/work/' + project.slug + '.png\') center center'}">
            <div class="project__headerinfo">
                <div class="container">
                    <h1>{{ project.title }}</h1>
                    <p>
                        {{ project.quick_description }}
                    </p>
                    <a target="_blank" v-if="project.website" :href="project.website" class="btn"><img src="/assets/img/link.png">
                        Visit site</a>
                </div>
            </div>
        </div>
        <div class="project__info">
            <div class="container">
                <router-link :to="{name: 'projects'}" class="btn"><img src="/assets/img/left-arrow-angle.png"> Back to
                    overview
                </router-link>
                <div class="project__bit project__bit--objective">
                    <div class="row">
                        <div class="col-md-3">
                            <h3>Objective</h3>
                        </div>
                        <div class="col-md-9">
                            <p v-html="project.objective">

                            </p>
                        </div>
                    </div>
                </div>
                <div class="project__bit project__bit--solution">
                    <div class="row">
                        <div class="col-md-3">
                            <h3>Solution</h3>
                        </div>
                        <div class="col-md-9">
                            <p v-html="project.solution">

                            </p>
                        </div>
                    </div>
                </div>
                <div class="project__bit project__bit--results">
                    <div class="row">
                        <div class="col-md-3">
                            <h3>Results</h3>
                        </div>
                        <div class="col-md-9">
                            <p v-html="project.results">

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="project__images">
            <div class="container">
                <div v-for="image in project.images" class="project__image">
                    <img :src="'/assets/img/work/' + project.slug + '/' + image + '.png'">
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
                project: [],
            }
        },

        mounted() {
            let that = this;
            axios.get('/api/project/' + that.$route.params.slug)
                .then(response => {
                    that.project = response.data;
                })
        }

    }
</script>