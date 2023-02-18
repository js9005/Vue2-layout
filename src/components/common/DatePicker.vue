<template>
  <div>
    <span v-if="captionText" class="caption">{{ captionText }}</span>
    <v-menu
      v-model="calendar"
      :close-on-content-click="false"
      max-width="290px"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          :value="dateValue"
          :placeholder="placeholder"
          v-bind="attrs"
          v-on="on"
          hide-details
          readonly
          outlined
          dense
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="dateValue"
        :min="min"
        :max="max"
        @input="calendar = false"
        @change="setDate"
        :title-date-format="getMonth"
        :header-date-format="getMonth"
        :weekday-format="getDay"
        :month-format="getMonth"
        :no-title="noTitle"
        :type="calendarType"
        color="primary"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
// import moment from "moment";
export default {
  name: "DatePicker",
  props: {
    captionText: {
      type: String,
    },
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      // default: moment().format("YYYY-MM-DD"),
    },
    max: {
      type: String,
      default: "",
    },
    min: {
      type: String,
      default: "",
    },
    noTitle: {
      type: Boolean,
      default: true,
    },
    calendarType: {
      type: String,
      default: "date",
    },
  },
  data() {
    return {
      calendar: false,
      dateValue: "",
    };
  },
  methods: {
    setDate(v) {
      this.$emit("input", v);
    },
    getMonth(date) {
      const monthName = [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
      ];
      let i = new Date(date).getMonth(date);
      return monthName[i];
    },
    getDay(date) {
      const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
      let i = new Date(date).getDay(date);
      return daysOfWeek[i];
    },
  },
};
</script>
