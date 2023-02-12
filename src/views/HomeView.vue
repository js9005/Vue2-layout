<template>
  <v-container fluid style="width: 95%">
    <TheBreadcrumbs v-model="breadcrumbs" />

    <v-row>
      <v-col>
        <TextField />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TheBreadcrumbs from "@/components/common/TheBreadcrumbs.vue";
import TextField from "@/components/common/TextField.vue";
export default {
  name: "HomeView",
  components: {
    TheBreadcrumbs,
    TextField,
  },
  data() {
    return {
      breadcrumbs: [{ text: "홈", disabled: false }],
    };
  },
};
</script>
