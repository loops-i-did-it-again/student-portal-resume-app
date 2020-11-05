<template>
  <div class="skills-edit">
    <h1>Edit Skills</h1>
    <div class="form-group">
      <label>Name:</label>
      <input type="text" class="form-control" v-model="skill.name" />
    </div>
      <br />
      <button v-on:click="updateSkills()">Save Changes</button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {

      skill:{}
    
    };
  },
  created: function() {
    axios.get(`/api/skills/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.skill = response.data;
    });
  },

  methods: {
    updateSkills: function() {
      var params = {
        name: this.skill.name
      };
      axios
        .patch(`/api/skills/${this.skill.id}`, params)
        .then((response) => {
          this.$router.push(`/students/${this.skill.id}`);
        });
    },
  },
};
</script>
