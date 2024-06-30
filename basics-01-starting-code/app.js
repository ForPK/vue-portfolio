const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish',
            courseGoalB: 'the course and learn Vue!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNuber = Math.random();
            if ( randomNuber < 0.5 ) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');