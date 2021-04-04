<template>
<section class="container">
  <h1>What our customers say</h1>
  
  
  <header>
    <p>A very good description of one type of thing we do fairly well. A very good description of one type of thing we do fairly well. A very good description of one type of thing we do fairly well</p>
  <img :src="require(`@/assets/quotations.svg`)"/>
    <h2 class="user-one">UserOne </h2>
  </header>

  <header>
   <p>A very good description of one type of thing we do fairly well. A very good description of one type of thing we do fairly well. A very good description of one type of thing we do fairly well</p>
  <img :src="require(`@/assets/quotations.svg`)"/>
    <h2 class="user-two">UserTwo</h2>
  </header>
  </section>
</template>

<style scoped>
.container {
  padding-top: 2rem;
  margin-top: 1rem;
  background: #52525B;
}

h1 {
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 20px;

color: #FFFFFF;
  margin-left: 20%;
}

p {
padding-top: 1rem;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;

color: #FFFFFF;
  margin-left: 20%;
}
h2 {
margin-left: 20%;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;

color: white;
}

.user-two {
  padding-bottom: 2rem;
}


</style>