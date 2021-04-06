<template>
<section class="container">
  <h1>What our customers say</h1>

  <header>
  <img :src="require(`@/assets/quotations.svg`)"/>
  <p>
    A very good description of one type of thing we do fairly well. A very good description of one type of thing we do fairly well. A very good description of one type of thing we do fairly well</p>
  </header>
    <h2 class="user-one">UserOne </h2>

  <header>
    <img :src="require(`@/assets/quotations.svg`)"/>
  <p>
   A very good description of one type of thing we do fairly well. A very good description of one type of thing we do fairly well. A very good description of one type of thing we do fairly well. </p>
  
  </header>
    <h2 class="user-two">UserTwo</h2>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background: #52525B;
}

h1 {
padding-top: 2rem;
padding-bottom: 2rem;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 20px;

color: #FFFFFF;
margin-left: 20%;
}

p {
text-align: left;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;

color: #FFFFFF;
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

header {
  display: flex;

}

img {
  margin-left: 20%;
  height: 2rem;
  width: 5rem;

  
}


</style>