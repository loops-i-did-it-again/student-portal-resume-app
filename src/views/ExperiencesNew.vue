<template>
  <div class="experiences-new">
    <form v-on:submit.prevent="createExperience()">
      <h1>New Experience</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <!-- Note: the type for start_date and end_date are "date" right now. Its possible this may cause it to crash, so consider changing it to text if neccesary. -->
      <div class="form-group">
        <label>Start Date:</label>
        <input type="date" class="form-control" v-model="start_date" />
      </div>
      <div class="form-group">
        <label>End Date:</label>
        <input type="date" class="form-control" v-model="end_date" />
      </div>
      <!--  -->
      <div class="form-group">
        <label>Job Title:</label>
        <input type="text" class="form-control" v-model="job_title" />
      </div>
      <div class="form-group">
        <label>Company Name:</label>
        <input type="text" class="form-control" v-model="company_name" />
      </div>
      <div class="form-group">
        <label>Details:</label>
        <input type="text" class="form-control" v-model="details" />
      </div>
      <div class="form-group">
        <label>Student ID:</label>
        <input type="number" class="form-control" v-model="student_id" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      start_date: "",
      end_date: "",
      job_title: "",
      company_name: "",
      details: "",
      student_id: "",
      errors: [],
    };
  },
  methods: {
    createExperience: function() {
      let params = {
        start_date: this.start_date,
        end_date: this.end_date,
        job_title: this.job_title,
        company_name: this.company_name,
        details: this.details,
        student_id: this.student_id,
      };
      axios
        .post("/api/experiences", params)
        .then((response) => {
          this.$router.push(`/students/${this.student_id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
