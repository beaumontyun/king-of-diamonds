import { createStore } from 'vuex'

export default createStore({
  state: {
    // gameStartTimer: count down time before the player could press start
    gameStartTimer: 5,
    // counter: part of the gameStartTimer operation to initial and stop the countdown
    counter: false,
    // randomNumber: set a random number between 1-8, this will be used to press the Big-O-Button
    randomNumber: Number,
    // nowTime: set current time once gameStartTimer reaches 0
    nowTime: Number,
    // clickedTimer: 
    clickedTimer: Number,
    // finalResult: player's reaction time
    finalResult: Number
  },
  mutations: {
    setRandomNumber(state) {
      let randomNum = (Math.random() * 8) + 1;
      state.randomNumber = randomNum.toFixed(2);
      console.log('Time until you need to press: ' + randomNum.toFixed(2));
    }
  },
  actions: {
    async startCounter({ state }) {
      state.counter = true;
      while (state.gameStartTimer > 0 && state.counter) {

        // this sets the timer to count down from 5 to 0
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (state.counter)
          state.gameStartTimer--;

        // this if statement ensures nowTime is acquired upon gameStartTimer reaches 0
        if (state.gameStartTimer == 0) {
          let timeNow = new Date().getTime();
          state.nowTime = timeNow;
          console.log('Time right now is: ' + timeNow)
        }
      }
      state.counter = false;
    },
    playerButtonPress({state}) {
      // on clicking the Big-O-Button, the current time is logged to the state
      let clickedTime = new Date().getTime();
      state.clickedTimer = clickedTime;
      console.log('You have clicked on: ' + clickedTime);

      // clicked time and previous time at countdown is calculated for the difference to generate the result
      let result = clickedTime - (state.nowTime)
      state.finalResult = result;

      // logic to convert into seconds and milliseconds
      let ms = result % 100;
      let s = Math.floor((result / 1000) % 60);
      console.log('Your reaction was: ' + s + "." + ms + ' seconds');
    },
    resetCounter({ state }) {
      state.gameStartTimer = 5;
      state.counter = false;
    }
  },
  modules: {
  }
})
