<template>
  <section>
    <div class="mx-6 my-2">
      this is our form
      <div class="flex border-2 p-4 justify-center w-1/2">
        <form @submit.preventDefault="onSubmit"
              id="data-create"
              method="post"
              action="#">
          <div class="flex flex-col w-full">
            <label for="image_url"
                   class="w-full">Image URL: </label>
            <input type="text"
                   id="image_url"
                   class="border-gray-200 border-2 rounded-md w-full"
                   v-model="imageURL">
          </div>
          <div class="flex flex-col">
            <label for="text">Text: </label>
            <textarea id="text"
                      rows="5"
                      class="border-gray-200 border-2 rounded-md"
                      v-model="text">
            </textarea>
          </div>
          <button type="submit"
                  class="bg-blue-500 rounded-md p-1 text-white my-4">Submit</button>
        </form>
      </div>
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
  methods: {
    onSubmit: () => {
      console.log(this.text)
    }
  }
}
</script>
