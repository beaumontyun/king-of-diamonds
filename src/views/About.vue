<template>
  <div class="about">
    <div class="about-text">
      <h3>King of Diamonds</h3>
      <p>
        King of Diamonds is a mini-game that was inspired by
        <a href="https://en.wikipedia.org/wiki/Alice_in_Borderland"
          >Alice in Borderland</a
        >
        where players sit in a round table compete to be the winner by eliminate
        each other.
      </p>
      <p>
        In order to win, players have to press the Big-O-Button when the game
        tells you to. The slowest player is killed and the rest of the players
        move on to the next round until a single player wins.
      </p>
      <h3>Why make this game?</h3>
      <p>
        This game was created entirely with Vue.js, a JavaScript framework for
        designing web applications.
      </p>
      <p>
        The goal was to practice the syntax and logic used in Vue.js,
        specifically state managment using Vuex.
      </p>
      <h3>What have I learned?</h3>
      <p>
        The game design relies heavily on timers. There are in total 3 clocks
        being ran in sequence.
      </p>
      <p>
        Once the players click starts, a count down timer starts. At the same
        time, a random number between 2 to 10 seconds is generated which is
        pushed to the second timer.
      </p>
      <p>
        Once the count down timer finishes, the second timer runs in the
        background (the players do not see this clock at all). Once the second
        timer finishes, an alert pops up to tell the player to press the Big-O-Button, this alert
        starts a third timer that calculates the time between the time the alert
        popped up and the time players pressed the Big-O-Button.
      </p>
      <p>
        Using the third timer, the time it took to press the Big-O-Button
        between players will be compared to calculate the winners (and losers).
      </p>
      <p>
        This game was a good practice to address the technical aspect of Vue.js,
        game design and logical sequence. In the future, further features will
        be implemented, such as user login, play history, score board, etc.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-text {
  width: 30rem;
  margin: 0 auto;
}

.about-text a {
  text-decoration: none;
}

.about-text p {
  text-align: justify;
  text-justify: inter-word;
}
</style>