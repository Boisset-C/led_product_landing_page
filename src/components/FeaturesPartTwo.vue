<template>
  <header class="container">
    <img :src="require(`@/assets/iphone.svg`)"/>

  <header class="text">
    <h2>Brighten your Video Calls</h2>
    <p>Use cool preset modes to enhance the mood for the your next zoom meeting.</p>
  </header>
  </header>

</template>

<style scoped>

h2 {
  height: 7vh;
  width: 20vw;
}
p {
  height: 5vh;
  width: 35vw;
}
img {
  padding: 10px 10px 10px 10px;
  width: 200px;
  height: 350px;
}

.container {
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  width: 40vw;
}


</style>