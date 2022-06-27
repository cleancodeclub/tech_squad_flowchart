<template>
  <div class="create mx-5 border p-4">
    <h1>Add new data</h1>
    <b-form>
      <b-form-group id="text-group-input"
                    label="Text"
                    label-for="text-input"
                    description="Text to input into the database for the associated step">
        <b-form-input id="text-input"
                      v-model="form.text"
                      type="text"
                      placeholder="Enter text"
                      required></b-form-input>
      </b-form-group>
      <b-form-group id="image"
                    label="Image"
                    label-for="image">
        <b-form-file v-model="form.image"
                     :state="Boolean(image)"
                     placeholder="Choose a file or drop it here..."
                     drop-placeholder="Drop file here..."></b-form-file>
      </b-form-group>
      <b-form-group class="ml-auto">
        <b-button variant="primary"
                  @click="onSubmit">Submit</b-button>
        <b-button variant="warning"
                  @click="onReset">Reset</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        text: '',
        image: null,
      },
    }
  },
  methods: {
    async onSubmit(event) {
      const formData = new FormData()
      formData.append('text', this.form.text)
      formData.append('image', this.form.image)
      event.preventDefault()
      // alert(JSON.stringify(formData))
      await axios.postForm('http://localhost:8080/data/upload', formData)
        .then(response => console.log(response))
    },
    onReset(event) {
      event.preventDefault()
      this.form.text = ''
      this.form.image = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
