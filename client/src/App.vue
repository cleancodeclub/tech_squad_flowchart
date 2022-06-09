<template>
  <navbar></navbar>
  <p>Hello Tech Squad</p>
  <button class="bg-blue-500 p-3 rounded-xl my-2 text-white font-semibold"
          @click="getAllData">
    Get All Data
  </button>
  <div v-if="testData.imgURL">
    <img :src="testData.imgURL"
         alt="some random image">
  </div>
  <div>
    {{ testData.text }}
  </div>
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
      testData: [],
    }
  },
  methods: {
    getAllData() {
      axios.get('http://localhost:8080/data')
        .then(response => {
          this.testData = response.data[0]
        })
    }
  }

}
</script>


