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
      <div v-for="experience in experiences">
        <p>id: {{ experience.id }}</p>
        <p>Job Title: {{ experience.jobTitle }}</p>
        <p>Comapny Name: {{ experience.companyName }}</p>
        <p>Start Date: {{ experience.startDate }}</p>
        <p>End Date: {{ experience.endDate }}</p>
        <p>Details: {{ experience.details }}</p>
        <router-link :to="`/experiences/${experience.id}`">Edit</router-link>
        <p>-------------------------------</p>
      </div>
    </div>

    <!-- Education Model Data -->
    <div>
      <h4>Educations</h4>
      <div v-for="education in educations">
        <p>id: {{ education.id }}</p>
        <p>University: {{ education.university }}</p>
        <p>Degree: {{ education.degree }}</p>
        <p>Start Date: {{ education.startDate }}</p>
        <p>End Date: {{ education.endDate }}</p>
        <p>Details: {{ education.details }}</p>
        <router-link :to="`/educations/${education.id}`">Edit</router-link>
        <p>-------------------------------</p>
      </div>
    </div>

    <!-- Skill Model Info -->
    <div>
      <h4>Skills</h4>
      <div v-for="skill in skills">
        <p>id: {{ skill.id }}</p>
        <p>Skill: {{ skill.name }}</p>
        <router-link :to="`/skills/${skill.id}`">Edit</router-link>
        <p>-------------------------------</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      student: {
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
      experiences: [
        {
          id: 1,
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
      ],
      skills: [
        {
          id: 1,
          name: "sleeping",
        },
      ],
    };
  },
};
</script>
