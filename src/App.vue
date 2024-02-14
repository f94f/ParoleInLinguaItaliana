<template>
  <LogoView/>
  <article>
    <ScuolaView/>
  </article>
  <!-- <footer contentEditable>Footer</footer> -->
</template>

<script>
import ScuolaView from '@/views/ScuolaView'
// import LogoView from '@/views/LogoView'

export default {
  components: { ScuolaView,  },
}
</script>

<style>
  article {
    min-height: 100hv;
    /* margin-bottom: 200px; */
  }
  footer {
    clear: both;
    position: relative;
    height: 200px;
    margin-top: -200px;
    background-color: #222222;
  }
</style>