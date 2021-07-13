import { createStore } from 'vuex'

export default createStore({
  state: {
    gameStartTimer: 5,
    counter: false,
    randomNumber: Number,
    nowTime: Number,
    timesUp: Number,
    finalResult: Number,
    initialInstruction: "Press Start to Begin"
  },
  mutations: {
    setRandomNumber(state) {
      let randomNum = (Math.random() * 8) + 1;
      state.randomNumber = randomNum.toFixed(2);
      console.log('Time until you need to press: ' + randomNum.toFixed(2));
    },
    setTimesUp(state) {
      let clickedTime = new Date().getTime();
      console.log(clickedTime);
      let result = clickedTime - (nowTime + randomNumber)
      state.finalResult = result;
      console.log(result);
    }
  },
  actions: {
    async startCounter({ state }) {
      state.counter = true;
      while (state.gameStartTimer > 0 && state.counter) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (state.counter)
          state.gameStartTimer--;
        if (state.gameStartTimer == 0) {
          let timeNow = new Date().getTime();
          state.nowTime = timeNow;
          console.log('Times up: ' + timeNow)
        }
      }
      state.counter = false;
    },
    resetCounter({ state }) {
      state.gameStartTimer = 5;
      state.counter = false;
    }
  },
  modules: {
  }
})
