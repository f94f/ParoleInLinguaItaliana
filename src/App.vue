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
  .text {
    font-family: 'Segoe UI Light', serif;
    font-size: 16px;
  }
  .text-title {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 24px;
    line-height: 30px;
    font-weight: bold;
  }
  .text-bold {
    font-family: 'Eras Bold ITC', serif;
    font-weight: bold;
  }
  .text-sub {
    font-family: 'Segoe UI Light', serif;
    text-decoration: underline;
  }
  .text-link {
    color: #da5a13;
    text-decoration: underline;
  }
  .argumento-section {
    border: 1px solid rgb(0, 0, 0);
    border-radius: 5px;
    background-color: white;
    text-align: justify;
    padding: 0px 20px;
    widows: 100%;
  }
  .page-text p {
    text-align: justify;
  }

   /* Tooltip text */
   .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
  }

  .tooltip .tooltiptext {
    width: 120px;
    bottom: 100%;
    left: 50%;
    margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
</style>