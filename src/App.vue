<template>
  <div id="#app">
    <section class="hero">
      <hero-section></hero-section>
    </section>

    <section class="blurb">
      <three-blurbs></three-blurbs>
    </section>

    <section class="social-proof">
      <social-proof></social-proof>
    </section>

    <section class="features">
      <features-part-one></features-part-one>
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
  name: "App",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");

* {
  margin: 0.5rem;

  font-family: Poppins;
  box-sizing: border-box;
}
#app {
  display: grid;
  gap: 40px;
  width: 1440px;
  height: 100vh;
}
.social-proof {
  background: #52525b;
}
.hero {
  background: #52525b;
}

.blurb {
  background: white;
}
.cta {
  background-image: url("./assets/rectangle.svg");
  height: 350px;
}
.features {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f2f2f2;
}
.footer {
  background: #52525b;
}
</style>
