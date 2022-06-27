<template>
  <div>
    <div class="about mx-5">
      <h1>Table Data</h1>
      <b-table striped
               hover
               :items="info"
               :fields="fields">

        <template #cell(edit)>
          <b-button secondary
                    size="sm"
                    variant="warning">
            Edit
          </b-button>
        </template>
        <template #cell(delete)>
          <b-button secondary
                    size="sm"
                    variant="danger">
            Delete
          </b-button>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DataView',
  data() {
    return {
      info: [],
      fields: [
        { key: 'id', label: 'ID' },
        { key: 'text', label: 'Text' },
        { key: 'imageURL', label: 'Image URL' },
        { key: 'edit', label: 'Edit' },
        { key: 'delete', label: 'Delete' }
      ]
    }
  },
  mounted() {
    axios.get('http://localhost:8080/data')
      .then(response => this.info = response.data)
  }
}
</script>

