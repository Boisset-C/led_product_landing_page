<template>
<div id=#app>

<section class="hero">
  <hero-section></hero-section>
</section>

<section class="blurb">
  <three-blurbs></three-blurbs>
</section>

<section class="social-proof">
  <social-proof></social-proof>
</section>

<section class="features-part-one">
  <features-part-one></features-part-one>
</section>

<section class="features-part-two">
  <features-part-two></features-part-two>
</section>

<section class="cta">
  <call-to-action></call-to-action>
</section>

<section class="footer">
  <footer-section></footer-section>
</section>

</div>
</template>

<script>


export default {
  name: 'App',
  components:{

  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

* {
  margin: 1rem;
  font-family: Poppins;
  box-sizing: border-box
}
#app {
  display: grid;
  width: 1040px;
  height: 100vh;
}

.hero {
  height: 900px;
  background: #52525B;
}

.blurb {
height: 750px;
}


</style>