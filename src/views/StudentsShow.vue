<template>
  <div class="students-show">
    <h1>Profile</h1>

    <!-- Student Model Data -->
    <div>
      <h3>Student Info</h3>
      <img :src="`${student.photoUrl}`" />
      <p>id: {{ student.id }}</p>
      <p>First Name: {{ student.firstName }}</p>
      <p>Last Name: {{ student.lastName }}</p>
      <p>email: {{ student.email }}</p>
      <p>Phone Number: {{ student.phoneNumber }}</p>
      <p>Bio: {{ student.bio }}</p>
      <p>Linked In: {{ student.linkedinUrl }}</p>
      <p>Twitter In: {{ student.twitterUrl }}</p>
      <p>Personal Website: {{ student.personalUrl }}</p>
      <p>Resume Link: {{ student.resumeUrl }}</p>
      <p>Github Link: {{ student.githubUrl }}</p>
      <p>photoLink: {{ student.githubUrl }}</p>
    </div>

    <!-- Resume Section -->
    <h3>Resume</h3>

    <!-- Experience Model Data -->
    <div>
      <h4>Experiences</h4>
      <router-link :to="`/experiences/new`">NEW</router-link>
      <div v-for="experience in experiences">
        <p>id: {{ experience.id }}</p>
        <p>Job Title: {{ experience.jobTitle }}</p>
        <p>Comapny Name: {{ experience.companyName }}</p>
        <p>Start Date: {{ experience.startDate }}</p>
        <p>End Date: {{ experience.endDate }}</p>
        <!-- <p>Details: {{ experience.details }}</p>
        <button v-on:click="showExperience(experience)">Edit</button> -->
        <router-link :to="`/experiences/${experience.id}`">Edit</router-link>
        <p>-------------------------------</p>

        <!-- <dialog id="experience-details">
          <form method="dialog">
            <h2>Experience Info</h2>
            <p>
              Job Title: <input type="text" v-model="experience.jobTitle" />
            </p>
            <p>
              Company Name:
              <input type="text" v-model="experience.companyName" />
            </p>
            <p>
              Start Date:
              <input type="text" v-model="experience.startDate" />
            </p>
            <p>
              End Date:
              <input type="text" v-model="experience.endDate" />
            </p>
            <p>Details: <input type="text" v-model="experience.details" /></p>
            <button v-on:click="updateExperience(currentExperience)">
              Update Experierence
            </button>
            <button>Close</button>
          </form>
        </dialog> -->
      </div>
    </div>

    <!-- Education Model Data -->
    <div>
      <h4>Educations</h4>
      <router-link :to="`/educations/new`">NEW</router-link>
      <div v-for="education in educations">
        <p>id: {{ education.id }}</p>
        <p>University: {{ education.university }}</p>
        <p>Degree: {{ education.degree }}</p>
        <p>Start Date: {{ education.startDate }}</p>
        <p>End Date: {{ education.endDate }}</p>
        <p>Details: {{ education.details }}</p>
        <!-- <button v-on:click="showEducation(education)">Edit</button> -->
        <router-link :to="`/educations/${education.id}`">Edit</router-link>

        <!-- <dialog id="education-details">
          <form method="dialog">
            <h2>Education Info</h2>
            <p>
              University: <input type="text" v-model="education.university" />
            </p>
            <p>
              Degree:
              <input type="text" v-model="education.degree" />
            </p>
            <p>
              Start Date:
              <input type="text" v-model="education.startDate" />
            </p>
            <p>
              End Date:
              <input type="text" v-model="education.endDate" />
            </p>
            <p>Details: <input type="text" v-model="education.details" /></p>
            <button v-on:click="updateEducation(currentEducation)">
              Update Education
            </button>
            <button>Close</button>
          </form>
        </dialog> -->

        <p>-------------------------------</p>
      </div>
    </div>

    <!-- Skill Model Info -->
    <div>
      <h4>Skills</h4>
      <router-link :to="`/skills/new`">NEW</router-link>
      <div v-for="skill in skills">
        <p>id: {{ skill.id }}</p>
        <p>Skill: {{ skill.name }}</p>
        <!-- <button v-on:click="showSkill(skill)">Edit</button> -->
        <router-link :to="`/skills/${skills.id}`">Edit</router-link>

        <!-- <dialog id="skill-details">
          <form method="dialog">
            <h2>Skill</h2>
            <p>Name: <input type="text" v-model="skill.name" /></p>
            <button v-on:click="updateSkill(currentSkill)">
              Update Skill
            </button>
            <button>Close</button>
          </form>
        </dialog> -->

        <p>-------------------------------</p>
      </div>
    </div>
    <div>
      <h4>Capstones</h4>
      <router-link :to="`/capstones/new`">NEW</router-link>
      <div v-for="capstone in capstones">
        <p>Name: {{ capstone.name }}</p>
        <p>Description: {{ capstone.discription }}</p>
        <p>Captsone Url: {{ capstone.capstone_url }}</p>
        <p>Screenshot Url: {{ capstone.screenshot_url }}</p>
        <router-link :to="`/capstones/${capstone.id}`">Edit</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      currentCapstone: {},
      currentEducation: {},
      currentExperience: {},
      currentSkill: {},
      student: [
        {
          id: 1,
          firstName: "Robin",
          lastName: "Soto",
          email: "robin@robin.com",
          phoneNumber: "555-555-5555",
          bio: "Living the dream",
          linkedinUrl: "...",
          twitterUrl: "@robin",
          personalUrl: "...",
          resumeUrl: "...",
          githubUrl: "...",
          photoUrl: "...",
        },
        {
          id: 2,
          firstName: "Robin",
          lastName: "Soto",
          email: "robin@robin.com",
          phoneNumber: "555-555-5555",
          bio: "Living the dream",
          linkedinUrl: "...",
          twitterUrl: "@robin",
          personalUrl: "...",
          resumeUrl: "...",
          githubUrl: "...",
          photoUrl: "...",
        },
      ],
      experiences: [
        {
          id: 1,
          startDate: "1/1/2020",
          endDate: "1/1/2020",
          jobTitle: "boss",
          companyName: "Company O' Bosses",
          details: "we all bosses",
        },
        {
          id: 2,
          startDate: "1/1/2020",
          endDate: "1/1/2020",
          jobTitle: "boss",
          companyName: "Company O' Bosses",
          details: "we all bosses",
        },
      ],
      educations: [
        {
          id: 1,
          startDate: "1/1/2020",
          endDate: "1/1/2020",
          degree: "Masters of Sleep",
          university: "University of Sleep",
          details: "intensive Sleep fieldwork",
        },
        {
          id: 2,
          startDate: "1/1/2020",
          endDate: "1/1/2020",
          degree: "Masters of Sleep",
          university: "University of Sleep",
          details: "intensive Sleep fieldwork",
        },
      ],
      skills: [
        {
          id: 1,
          name: "sleeping",
        },
        {
          id: 2,
          name: "sleeping",
        },
      ],
      capstones: [],
    };
  },
  methods: {
    indexCapstone: function() {
      axios.get("/api/capstones").then((response) => {
        console.log(response.data);
        this.capstones = response.data;
      });
    },
  },
};
//   // Experience Methods
//   showExperience: function(experience) {
//     this.currentExperience = experience;
//     document.querySelector("#experience-details").showModal();
//   },
//   updateExperience: function(experience) {
//     return console.log(experience);
//   },
//   // Education Methods
//   showEducation: function(education) {
//     this.currentEducation = education;
//     document.querySelector("#education-details").showModal();
//   },
//   updateEducation: function(education) {
//     return console.log(education);
//   },
//   // Skill Methods
//   showSkill: function(skill) {
//     this.currentEducation = skill;
//     document.querySelector("#skill-details").showModal();
//   },
//   updateSkill: function(skill) {
//     return console.log(skill);
//   },
// },
</script>
