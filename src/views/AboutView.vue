<template>
  <div class="container mx-auto m-5 p-3">
    <h1>You know, I'm something of a programmer myself</h1>

    <p>
      My first computer was a Commodore Vic 20 my father bought in early 80s. I
      was 6 years old and I just rememember that I loved to draw on the screen
      some kind of ascii art using the "print" command. Played videogames on my
      Commodore 64 in the years after and started to code some Basic programs on
      that awesome machine. Started to program in Turbo Pascal, then Visual
      Basic at school. Also Fortran and C, by myself.
    </p>

    <p>
      It was 1999 when I realized that this could have become my job, so I
      learned to develop applications in Visual Basic 6, after in Visual Basic
      .NET and finally in C#. I started at the meantime to develop web sites and
      web applications using HTML and Javascript. I was really proud when I
      coded a huge dynamic web site that showed CSS formatted XML files for my
      first big client.
    </p>

    <p>
      Starting from 2001 I always studied a lot and incremented my knowledge in
      every direction, mainly: .NET, SQL, Java. There were still java applets
      then and I can rememeber the nights on coding them, what a waste of time!
    </p>

    <p>
      In all these years I followed all the evolution of architectual and
      technical world for us "programmers": from SOAP Web Services to Json ones,
      from raw Javascript to JQuery (I still remember the first time I used it,
      and how it looked like the "non plus ultra" of front-end programming) and
      then we started with to Node.js and all the client Frameworks like React and
      Vue (I really love Vue!). I still remember the moment when we said: ok it is not web hosting,
      now it's called cloud, it's the same but different...and everyone started to develop for Azure and AWS.
      <br />I rememer when we
      switched from VSS to Subversion (and Tortoise) then to Git. I remember all
      the issues Sql Server 7.0 had, how painful was to migrate our production
      databases to Sql Server 2005, all the Stored Procedures and Repositories
      written line by line, then the big switch to Hibernate and NHibernate,
      then finally to Entity Framework. I remember the first CQRS application I
      coded and all the years spent on studing OOP, Design Patterns, Algorithms,
      Architecture and every time I discovered and learned something new and
      useful, refactored or rewrited some applications to make them better.
    </p>

    <p>
      During the last ten years my job focused on Project management, Team leading and other "managing activities", but I've never left also pure programming, because I really love it.
      Last things I learned, in the last 2 years, are React Native, Blazor, Dart and Flutter.
    </p>

    <Dialog header="Contacts" modal="true" position="bottom" v-model:visible="display" class="w-75">
      <div class="container p-3 text-center">
        <Button
          class="p-button-rounded p-button-primary m-3"
          label="Linkedin"
          icon="pi pi-linkedin"
          iconPos="left"
          @click="navigate('https://www.linkedin.com/in/andrea-g-a2b5048')"
        />
        <Button
          class="p-button-rounded p-button-secondary m-3"
          label="Twitter"
          icon="pi pi-twitter"
          iconPos="left"
          @click="navigate('https://mobile.twitter.com/edgecrusher77')"
        />
      </div>
    </Dialog>
    <Button label="Contact me" @click="display = true" />
    <!-- <div>count: {{counter.doubleCount}}</div> -->
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()

const display = ref(false);

function navigate(url) {
  window.open(url, "target=_blank");
}

/*counter.count++
counter.$patch({ count: counter.count + 1 })*/
counter.increment()
</script>
