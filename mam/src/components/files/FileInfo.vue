<template>
  <section>
    <h2>{{ file.file_name }}</h2>
    <ul>
      <li>
        <label>Name</label><h3>{{ file.file_name  }}</h3>
        <label>Size</label><h3>{{ file.file_size  }}</h3>
        <label>MimeType</label><h3>{{ file.mimetype  }}</h3>
        <label>CreatedTime</label><h3>{{ file.created_time  }}</h3>
        <label>Checksum</label><h3>{{ file.checksum  }}</h3>
      </li>
    </ul>
    <router-link to="/files">Close</router-link>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    ...mapGetters(["getFileInfo"]),
  },
  computed: {
    file() {
      console.log(this.getFileInfo())
      return this.getFileInfo();
    },
  },
  created() {
    console.log(this.$route.params.fileId)
    this.$store.commit("loadfileInfo", { fileId: this.$route.params.fileId });
  },
};
</script>


<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3 {
  margin: 0.5rem 0;
}


</style>