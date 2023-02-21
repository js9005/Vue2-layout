<template>
  <v-container fluid style="width: 95%">
    <TheBreadcrumbs v-model="breadcrumbs" />

    <v-card class="customCard">
      <v-card-title> Top western road trips </v-card-title>
      <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
      <v-card-text>
        text
        <TextField />
        <br />
        <DatePicker />
        <br />
        <DataTable />
      </v-card-text>
      <v-card-actions>
        <v-btn color="orange lighten-2" text> Explore </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import TheBreadcrumbs from "@/components/common/TheBreadcrumbs.vue";
import TextField from "@/components/common/TextField.vue";
import DatePicker from "@/components/common/DatePicker.vue";
import DataTable from "@/components/common/DataTable.vue";
export default {
  name: "HomeView",
  components: {
    TheBreadcrumbs,
    TextField,
    DatePicker,
    DataTable,
  },
  data() {
    return {
      breadcrumbs: [{ text: "Dashboard", disabled: false }],
    };
  },
};
</script>
