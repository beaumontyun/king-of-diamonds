<template>
  <div>
    <button @click="getProfile">click to get profile</button>
    <p>{{ user.username }}</p>
    <button @click="setLogOut">Logout</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Profile",
  computed: {
    ...mapState({
      token: "token",
      user: "user",
    }),
    // ...mapState(["user"])
  },
  methods: {
    getProfile() {
      fetch("http://localhost:3000/profile", {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
    },
    setLogOut() {
      this.logOut(null);
      this.$router.push("/login")
    },
    ...mapMutations(["logOut"]),
  },
};
</script>

<style>
</style>