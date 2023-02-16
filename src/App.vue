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
        <div v-for="item in menu" :key="item.title">
          <!-- 서브메뉴 있는 경우 -->
          <template v-if="item.sub">
            <v-list-group :prepend-icon="item.icon" no-action>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="child in item.sub"
                :key="child.title"
                :to="child.path"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="child.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </template>
          <!-- 서브메뉴 없는 경우 -->
          <template v-else>
            <v-list-item :to="item.path" color="primary">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </div>
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
                {{ "user.name" }}
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
              <v-list-item-title>Notification</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="logoutAction" dense>
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
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

.customCard {
  box-shadow: 0px 0px 40px rgba(0, 13, 135, 0.02) !important;
  border-radius: 20px !important;
}
</style>
