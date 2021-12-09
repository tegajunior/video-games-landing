<template>
  <div class="spinner">
    
  </div>
</template>
<script>
export default {
  name: 'LoadingSpinner',
}
</script>

<style scoped>
  .spinner {
  display: inline-block;
  width: 100%;
  height: 80px;
  position: relative;
  left: 50%;
  top: 50%;
}
.spinner:after {
  content: ' ';
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid teal;
  border-color: teal transparent teal transparent;
  animation: spinner 1.2s linear infinite;
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>