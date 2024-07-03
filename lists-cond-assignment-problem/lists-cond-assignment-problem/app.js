const app = Vue.createApp({
    data() {
        return {
            enterTask: '',
            taskItems: [],
            show: true,
        };
    },
    methods: {
        btnAdd() {
            this.taskItems.push(this.enterTask);
        },
        btnHideShow() {
            this.show = !this.show;
        }
    }
});

app.mount("#assignment");