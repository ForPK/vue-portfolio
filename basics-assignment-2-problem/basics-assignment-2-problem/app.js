const app = Vue.createApp({
    data() {
        return {
            inputTxt: '',
            confirmTxt: '',
        }
    },
    methods: {
        alertTxt() {
            alert('click!');
        },
        setTxt(e) {
            this.inputTxt = e.target.value;
        },
        confirmedTxt(e) {
            this.confirmTxt = this.inputTxt;
        },
    }
});

app.mount('#assignment');