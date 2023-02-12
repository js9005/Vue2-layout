<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app class="customShadow">
      <v-list-item>
        <v-list-item-content>
          <h1>LOGO</h1>
          <!-- <div class="d-flex">
            <v-img
              src=""
              transition="scale-transition"
              contain
              class="shrink"
            />
          </div> -->
        </v-list-item-content>
      </v-list-item>

      <v-list>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in menu" :key="i" :to="item.path">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="customShadow">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon color="primary">
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-avatar color="primary">
              <span class="white--text">{{ "user.name" }}</span>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">
                {{ "user.name" }} 님
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ "email address" }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="my-2"></v-divider>
          <v-list-item @click="alert" dense>
            <v-list-item-icon>
              <v-icon>mdi-bell</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>알림</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="logoutAction" dense>
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>로그아웃</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main style="background: #f7f8fb">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { menu } from "@/utils/menu.js";
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: null,
    menu,
  }),

  methods: {
    alert() {},
    logoutAction() {},
  },
};
</script>

<style>
.customShadow {
  background: #fff !important;
  box-shadow: 0px 4px 20px rgba(0, 10, 103, 0.03) !important;
}
.v-navigation-drawer__border {
  display: none;
}
</style>
