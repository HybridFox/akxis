<template>
    <div class="projects">
        <div class="container">
            <div class="projects__intro">
                <div class="projects__image"></div>
                <p>
                    I create work I love, and I believe in what I do <span></span>
                </p>
            </div>
            <div class="projects__list">
                <div v-for="project in projects" class="projects__item">
                    <router-link :to="{ name: 'project', params: { slug: project.slug }}">
                        <img :src="'/storage/' + project.preview_image" alt="">
                        <div class="projects__info">
                            <h3>{{ project.title }}</h3>
                            <p>{{ project.technologies }}</p>
                            <router-link v-if="project.quick_description" :to="{ name: 'project', params: { slug: project.slug }}" class="btn">View

                            </router-link>
                        </div>
                    </router-link>
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
                projects: [],
            }
        },

        mounted() {
            let that = this;
            axios.get('/api/v1/projects')
                .then(response => {
                    that.projects = response.data;
                })
        }

    }
</script>