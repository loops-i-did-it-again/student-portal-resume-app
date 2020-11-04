<template>
  <div class="capstonenew">
    <div>
      Name: <input type="text" /><br />
      Description: <input type="text" /><br />
      URL: <input type="text" /><br />
      Snapshot: <input type="text" /><br />
      <button v-on:click="createCapstone()">Create Capstone Listing</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newCapstoneName: "",
      newCapstoneDescription: "",
      newCapstoneURL: "",
      newCapstoneSnapshot: "",
    };
  },
  created: function() {},
  methods: {
    createCapstone: function() {
      var params = {
        name: this.newCapstoneName,
        Description: this.newCapstoneDescription,
        URL: this.newCapstoneURL,
        Snapshot: this.newCapstoneSnapshot,
      };
    },
  },
};
</script>
