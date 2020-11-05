<template>
  <div class="education-new">
    <form v-on:submit.prevent="createEducation()">
      <h1>New Education</h1>
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
        <label>Degree:</label>
        <input type="text" class="form-control" v-model="degree" />
      </div>
      <div class="form-group">
        <label>University:</label>
        <input type="text" class="form-control" v-model="university" />
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
      degree: "",
      university: "",
      details: "",
      student_id: "",
      errors: [],
    };
  },
  methods: {
    createEducation: function() {
      let params = {
        start_date: this.start_date,
        end_date: this.end_date,
        degree: this.degree,
        university: this.university,
        details: this.details,
        student_id: this.student_id,
      };
      axios
        .post("/api/educations", params)
        .then((response) => {
          this.$router.push("/educations");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
