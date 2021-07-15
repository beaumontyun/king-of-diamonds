<template>
  <div>
    <h1>Login</h1>
    <form @submit="login">
      <input v-model="username" placeholder="username" />
      <br />
      <input v-model="password" type="password" placeholder="password" />
      <br />
      <button type="submit">Login</button>
    </form>
    <div>{{ username }}</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "Login",
  data: () => {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      });
      const { user, token } = await response.json();

      // push the new states to the Vuex store, the arguments passed in this.setUser(user) and this.SetToken(token) are the payloads
      this.setUser(user);
      this.setToken(token);
      
      this.$router.push("/")
    },

    // this map mutations allow user to set the states in the store for user and token.
    ...mapMutations(["setUser", "setToken"])
  },
};
</script>

<style>
</style>