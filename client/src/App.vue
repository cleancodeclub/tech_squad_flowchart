<template>
  <div id="app">
    <b-navbar>
      <b-navbar-nav>
        <b-nav-item :to="{name: 'home'}">Home</b-nav-item>
        <b-nav-item :to="{name: 'dataView'}">Data</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="#">Login</b-nav-item>
        <b-nav-item :to="{name: 'create'}">Create</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>


