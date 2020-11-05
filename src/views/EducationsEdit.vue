<template>
  <div class="educations-edit">
    <h1>Edit Education</h1>
    <div class="form-group">
      <label>Start Date:</label>
      <input type="text" class="form-control" v-model="education.start_date" />
    </div>
    <div class="form-group">
      <label>End Date:</label>
      <input type="text" class="form-control" v-model="education.end_date" />
    </div>
    <div class="form-group">
      <label>Degree:</label>
      <input type="text" class="form-control" v-model="education.degree" />
    </div>
    <div class="form-group">
      <label>University:</label>
      <input
        type="text"
        class="form-control"
        v-model="education.university"
      />
    </div>
    <div class="form-group">
      <label>Details:</label>
      <input type="text" class="form-control" v-model="education.details" />
      <br />
      <button v-on:click="updateEducation()">Save Changes</button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {

      education:{}
    
    };
  },
  created: function() {
    axios.get(`/api/educations/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.education = response.data;
    });
  },

  methods: {
    updateEducation: function() {
      var params = {
        start_date: this.education.start_date,
        end_date: this.education.end_date,
        degree: this.education.degree,
        university: this.education.university,
        details: this.education.details,
      };
      axios
        .patch(`/api/educations/${this.education.id}`, params)
        .then((response) => {
          this.$router.push(`/students/${this.education.student_id}`);
        });
    },
  },
};
</script>
