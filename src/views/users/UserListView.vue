<template>
  <v-container fluid>
    <TheBreadcrumbs v-model="breadcrumbs" />

    <v-card class="customCard">
      <v-card-title> Search </v-card-title>
      <v-card-text> This is a search form </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="primary" depressed> Search </v-btn>
        <v-btn color="primary" outlined> Reset </v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="customCard">
      <v-card-text>
        <DataTable :headers="headers" :items="userItems" :loading="loading" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import TheBreadcrumbs from "@/components/common/TheBreadcrumbs.vue";
import DataTable from "@/components/common/DataTable.vue";
export default {
  name: "UserListView",
  components: {
    TheBreadcrumbs,
    DataTable,
  },
  data() {
    return {
      breadcrumbs: [
        { text: "Users", disabled: false },
        { text: "User List", disabled: false },
      ],

      headers: [
        {
          text: "No.",
          value: "index",
          sortable: false,
        },
        {
          text: "ID",
          value: "userId",
          sortable: false,
        },
        {
          text: "Email",
          value: "email",
          sortable: false,
        },
        {
          text: "Name",
          value: "name",
          sortable: false,
        },
        {
          text: "Mobile",
          value: "mobile",
          sortable: false,
        },
      ],
      userItems: [],
      loading: false,
    };
  },
  methods: {},
};
</script>
