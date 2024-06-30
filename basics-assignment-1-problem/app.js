const app = Vue.createApp({
    data() {
        return {
            yourName: 'zz',
            yourAge: 23,
            imageUrl: 'https://economychosun.com/site/data/img_dir/2023/07/22/2023072200048_0.jpg',
        }
    },
    methods: {
        yourAgeIn5Years() {
            return this.yourAge + 5;
        },
        favoriteNum() {
            const randomNum = Math.floor(Math.random() * 2);
            return parseFloat(randomNum);
        }
    }
});

app.mount('#assignment');