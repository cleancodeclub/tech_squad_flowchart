<template>
  <section>
    <div>
      <form @submit.preventDefault>
        <div>
          <label for="text">Text: </label>
          <textarea id="text"
                    rows="5"
                    v-model="text"></textarea>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  name: dataCreate,
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
