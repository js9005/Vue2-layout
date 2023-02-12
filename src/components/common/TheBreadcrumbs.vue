<template>
  <v-row>
    <v-col>
      <v-breadcrumbs :items="value" class="theBreadcrumbs" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TheBreadcrumbs",
  props: {
    value: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.theBreadcrumbs {
  font-weight: 700;
  font-size: 28px;
  color: #292d32;
}
</style>
