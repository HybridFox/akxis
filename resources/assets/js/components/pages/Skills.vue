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
                <div v-for="skill in skills" class="projects__item">
                    <router-link :to="{ name: 'skill', params: { slug: skill.slug }}">
                        <p>
                            {{ skill.slug }}
                        </p>
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
                skills: [],
            }
        },

        mounted() {
            let that = this;
            axios.get('/api/v1/skills')
                .then(response => {
                    that.skills = response.data;
                })
        }

    }
</script>