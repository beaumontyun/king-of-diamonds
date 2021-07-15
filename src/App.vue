<template>
  <div id="nav">
    <router-link v-if="!isLoggedIn" @click="resetCounter" to="/login">Login</router-link>
    <router-link v-if="isLoggedIn" @click="resetCounter" to="/">Home</router-link>
    <router-link v-if="isLoggedIn" @click="resetCounter" to="/about">About</router-link>
    <router-link v-if="isLoggedIn" @click="resetCounter" to="/profile">Profile</router-link>
  </div>
  <router-view />
  <Footer />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Footer from "./components/Footer";

export default {
  components: {
    Footer,
  },
  methods: {
    ...mapActions(["resetCounter"]),

  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
