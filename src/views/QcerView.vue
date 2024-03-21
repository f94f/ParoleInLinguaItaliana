<template>
  <div class="context">
    <div class="scene" v-if="isLargeScreen">
      <div class="book-wrap">
        <div class="left-side">
          <div class="book-cover-left"></div>
          <div class="layer1">
            <div class="page-left"></div>
          </div>
          <div class="layer2">
            <div class="page-left"></div>
          </div>
          <div class="layer3">
            <div class="page-left"></div>
          </div>
          <div class="layer4">
            <div class="page-left"></div>
          </div>
          <div class="layer-text">
            <div class="page-left-2">
              <div class="corner"></div>
              <div class="corner2"></div>
              <div class="corner-fold"></div>
              <div class="page-text w-richtext">
                <h3><strong v-html="argomenti['qcer'].title_es"></strong></h3>
                <span v-html="argomenti['qcer'].link_es"></span>
                <span v-html="argomenti['qcer'].content_es"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="center"></div>
        <div class="right-side">
          <div class="book-cover-right"></div>
          <div class="layer1">
            <div class="page-right"></div>
          </div>
          <div class="layer2 right">
            <div class="page-right"></div>
          </div>
          <div class="layer3 right">
            <div class="page-right"></div>
          </div>
          <div class="layer4 right">
            <div class="page-right"></div>
            <p>
              <br/><br/>
              <a class="marcadores lib-1 text-bold" :href="segnalibri['book_1'].link">{{ segnalibri['book_1'].content_it }}</a>
              <br/><br/><br/>
              <a class="marcadores lib-2 text-bold" :href="segnalibri['book_2'].link">{{ segnalibri['book_2'].content_it }}</a>
              <br/><br/><br/>
              <a class="marcadores lib-3 text-bold" :href="segnalibri['book_3'].link">{{ segnalibri['book_3'].content_it }}</a>
              <br/><br/><br/>
              <a class="marcadores lib-4 text-bold" :href="segnalibri['book_4'].link">{{ segnalibri['book_4'].content_it }}</a>
              <br/><br/><br/>
              <a class="marcadores lib-5 text-bold" :href="segnalibri['book_5'].link">{{ segnalibri['book_5'].content_it }}</a>
              <br/><br/><br/>
              <a class="marcadores lib-6 text-bold" :href="segnalibri['book_6'].link">{{ segnalibri['book_6'].content_it }}</a>
              <br/><br/><br/>
              <a class="marcadores lib-7 text-bold" :href="segnalibri['book_7'].link">{{ segnalibri['book_7'].content_it }}</a>
              <br/><br/><br/><br/><br/><br/><br/>
              <a class="marcadores lib-0 text-bold" href="/"><i class="fa-solid fa-house-chimney"></i></a>
            </p>
          </div>
          <div class="layer-text right">
            <div class="page-right-2">
              <div class="page-text w-richtext">
                <h3><strong v-html="argomenti['qcer'].title_it"></strong></h3>
                <span v-html="argomenti['qcer'].link_it"></span>
                <span v-html="argomenti['qcer'].content_it"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="argumento-section" v-else>
        <van-tabs v-model:active="language">
          <van-tab title="ESPAÑOL"></van-tab>
          <van-tab title="ITALIANO"></van-tab>
        </van-tabs>
        <br/>
        <div v-if="language==0">
          <van-row justify="space-between">
            <van-col span="1"><van-button :color="segnalibri['book_1'].color" @click="navigate(segnalibri['book_1'].link)">{{ segnalibri['book_1'].content_es }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_2'].color" @click="navigate(segnalibri['book_2'].link)">{{ segnalibri['book_2'].content_es }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_3'].color" @click="navigate(segnalibri['book_3'].link)">{{ segnalibri['book_3'].content_es }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_4'].color" @click="navigate(segnalibri['book_4'].link)">{{ segnalibri['book_4'].content_es }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_5'].color" @click="navigate(segnalibri['book_5'].link)">{{ segnalibri['book_5'].content_es }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_6'].color" @click="navigate(segnalibri['book_6'].link)">{{ segnalibri['book_6'].content_es }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_7'].color" @click="navigate(segnalibri['book_7'].link)">{{ segnalibri['book_7'].content_es }}</van-button></van-col>
            <van-col span="1"><van-button type="default" @click="navigate(segnalibri['book_0'].link)"><i class="fa-solid fa-house-chimney"></i></van-button></van-col>
          </van-row>
          <br/>
          <div>
            <h3><strong v-html="argomenti['qcer'].title_es"></strong></h3>
            <span v-html="argomenti['qcer'].link_es"></span>
            <span v-html="argomenti['qcer'].content_es"></span>
          </div>
        </div>
        <div v-else>
          <van-row justify="space-between">
            <van-col span="1"><van-button :color="segnalibri['book_1'].color" @click="navigate(segnalibri['book_1'].link)">{{ segnalibri['book_1'].content_it }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_2'].color" @click="navigate(segnalibri['book_2'].link)">{{ segnalibri['book_2'].content_it }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_3'].color" @click="navigate(segnalibri['book_3'].link)">{{ segnalibri['book_3'].content_it }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_4'].color" @click="navigate(segnalibri['book_4'].link)">{{ segnalibri['book_4'].content_it }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_5'].color" @click="navigate(segnalibri['book_5'].link)">{{ segnalibri['book_5'].content_it }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_6'].color" @click="navigate(segnalibri['book_6'].link)">{{ segnalibri['book_6'].content_it }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_7'].color" @click="navigate(segnalibri['book_7'].link)">{{ segnalibri['book_7'].content_it }}</van-button></van-col>
            <van-col span="1"><van-button type="default" @click="navigate(segnalibri['book_0'].link)"><i class="fa-solid fa-house-chimney"></i></van-button></van-col>
          </van-row>
          <br/>
          <div>
            <h3><strong v-html="argomenti['qcer'].title_it"></strong></h3>
            <span v-html="argomenti['qcer'].link_it"></span>
            <span v-html="argomenti['qcer'].content_it"></span>
          </div>
        </div>
    </div>
    <br/>
    <div class="argumento-section">
      <div class="contact-box"><ContactBox/></div>
    </div>
    <br/>
  </div>
</template>

<script>
  import { useMediaQuery } from '@vueuse/core'
  import ContactBox from "@/components/scuola/ContactBox.vue";
  import arg from "@/components/scuola/argomenti/argomenti.json";
  import seg from "@/components/scuola/argomenti/segnalibri.json";

  export default {
    components: { ContactBox },
    name: "QcerView",
    data() {
      return { argomenti: arg, segnalibri: seg, isLargeScreen: false, language: 0 }
    },
    methods: {
      msgAlert() {
        // console.log("argomenti: ");
        // console.log(this.argomento);
      },
      navigate(go) {
        this.$router.push({ path: go })
      }
    },
    mounted() {
      this.isLargeScreen = useMediaQuery('(min-width: 1340px)');
      // this.isLargeScreen = useMediaQuery('(min-width: 1530px)');
    },
    // setup() {
    //   return { }
    // }
  };
</script>

<style scoped>
  .text {
    font-size: 18px !important;
  }
  .page-text p {
    text-align: justify;
  }
  .marcadores {
    padding: 10px;
    border: 1px solid #c2b7b77b;
    border-radius: 10px;
    /* background-color: white; */
    height: 30px;
    cursor: pointer;
    right: 0px;
    margin-left: auto; 
    margin-right: -110px;
    color: white;
  }
  .marcadores:link { 
    text-decoration: none; 
  } 
  .marcadores:visited { 
    text-decoration: none; 
  } 
  .marcadores:hover { 
    text-decoration: none; 
  } 
  .marcadores:active { 
    text-decoration: none; 
  }

  .lib-1 {
    background-color: #d53613;
  }
  .lib-2 {
    background-color: #5a5b5b;
  }
  .lib-3 {
    background-color: #0e4326;
  }
  .lib-4 {
    background-color: #0066cc;
  }
  .lib-5 {
    background-color: #222222;
  }
  .lib-6 {
    background-color: #ffa600;
  }
  .lib-7 {
    background-color: #221b59;
  }
  .lib-0 {
    background-color: white;
    color: #222222;
  }
</style>

<style scoped>
  @media (min-width: 1130px) {
    .argumento-section {
      max-width: 1130px;
      margin: auto;
      
    }
  }

  @media (max-width: 1130px) {
    .argumento-section {
      margin: 15px;
    }
  }

  @media (min-width: 1130px) {
    /*Webflow standard classes */
    html.w-mod-touch * {
      background-attachment: scroll !important;
    }
    .w-block {
      display: block;
    }
    .w-inline-block {
      max-width: 100%;
      display: inline-block;
    }

    .w-webflow-badge,
    .w-webflow-badge * {
      position: static;
      left: auto;
      top: auto;
      right: auto;
      bottom: auto;
      z-index: auto;
      display: block;
      visibility: visible;
      overflow: visible;
      overflow-x: visible;
      overflow-y: visible;
      box-sizing: border-box;
      width: auto;
      height: auto;
      max-height: none;
      max-width: none;
      min-height: 0;
      min-width: 0;
      margin: 0;
      padding: 0;
      float: none;
      clear: none;
      border: 0 none transparent;
      border-radius: 0;
      background: none;
      background-image: none;
      background-position: 0% 0%;
      background-size: auto auto;
      background-repeat: repeat;
      background-origin: padding-box;
      background-clip: border-box;
      background-attachment: scroll;
      background-color: transparent;
      box-shadow: none;
      opacity: 1.0;
      transform: none;
      transition: none;
      direction: ltr;
      font-family: inherit;
      font-weight: inherit;
      color: inherit;
      font-size: inherit;
      line-height: inherit;
      font-style: inherit;
      font-variant: inherit;
      text-align: inherit;
      letter-spacing: inherit;
      text-decoration: inherit;
      text-indent: 0;
      text-transform: inherit;
      list-style-type: disc;
      text-shadow: none;
      font-smoothing: auto;
      vertical-align: baseline;
      cursor: inherit;
      white-space: inherit;
      word-break: normal;
      word-spacing: normal;
      word-wrap: normal;
    }
    .w-webflow-badge {
      position: fixed !important;
      display: inline-block !important;
      visibility: visible !important;
      opacity: 1 !important;
      z-index: 2147483647 !important;
      top: auto !important;
      right: 12px !important;
      bottom: 12px !important;
      left: auto !important;
      color: #AAADB0 !important;
      background-color: #fff !important;
      border-radius: 3px !important;
      padding: 6px 8px 6px 6px !important;
      font-size: 12px !important;
      opacity: 1.0 !important;
      line-height: 14px !important;
      text-decoration: none !important;
      transform: none !important;
      margin: 0 !important;
      width: auto !important;
      height: auto !important;
      overflow: visible !important;
      white-space: nowrap;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);
    }
    .w-webflow-badge > img {
      display: inline-block !important;
      visibility: visible !important;
      opacity: 1 !important;
      vertical-align: middle !important;
    }

    .w-richtext:before,
    .w-richtext:after {
      content: " ";
      display: table;
    }
    .w-richtext:after {
      clear: both;
    }
    .w-richtext[contenteditable="true"]:before,
    .w-richtext[contenteditable="true"]:after {
      white-space: initial;
    }

    /*-----------------------*/

    h3 {
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: 24px;
      line-height: 30px;
      font-weight: bold;
    }

    h6 {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 12px;
      line-height: 18px;
      font-weight: bold;
    }

    p {
      margin-top: 0;
      margin-bottom: 10px;
    }

    a {
      text-decoration: underline;
    }

    .scene {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      width: 100%;
      height: 60vw;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: stretch;
      -webkit-align-items: stretch;
      -ms-flex-align: stretch;
      align-items: stretch;
      /* background-color: #fff; */
      -webkit-perspective: 4000px;
      perspective: 4000px;
      -webkit-perspective-origin: 50% 0%;
      perspective-origin: 50% 0%;
    }

    .book-wrap {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      width: 65vw;
      margin-top: 8vw;
      margin-bottom: 8vw;
      padding-right: 1%;
      padding-left: 1%;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-perspective: 4000px;
      perspective: 4000px;
      -webkit-perspective-origin: 50% 50%;
      perspective-origin: 50% 50%;
      -webkit-transform: translate3d(0px, 5%, -264px) rotateX(27deg) rotateY(0deg) rotateZ(-10deg);
      transform: translate3d(0px, 5%, -264px) rotateX(27deg) rotateY(0deg) rotateZ(-10deg);
      -webkit-transition: -webkit-transform 2000ms cubic-bezier(.165, .84, .44, 1);
      transition: -webkit-transform 2000ms cubic-bezier(.165, .84, .44, 1);
      transition: transform 2000ms cubic-bezier(.165, .84, .44, 1);
      transition: transform 2000ms cubic-bezier(.165, .84, .44, 1), -webkit-transform 2000ms cubic-bezier(.165, .84, .44, 1);
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    .book-wrap:hover {
      -webkit-transform: translate3d(0px, 5%, -264px) rotateX(13deg) rotateY(0deg) rotateZ(-3deg);
      transform: translate3d(0px, 5%, -264px) rotateX(13deg) rotateY(0deg) rotateZ(-3deg);
    }

    .book-cover-left {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      border-top-left-radius: 4%;
      border-bottom-left-radius: 4%;
      background-color: #0066cc;
      box-shadow: inset 4px -4px 4px 1px #0066cc, inset 7px -7px 4px 0 #0066cc;
      -webkit-perspective: 4000px;
      perspective: 4000px;
      -webkit-transform: translate3d(0px, 0px, -1px);
      transform: translate3d(0px, 0px, -1px);
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    .book-cover-right {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      border-top-right-radius: 4%;
      border-bottom-right-radius: 4%;
      background-color: #0066cc;
      box-shadow: inset -4px -4px 4px 1px #0066cc, inset -7px -7px 4px 0 #0066cc;
    }

    .layer1 {
      position: fixed;
      left: 0px;
      top: 0px;
      right: 0px;
      bottom: 0px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin: 20px 10px 10px;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-transform: translate3d(0px, 0px, 5px);
      transform: translate3d(0px, 0px, 5px);
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    .page-left {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      border-top-left-radius: 1%;
      border-bottom-left-radius: 1%;
      background-color: #fff;
      box-shadow: inset 0 0 26px 2px #d8cccc, -1px 1px 13px 0 rgba(34, 27, 20, .81);
    }

    .layer-text {
      position: fixed;
      left: 0px;
      top: 0px;
      right: 0px;
      bottom: 0px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      width: 97%;
      margin: 20px 10px 18px;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-perspective: 4000px;
      perspective: 4000px;
      -webkit-perspective-origin: 50% 50%;
      perspective-origin: 50% 50%;
      -webkit-transform: translate3d(0px, 0px, 32px);
      transform: translate3d(0px, 0px, 32px);
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    .layer-text.right {
      -webkit-transform: translate3d(-37px, 0px, 32px);
      transform: translate3d(-37px, 0px, 32px);
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    .page-left-2 {
      position: relative;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      border-top-left-radius: 18%;
      border-bottom-left-radius: 1%;
      background-color: #fff;
      box-shadow: inset 0 0 7px 4px hsla(0, 13%, 82%, .43), -1px 1px 13px 0 rgba(34, 27, 20, .49);
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-transform: rotateX(0deg) rotateY(17deg) rotateZ(0deg);
      transform: rotateX(0deg) rotateY(17deg) rotateZ(0deg);
      -webkit-transform-origin: 100% 50%;
      -ms-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
      -webkit-transition: -webkit-transform 650ms cubic-bezier(.165, .84, .44, 1);
      transition: -webkit-transform 650ms cubic-bezier(.165, .84, .44, 1);
      transition: transform 650ms cubic-bezier(.165, .84, .44, 1);
      transition: transform 650ms cubic-bezier(.165, .84, .44, 1), -webkit-transform 650ms cubic-bezier(.165, .84, .44, 1);
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    .page-left-2:hover {
      -webkit-transform: rotateX(0deg) rotateY(7deg) rotateZ(0deg);
      transform: rotateX(0deg) rotateY(7deg) rotateZ(0deg);
    }

    .left-side {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      width: 49%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-perspective: 4000px;
      perspective: 4000px;
      -webkit-perspective-origin: 0% 50%;
      perspective-origin: 0% 50%;
      -webkit-transform: rotateX(0deg) rotateY(20deg) rotateZ(0deg);
      transform: rotateX(0deg) rotateY(20deg) rotateZ(0deg);
      -webkit-transform-origin: 100% 50%;
      -ms-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    .right-side {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      width: 49%;
      -webkit-perspective: 4000px;
      perspective: 4000px;
      -webkit-perspective-origin: 0% 50%;
      perspective-origin: 0% 50%;
      -webkit-transform: rotateX(0deg) rotateY(-1deg) rotateZ(0deg);
      transform: rotateX(0deg) rotateY(-1deg) rotateZ(0deg);
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    .center {
      width: 3%;
      background-image: -webkit-radial-gradient(circle farthest-corner at 56% -8%, #fff 8%, transparent 0), -webkit-radial-gradient(circle farthest-corner at 50% 108%, #fff 8%, transparent 0), -webkit-linear-gradient(0deg, #635648, #2e1800 21%, #635648 30%, #2e1800 48%, #635648 68%, #2e1800 79%, #635648);
      background-image: radial-gradient(circle farthest-corner at 56% -8%, #fff 8%, transparent 0), radial-gradient(circle farthest-corner at 50% 108%, #fff 8%, transparent 0), linear-gradient(90deg, #635648, #2e1800 21%, #635648 30%, #2e1800 48%, #635648 68%, #2e1800 79%, #635648);
    }

    .corner-fold {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 30px;
      height: 30px;
      border-right: 1px solid hsla(0, 13%, 82%, .55);
      border-bottom: 1px solid hsla(0, 13%, 82%, .55);
      background-image: -webkit-linear-gradient(315deg, transparent 47%, #f0f0f0 48%, #fff 55%, #f6f6f6);
      background-image: linear-gradient(135deg, transparent 47%, #f0f0f0 48%, #fff 55%, #f6f6f6);
      box-shadow: 6px 6px 9px -4px hsla(0, 13%, 82%, .53);
    }

    .corner {
      position: absolute;
      left: 0px;
      top: 27px;
      width: 5vw;
      height: 5vw;
      background-image: -webkit-linear-gradient(315deg, #fff 30%, transparent);
      background-image: linear-gradient(135deg, #fff 30%, transparent);
      box-shadow: inset 13px 0 17px -12px hsla(0, 13%, 82%, .43);
    }

    .corner2 {
      position: absolute;
      left: 28px;
      top: 0px;
      width: 5vw;
      height: 5vw;
      background-image: -webkit-linear-gradient(315deg, #fff 31%, transparent);
      background-image: linear-gradient(135deg, #fff 31%, transparent);
      box-shadow: inset 0 13px 17px -12px hsla(0, 13%, 82%, .43);
    }

    .page-text {
      position: relative;
      display: block;
      width: 80%;
      margin-top: 25px;
      margin-right: auto;
      margin-left: auto;
      font-family: 'Segoe UI Light', serif;
    }

    .page-text p {
      margin-bottom: 0px;
      font-size: 1.2vw;
      line-height: 1.5;
    }

    .page-text h3 {
      font-family: 'Segoe UI Light', serif;
      font-style: italic;
    }

    .page-text h6 {
      font-family: 'Segoe UI Light', sans-serif;
      font-size: 12px;
      text-decoration: none;
    }

    .page-text a {
      color: #da5a13;
    }

    .layer2 {
      position: fixed;
      left: 0px;
      top: 0px;
      right: 0px;
      bottom: 0px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin: 20px 10px 13px;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-transform: translate3d(2px, 0px, 10px);
      transform: translate3d(2px, 0px, 10px);
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    .layer2.right {
      -webkit-transform: translate3d(-5px, 0px, 10px);
      transform: translate3d(-5px, 0px, 10px);
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    .layer3 {
      position: fixed;
      left: 0px;
      top: 0px;
      right: 0px;
      bottom: 0px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin: 20px 10px 13px;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-transform: translate3d(4px, 0px, 20px);
      transform: translate3d(4px, 0px, 20px);
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    .layer3.right {
      -webkit-transform: translate3d(-10px, 0px, 20px);
      transform: translate3d(-10px, 0px, 20px);
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    .layer4 {
      position: fixed;
      left: 0px;
      top: 0px;
      right: 0px;
      bottom: 0px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin: 20px 10px 15px;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-transform: translate3d(6px, 0px, 30px);
      transform: translate3d(6px, 0px, 30px);
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    .layer4.right {
      -webkit-transform: translate3d(-15px, 0px, 30px);
      transform: translate3d(-15px, 0px, 30px);
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    .page-right-2 {
      position: relative;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      border-top-right-radius: 1%;
      border-bottom-right-radius: 1%;
      background-color: #fff;
      box-shadow: inset 0 0 7px 4px hsla(0, 13%, 82%, .43), 1px 1px 13px 0 rgba(34, 27, 20, .49);
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-transform: rotateX(0deg) rotateY(-3deg) rotateZ(0deg);
      transform: rotateX(0deg) rotateY(-3deg) rotateZ(0deg);
      -webkit-transform-origin: 0% 50%;
      -ms-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
      -webkit-transition: -webkit-transform 850ms ease;
      transition: -webkit-transform 850ms ease;
      transition: transform 850ms ease;
      transition: transform 850ms ease, -webkit-transform 850ms ease;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    .page-right-2:hover {
      -webkit-transform: rotateX(0deg) rotateY(-17deg) rotateZ(0deg);
      transform: rotateX(0deg) rotateY(-17deg) rotateZ(0deg);
    }

    .page-right {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      border-top-right-radius: 1%;
      border-bottom-right-radius: 1%;
      background-color: #fff;
      box-shadow: inset 0 0 26px 2px #d8cccc, 1px 1px 13px 0 rgba(34, 27, 20, .81);
    }
  }
</style>
