<template>
  <v-container fluid style="width: 95%">
    <h1>LoginView</h1>
    <br />
    <v-btn @click="login" color="primary">Login</v-btn>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LoginView",
  methods: {
    ...mapActions({
      loginAction: "auth/login",
    }),
    async login() {
      await this.loginAction({
        email: "test@test.com",
        password: "1111",
      });
    },
  },
};
</script>

<style></style>
