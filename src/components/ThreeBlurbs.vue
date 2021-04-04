<template>
  
  <h1>A perfect desk companion</h1>
  <p class="description">A very good description of one type of thing we do fairly well. A very good description of one type of thing we do fairly well.</p>
 

<div class="container-blurb">
  <header>
       <img :src="require(`@/assets/blurb.svg`)"/>
    <h2>Brighten your Video Calls</h2>
    <p>Use cool preset modes to enhance the mood for your next zoom meeting</p>
    <a>Learn More</a>
  </header>

  <header>
    <img :src="require(`@/assets/blurb.svg`)"/>
    <h2>Stay Focused with Visual Cues</h2>
    <p>Keep track of your tasks visually. Check out the Pomodoro mode.</p>
    <a>Learn More</a>
  </header>

  <header>
    <img :src="require(`@/assets/blurb.svg`)"/>
    <h2>Limitless Customization</h2>
    <p>With over 16.7 million RBG colors, you can create the ambiance that works for you.</p>
    <a>Learn More</a>
  </header>
</div>
</template>

<style scoped>
h1 {
margin-top: 5rem;
margin-left: 20%;
font-style: normal;
font-weight: 900;
font-size: 20px;
line-height: 30px;

color: #000000;
}
.description {
margin-top: 1.5rem;
margin-left: 20%;
width: 40vw;
justify-content: center;

font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 12px;


color: #000000;
}

.container-blurb {
  margin-top: 5rem;
  margin-left: 18.5%;
  display: flex;
}

h2 {
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 18px;

color: #000000;
}

p {
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

color: #000000;
}
</style>