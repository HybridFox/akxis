<template>
    <div class="projects skills">
        <div class="container">
            <div class="projects__intro">
                <div class="projects__image"></div>
                <p>
                    Myself vastly defined with real 21st century skills. <span></span>
                </p>
            </div>
            <div class="projects__list">
                <div v-for="skill in skills" class="projects__item">
                    <router-link :to="{ name: 'skill', params: { slug: skill.slug }}">
                        <h3>{{ skill.title }}</h3>
                        <p>{{ skill.skill }}</p>
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