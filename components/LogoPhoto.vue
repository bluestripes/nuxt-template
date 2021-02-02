<template>
  <img src="~/assets/img/350x150.png" alt="Shoe photo"/>
</template>

<style scoped>
img {
  animation: 1s appear;
  margin: auto;
  background: silver;
  max-width:100%;
  max-height:100%;
  object-fit: contain
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
