<template>
  <div class="create mx-5 border p-4">
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
      <b-form-group>
        <b-form-file v-model="file1"
                     :state="Boolean(file1)"
                     placeholder="Choose a file or drop it here..."
                     drop-placeholder="Drop file here..."></b-form-file>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        text: '',
        image: '',
      },
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
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
