<template>
  <navbar></navbar>
  <p>Hello Tech Squad</p>
  <button @click="getAllData">Get All Data</button>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import axios from 'axios'

export default {
  components: {
    'navbar': Navbar
  },
  data() {
    return {

    }
  },
  methods: {
    getAllData() {
      axios.get('http://localhost:8080/data')
        .then(response => {
          console.log(response);
        })
    }
  }

}
</script>


