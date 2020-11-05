<template>
  <div class="capstones-new">
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
      newCapstoneSnapshotURL: "",
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
      axios
        .post("/api/capstones", params)
        .then((response) => {
          console.log("Success", response.data);
          this.capstones.push(response.data);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
