<template>
  <div class="experiences-edit">
    <h1>Edit Experience</h1>
    <div class="form-group">
      <label>Start Date:</label>
      <input type="text" class="form-control" v-model="experience.start_date" />
    </div>
    <div class="form-group">
      <label>End Date:</label>
      <input type="text" class="form-control" v-model="experience.end_date" />
    </div>
    <div class="form-group">
      <label>Job Title:</label>
      <input type="text" class="form-control" v-model="experience.job_title" />
    </div>
    <div class="form-group">
      <label>Company Name:</label>
      <input
        type="text"
        class="form-control"
        v-model="experience.company_name"
      />
    </div>
    <div class="form-group">
      <label>Details:</label>
      <input type="text" class="form-control" v-model="experience.details" />
      <br />
      <button v-on:click="updateExperience()">Save Changes</button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      experience: {}
    
    };
  },
  created: function() {
    axios.get(`/api/experiences/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.experience = response.data;
    });
  },

  methods: {
    updateExperience: function() {
      var params = {
        start_date: this.experience.start_date,
        end_date: this.experience.end_date,
        job_title: this.experience.job_title,
        company_name: this.experience.company_name,
        details: this.experience.details,
      };
      axios
        .patch(`/api/experiences/${this.experience.id}`, params)
        .then((response) => {
          this.$router.push(`/students/${this.experience.student_id}`);
        });
    },
    destroyExperience: function(experience) {
      axios.delete(`/api/experiences/${experience.id}`).then((response) => {
        console.log("Success", response.data);
        this.$router.push("/experiences");
      });
    },
  },
};
</script>
