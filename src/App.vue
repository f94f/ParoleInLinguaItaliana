<template>
  <LogoView/>
  <article>
    <div class="pli-logo"><LogoBox/></div>
    <!-- <ScuolaView/> -->
    <router-view testi=""/>
  </article>
  <!-- <footer contentEditable>Footer</footer> -->
</template>

<script>
  // import ScuolaView from '@/views/ScuolaView'
  import LogoBox from "@/components/scuola/LogoBox.vue";
  import data from "@/assets/i18n/parole_ES.json";

  export default {
    components: { LogoBox  },
    data() {
      return { 
        arg: data,
      }
    },
    methods: {
      msgAlert() {
        alert("Hello");
        console.log("Hola");
      }
    },
    mounted() {
      // this.argomenti = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
      // console.log(this.arg);
    },
    // setup() {
    //   const testi = data;
    //   return { testi };
    // }
  };
</script>

<style>
  article {
    min-height: 100hv;
    font-family: 'Segoe UI Light', sans-serif;
    /* margin-bottom: 200px; */
  }
  footer {
    clear: both;
    position: relative;
    height: 200px;
    margin-top: -200px;
    background-color: #222222;
  }
  body {
    background-color: #ddd4ba;
    background-size: cover;
  }
  .pli-logo {
    margin-bottom: 15px;
    text-align: center;
  }
  .logo_box {
    margin-top: 8px;
  }
  .text-bold {
    font-family: 'Eras Bold ITC', serif;
    font-weight: bold;
  }
  .text-sub {
    font-family: 'Segoe UI Light', serif;
    text-decoration: underline;
  }
</style>