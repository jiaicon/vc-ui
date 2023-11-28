<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="welcoming">
    <h1 class="green">{{ msg }}</h1>
    <h3>
        Welcome
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.welcoming h1,
.welcoming h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .welcoming h1,
  .welcoming h3 {
    text-align: left;
  }
}
</style>

