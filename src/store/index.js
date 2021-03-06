import { createStore } from 'vuex'

export default createStore({
  state: {
    // gameStartTimer: count down time before the player could press start
    gameStartTimer: 3,
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
    // buttonPressed: records whether player pressed the button or not
    buttonPressed: false,
    // finalResult: player's reaction time
    finalResult: Number,
    // clickAlert: alerts player to click the Big-O-Button
    clickAlert: false,
    // stringResult
    stringResult: String,
    // login and JWT states
    user: null,
    token: null,
  },

  mutations: {
    // Generate a random number that is used for setting the second timer to test player's reaction speed
    setRandomNumber(state) {
      // randomNum generates time in "seconds"
      let randomNum = ((Math.random() * 8) + 1)
      // randomNumCounter generates time in "milliseconds" - however, the actual value is not treated as millisecond, instead it is a value in 1000 (ie. 1000 seconds)
      let randomNumCounter = randomNum.toFixed(3) * 1000;
      // Assign new states
      state.randomNumber = randomNum;
      state.randomNumberCounter = randomNumCounter;
      console.log('Time until you need to press: ' + randomNum);
    },

    setUser(state, user) {
      state.user = user;
    },

    setToken(state, token) {
      state.token = token;
    },
    logOut(state, payload) {
      state.user = payload;
      state.token = payload;
      console.log(state.user && state.token)
    }
  },

  // Note: all timer needs to be in actions section, as actions deal with asynchronous functions.
  actions: {
    // startCounter governs the primary and secondary timer to run the game. Note: be careful of time format bug (seconds vs milliseconds)
    async startCounter({ state }) {
      // set initial state for this timer function:
      state.counter = true;
      state.clickAlert = false;

      // Initial a while-loop for the first timer:
      while (state.gameStartTimer > 0 && state.counter) {

        // this sets the timer to count down from 3 to 0
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (state.counter)
          state.gameStartTimer--;

        // the if-statement ensures nowTime is acquired upon gameStartTimer reaches 0
        if (state.gameStartTimer == 0) {
          let timeNow = new Date().getTime();
          state.nowTime = timeNow;
        }
      }
      state.counter = false;

      // This is a second timer runs in the background, it will set clickAlert to true and alert the play via a popup to press the Big-O-Button
      // Note: "&& state.gameStartTimer" must be included in order to allow manual termination of the while-loop when the player reset the game,
      // Otherwise, the clock will continue to run irrespective the player has reset the game or not.
      while (state.randomNumber > 0 && state.gameStartTimer == 0) {
        await new Promise(resolve => setTimeout(resolve, 10));
        state.randomNumber = state.randomNumber - 0.01
        // console.log(state.randomNumber)

        // set clickAlert state - clickAlert state is used throughout the app to manage alerts and div dynamically and sequence.
        if (state.randomNumber < 0) {
          state.clickAlert = true;
          console.log('clickAlert state is: ' + state.clickAlert)
        }
      }
    },

    // playerButtonPress governs the event after player pressed the Big-O-Button - ie. whether the player pressed too soon or not. etc.
    playerButtonPress({ state }) {
      state.buttonPressed = true;

      // on clicking the Big-O-Button, the current time is logged to the state
      let clickedTime = new Date().getTime();
      state.clickedTimer = clickedTime;

      // clicked time and previous time at countdown is calculated for the difference to generate the result
      let result = clickedTime - (state.nowTime)
      state.finalResult = result

      // logic to convert into seconds and milliseconds
      let ms = result % 1000;
      let s = Math.floor((result / 1000) % 60);

      let timeDifference = state.finalResult - state.randomNumberCounter;

      // logic to convert into seconds and milliseconds
      let tdms = Math.abs(timeDifference % 1000);
      let tds = Math.floor((timeDifference / 1000) % 60);

      let toStringResult = tds.toString() + '.' + tdms.toString()

      // Turn results to string value for displaying result to the player
      state.stringResult = toStringResult > 0 ? ('Your reaction was ' + toStringResult + ' seconds!') : ('You pressed too soon! Restart and go again!')

      // Display events/result in the console // TODO state's information to be used in other game features.
      state.finalResult > state.randomNumber ?
        console.log('The timer was: ' + state.randomNumberCounter + ' milliseconds. ' + 'Your reaction was: ' + toStringResult + ' seconds.' + ' Total time passed: ' + s + '.' + ms + ' seconds')
        : console.log('You have clicked too soon!')
    },

    // Master game reset - reset everything back to original state.
    // This is also executed in nav tabs so that the game is reset when the player switch to another page.
    resetCounter({ state }) {
      state.gameStartTimer = 3;
      state.counter = false;
      state.clickAlert = false;
      state.buttonPressed = false;
      console.clear()
    },
  },
  // getters: to be used when you want to evaluate many set of values (e.g. score board.)
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    }
  },

  modules: {

  }
})
