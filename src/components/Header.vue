<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-light fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">My Portofolio</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/resume" class="nav-link">Resume</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>