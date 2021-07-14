import { createStore } from 'vuex'

export default createStore({
  state: {
    // gameStartTimer: count down time before the player could press start
    gameStartTimer: 5,
    // counter: part of the gameStartTimer operation to initial and stop the countdown
    counter: false,
    // randomNumber: set a random number between 1-8, this will be used to press the Big-O-Button
    // Note, randomNumber is stored in milliseconds format (i.e. 1000)
    randomNumber: Number,
    // randomNumberCounter
    randomNumberCounter: Number,
    // nowTime: set current time once gameStartTimer reaches 0
    nowTime: Number,
    // clickedTimer: 
    clickedTimer: Number,
    // finalResult: player's reaction time
    finalResult: Number,
    // clickAlert: alerts player to click the Big-O-Button
    clickAlert: false,
  },
  mutations: {
    setRandomNumber(state) {
      let randomNum = (((Math.random() * 8) + 1).toFixed(3) * 1000);
      state.randomNumber = randomNum;
      state.randomNumberCounter = randomNum;
      console.log('Time until you need to press: ' + randomNum);
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

        // the if-statement ensures nowTime is acquired upon gameStartTimer reaches 0
        if (state.gameStartTimer == 0) {
          let timeNow = new Date().getTime();
          state.nowTime = timeNow;
          // await new Promise (resolve => setTimeout(resolve, state.randomNumber));
          // if ()
        }
      }
      state.counter = false;
    },
    async pressAlertTimer({ state }) {
      while(state.gameStartTimer == 0) {
        await new Promise(resolve => setTimeout(resolve, state.randomNumber));
        if (state.gameStartTimer == 0)
        state.randomNumber--;
      }
      state.clickAlert = true
    },
    playerButtonPress({ state }) {
      // on clicking the Big-O-Button, the current time is logged to the state
      let clickedTime = new Date().getTime();
      state.clickedTimer = clickedTime;

      // clicked time and previous time at countdown is calculated for the difference to generate the result
      let result = clickedTime - (state.nowTime)
      state.finalResult = result

      // logic to convert into seconds and milliseconds
      let ms = result % 1000;
      let s = Math.floor((result / 1000) % 60);

      let timeDifference = state.finalResult - state.randomNumber;

      // logic to convert into seconds and milliseconds
      let tdms = timeDifference % 1000;
      let tds = Math.floor((timeDifference / 1000) % 60);

      state.finalResult > state.randomNumber ?
        console.log('Your reaction was: ' + tds + '.' + tdms + ' seconds.' + ' Total time passed: ' + s + '.' + ms + ' seconds')
        : console.log('You have clicked too soon!')
    },
    resetCounter({ state }) {
      state.gameStartTimer = 5;
      state.counter = false;
      state.clickAlert = false;
    }
  },
  // getters: to be used when you want to evaluate many set of values (e.g. score board.)
  getters: {

  },
  modules: {
  }
})
