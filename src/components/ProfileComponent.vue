<template>
  <section class="site-shell profile-section">
    <div class="profile-card">
      <div>
        <MarkdownRenderer markdown="# Profile" />
        <MarkdownRenderer :markdown="desc" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MarkdownRenderer from "./MarkdownRenderer.vue";

const desc =
  "Hi, my name is Jeff Galbraith and I live in Bassano, Alberta, Canada. \
  <br/><br/>\
My passion is and always has been software development. I've been in the space since 1988. I've worked for many companies such as Northern Telecom (NorTel - twice!), Microsoft (twice!), Honeywell, Vulcan, WildTangent, and many others. I've also led teams through growth and delivery as a CTO, and today as VP of Development. I've learned a lot in my journey, having had some of the best mentors I ever could have hoped for. For that reason, I too, love mentoring and helping others reach their full potential.\
  <br/><br/>\
Bassano is a small prairie town in southern Alberta with wide-open skies, a quieter pace, and plenty of room to think. After years in Calgary, I appreciate being somewhere that still keeps me close to the parts of Alberta I love: community, space, hard winters, warm summers, and easy access to the outdoors. It is a good place to work remotely, write code, and keep a foot in both software and real life.\
<br/><br/>\
During the summer, we go camping -- a lot! Some consider it \"glamping\" (glorified camping) because we have a trailer and a lot of the time we go off-grid. You pull out to what's called \"crown\" or \"public-use\" land, after driving at least several hours, pick a spot, set up your fire and you're camping. Usually, so far remote from civilization there is no mobile services.\
<br/><br/>\
There is lots of work with joy and fulfillment in my day-to-day life. I am also, what I call, a part-time Open-Sourcerer and have been on the Core Team of [Quasar Framework](https://github.com/quasarframework) since 2018.";
</script>
