const app = Vue.createApp({
    data() {
        return {
            number: 0,
        }
    },
    methods: {
        // add5() {
        //     this.result = this.result + 5;
        // },
        // add1() {
        //     this.result = this.result + 1;
        // },
        addNum(num) {
            this.number = this.number + num;
        },
    },
    computed: {
        result() {
            if( this.number === 37 ) {
                return this.number;
            } else if( this.number > 37 ) {
                return 'Too much!';
            } else {
                return 'Not there yet';
            }
        },
    },
    watch: {
        result() {
            const that = this;
            setTimeout(function() {
                that.number = 0;
            }, 5000);
        }
    }
});
app.mount('#assignment');