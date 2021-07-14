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
    <div>{{username}}</div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
      login(e) {
          e.preventDefault()
          fetch("http://localhost:3000/login", {
              method: "POST",
              headers: {
                  "Content-type": "application/json",
              },
              body: JSON.stringify({
                  username: this.username,
                  password: this.password,
              })
          })
          console.log("login pressed")
      }
  }
};
</script>

<style>
</style>