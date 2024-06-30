const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  watch: {
    counter(value) {
      if( value > 50 ) {
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 2000);
      }
    }
  },
  computed: {
    fullName() {
      console.log('aa');
      if(this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Park'
    },
  },
  methods: {
    counterFunc(value) {
      if(value > 50) {
        this.counter = 0;
      }
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
