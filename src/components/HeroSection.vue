<template>
  <the-nav-bar></the-nav-bar>
<div class="container">
  <h1>Bring atmosphere to your Zoom meetings</h1>
  <p>LightHOUSE is a customizable desk lamp so deal with it</p>
  <button class="btn-styled">LEARN MORE</button>
  <button class="btn-flat">LEARN MORE</button>

  <div id="circle"></div>
</div>
</template>

<script>
import TheNavBar from '../layout/TheNavBar.vue';
export default {
  components: {
    TheNavBar,
  }
  
}
</script>

<style scoped>
.container {
  flex-wrap: wrap;
  background: #52525B;
  align-items: center;
  
}
button {
padding: .5rem 2rem .5rem 2rem;
}
.btn-styled {
margin-top: 3rem;
margin-left: 20%;
border: 0.5px solid rgba(255, 255, 255, 0.04);
box-sizing: border-box;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.11), -2px -2px 4px rgba(255, 255, 255, 0.11), 9px 9px 12px rgba(0, 0, 0, 0.11), -9px -9px 12px rgba(255, 255, 255, 0.11);
border-radius: 33px;
font-size: 1rem;

background-color: #52525B;
border-color: #52525B;
border-style: none;
color: white;
}

.btn-flat {
background-color: #52525B;
border-style: none;
color: white;
font-size: 1rem;
}

h1 {
  margin-top: 10rem;
  margin-left: 20%;
  width: 50vw;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  color: white;
}

p {
  color: white;
  margin-top: 3rem;
  margin-left: 20%;
}
#circle {
    display: flex;
    margin-left: 50%;
    background: #c4c4c4;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    margin-top: 2rem;
}
</style>