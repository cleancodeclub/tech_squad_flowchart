<template>
  <div class="home">
    <div >
      <div>
        <b-jumbotron
          bg-variant="dark"
          text-variant="white"
          header="About"
          lead="Explore semiconductor fabrication."
        >
          <p>
            A simple managment tool to create and store information regarding
            the various steps of the semiconductor fabrication process.
          </p>
        </b-jumbotron>
      </div>
      <p></p>
    </div>

    <div class="d-flex w-70 justify-content-around">
      <div>
        <h2>Getting Started</h2>
        <b-list-group>
          <b-list-group-item class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Create</h5>
            </div>
            <p class="mb-1">
             Make fabrication step data with text and images.
            </p>
          </b-list-group-item>

          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Data</h5>
          </div>

            <p class="mb-1">
              View and manage all fabrication data stored.
            </p>
          </b-list-group-item>
        </b-list-group>
      </div>

      <div>
        <h2>Meet the Team</h2>

        <b-table-simple>
          <b-thead head-variant="dark">
            <b-tr>
              <b-th colspan="1">Name</b-th>
              <b-th colspan="1">Position</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-th>David Wiseman</b-th>
              <b-th>Project Sponsor</b-th>
            </b-tr>
            <b-tr>
              <b-th>Elijah Seenandan</b-th>
              <b-th>Volunteer</b-th>
            </b-tr>
            <b-tr>
              <b-th>Kevin Chisholm</b-th>
              <b-th>Volunteer</b-th>
            </b-tr>
            <b-tr>
              <b-th>Ricardo Gonzalez Villegas</b-th>
              <b-th>Volunteer</b-th>
            </b-tr>
            <b-tr>
              <b-th>Shaun Polley </b-th>
              <b-th>Volunteer</b-th>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
