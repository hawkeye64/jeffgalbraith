<template>
  <div class="row full-width justify-center q-mt-xl">
    <div class="full-width page-column">
      <div
        class="q-pa-md col-12-sm col-8-md col-6-lg shadow-1"
        style="max-width: 800px; width: 100%"
      >
        <MarkdownRenderer markdown="# Profile" />
        <MarkdownRenderer :markdown="desc" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MarkdownRenderer from "./MarkdownRenderer.vue";

const desc =
  "Hi, my name is Jeff Galbraith and I live in Calgary, Alberta CANADA. \
  <br/><br/>\
My passion is and always has been software development. I've been in the space since 1988. I've work for many companies such as Northern Telecom (NorTel - twice!), Microsoft (twice!), Honeywell, Vulcan, WildTangent, and many others. I've learned a lot in my journey, having had some of the best mentors I ever could have hoped for. For that reason, I too, love mentoring and helping others reach their full potential.\
  <br/><br/>\
You may or may not have heard of [Calgary](https://www.google.com/maps/place/Calgary,+AB/@51.0272883,-114.3680132,10z/data=!3m1!4b1!4m5!3m4!1s0x537170039f843fd5:0x266d3bb1b652b63a!8m2!3d51.0447331!4d-114.0718831) before, but it has been voted [5th most livable places to live in the world](https://calgaryherald.com/news/local-news/calgary-edges-out-vancouver-and-toronto-to-rank-as-worlds-fifth-most-liveable-city-the-economist) and I love it here. Granted, there has been several times in the Winter when we have been the coldest place on Earth with wind-chill reaching -45&#176;C to -50&#176;C. But, I don't let that dampen my spirits when working remotely in software development, at those temperatures, it is considered the normal here. The summers are typically 22&#176;C to 26&#176;C and even then, we often see the +30&#176;C weather.\
<br/><br/>\
During the summer, we go camping -- a lot! Some consider it \"glamping\" (glorified camping) because we have a trailer and a lot of the time we go off-grid. You pull out to what's called \"crown\" or \"public-use\" land, after driving at least several hours, pick a spot, set up your fire and you're camping. Usually, so far remote from civilization there is no mobile services.\
<br/><br/>\
There is lots of work with joy and fulfullment in my day-to-day life. I am also, what I call, a part-time Open-Sourcerer and have been on the Core Team of [Quasar Framework](https://github.com/quasarframework) since 2018.";
</script>
