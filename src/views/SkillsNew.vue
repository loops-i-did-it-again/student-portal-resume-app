<template>
  <div class="skills-new">
    <form v-on:submit.prevent="createSkills()">
      <h1>New Skills</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="name" />
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
      name: "",
      student_id: "",
      errors: [],
    };
  },
  methods: {
    createSkill: function() {
      let params = {
        name: this.name,
        student_id: this.student_id,
      };
      axios.post("/api/skills", params).then((response) => {
        this.$router.push("/skills");
      });
    },
  },
};
</script>
