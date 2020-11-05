<template>
  <section>
    <h2>{{ bin.name }}</h2>
    <ul>
      <li>
        <label>ID</label><h3>{{ bin._id  }}</h3>
        <label>Name</label><h3>{{ bin.name  }}</h3>
        <label>Bin Type</label><h3>{{ bin.bin_type  }}</h3>
        <label>Enable</label><h3>{{ bin.enable  }}</h3>
        <label>Enable Polling</label><h3>{{ bin.enable_polling  }}</h3>
        <label>Move to Archive Trash</label><h3>{{ bin.move_to_archive_trash  }}</h3>
        <ul>
          <li v-for="share in bin.share_locations" :key="share.sharename">
            {{ share.ip }} - {{ share.protocol }} - {{ share.sharename }} - {{ share.username }} - {{ share.password }}
          </li>
        </ul>
      </li>
    </ul>
    <router-link to="/bins">Close</router-link>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    ...mapGetters(["getBinInfo"]),
  },
  computed: {
    bin() {
      console.log(this.getBinInfo())
      return this.getBinInfo();
    },
  },
  created() {
    console.log(this.$route.params.binId)
    this.$store.commit("loadbinInfo", { binId: this.$route.params.binId });
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