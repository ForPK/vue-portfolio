

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);
import Vue from 'vue';

Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: '',
        };
    },
    method: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    },
}).mout('#app');