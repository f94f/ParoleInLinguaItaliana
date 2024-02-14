<template>
  <div class="scuola">
    <!-- <van-col class = "logo_box" call="logo_box" span="100"> -->
      <div class="pli-logo"><LogoBox/></div>
    <!-- </van-col> -->
    
    <div class="pli-context">
      <van-row :gutter="[0, 13]" justify="center">
        <van-col class="pil-context" span="11">
          <van-row :gutter="[0, 10]">
            <van-col class="" span="24">
              <div class="intro-box"><IntroBox/></div>
            </van-col>
            <van-col class="" span="24">
              <div class="contact-box"><ContactBox/></div>
            </van-col>
          </van-row>
        </van-col>
        
        <van-col span="11" offset="1">
          <!-- <TestOne/> -->
          <div class="biblioteca-box">
            <BibbliotecaBox/>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import LogoBox from "@/components/scuola/LogoBox.vue";
import IntroBox from "@/components/scuola/IntroBox.vue";
import ContactBox from "@/components/scuola/ContactBox.vue";
import BibbliotecaBox from "@/components/scuola/biblioteca/BibliotecaComponent.vue";

export default {
  name: "ScuolaView",
  components: {
    LogoBox, 
    IntroBox, 
    ContactBox, 
    BibbliotecaBox
  },
};
</script>

<style scoped>
  .pli-logo {
    margin-bottom: 15px;
    text-align: center;
  }
  .pli-context {
    height: 830px;
    padding: auto;
  }
  .scuola {
    background-color: #ddd4ba;
    background-size: cover;
  }
  .biblioteca-box {
    /* background-color: white; */
    /* height: 82vh; */
    border: 1px solid rgb(0, 0, 0);
    position: relative;
    background-image: url("../assets/img/library-3_a80.png");
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* opacity: 0.6; */
  }
  
  .logo_box {
    margin-top: 8px;
  }

  @media (max-width: 600px) {
    .intro-box {
      margin: 2px;
      width: 99vw;
    }
    .biblioteca-box {
      height: 500px;
      width: 98vw;
    }
    .contact-box {
      margin: 2px;
      width: 99vw;
      /* position: fixed;
      bottom: 0; */
    }
    .van-row--justify-center {
      justify-content: flex-start;
    }
    .van-col--offset-1 {
      margin-left: 1%;
    }
    .van-row {
      display: inline-block;
    }
  }
</style>
