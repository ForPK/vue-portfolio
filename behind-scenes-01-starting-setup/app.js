const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      // console.dir(this.$refs.userText);
    },
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  update() {
    console.log('update()');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('unmounted()');
  },
});

app.mount('#app');

setTimeout(function() {
  app.unmount();
},3000);

// const app2 = Vue.createApp({
//   tamplate: `
//     <p>{{ favoriteMeal }}</p>
//   `,
//   data() {
//     return {
//       favoriteMeal: 'Pizza',
//     };
//   },
// });

// app2.mount('#app2');


// vue 반응형 자바스크립트 예시
const data = {
  message: 'Hello!',
  longMessage: 'Hello! world!',
}

const handler = {
  set(target, key, value) {
    console.log(target); // { message: 'Hello!', longMessage: 'Hello! world!' }
    console.log(key); // message
    console.log(value); // Hello!!!!!
    if(key === 'message') {
      target.longMessage = value + ' world!'
    }
    target.message = value;
  }
}

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!!';

console.log('proxy.longMessage', proxy.longMessage); // Hello!!!!! world!