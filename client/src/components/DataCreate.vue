<template>
  <section>
    <div class="mx-6 my-2">
      <form @submit.preventDefault>
        <div>
          <label for="image_url">Image URL: </label>
          <input type="text"
                 id="image_url"
                 class="border-gray-200 border-2 rounded-md"
                 v-model="imageURL">
        </div>
        <div>
          <label for="text">Text: </label>
          <textarea id="text"
                    rows="5"
                    class="border-gray-200 border-2 rounded-md"
                    v-model="text">
          </textarea>
        </div>
        <button type="submit"
                class="bg-blue-500 rounded-md p-1 text-white">Submit</button>
      </form>
      <div class="my-2">
        <h1>Test Data</h1>
        <p>Image URL: {{ imageURL }}</p>
        <p>Text: {{ text }}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: [],
  data() {
    return {
      text: '',
      imageURL: ''
    }
  },
  methods: {}
}
</script>
