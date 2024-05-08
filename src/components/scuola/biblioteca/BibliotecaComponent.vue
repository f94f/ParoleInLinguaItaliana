<template>
  
    <div class="biblioteca-content">
      <!-- <div class="anouncement-section" style="position: absolute;">
        <span>
          <p>Sono aperte le iscrizioni per il prossimo bimestre da lunedì a venerdì, che iniziano il 6 maggio e terminano il 13 giugno.</p>
          <p>Orari disponibili:</p>
          <p>7:00 - 9:00</p>
          <p>9:00 - 11:00</p>
          <p>18:00 - 20:00</p>
        </span>
      </div> -->
      <form class="container">
        <input type="radio" name="title" id="book1" />
        <input type="radio" name="title" id="book2" />
        <input type="radio" name="title" id="book3" />
        <input type="radio" name="title" id="book4" />
        <input type="radio" name="title" id="book5" />
        <input type="radio" name="title" id="book6" />
        <input type="radio" name="title" id="book7" />
        <input type="radio" name="title" id="book8" />
        <input type="radio" name="title" id="book9" />
        <input type="radio" name="title" id="book10" />
        <input type="radio" name="title" id="book11" />
        <div class="surface">
          <!-- BOOKS -->
          <label v-for="(book) in books" :key="'book' + book.id" :class="'block b' + book.id" :for="'book' + book.id">
            <div class="block-inner">
              <div class="back"></div>
              <div class="bottom"></div>
              <div class="front">
                <div class="spine">{{ book.spine }}</div>
              </div>
              <div class="left"></div>
              <div class="right" :data-title="book.cover">
                <div class="cover"></div>
                <div class="contents">
                  <h2>{{ book.title }}</h2>
                  <span class="space"></span>
                  <span>
                    <p class="content-text">{{ book.context }}</p>
                    <a v-if="book.route != '/'" :href="book.route" class="link-btn">+</a>
                    <!-- <a href="" class="link-btn" @click.prevent="msgAlert()">+</a> -->
                  </span>
                </div>
              </div>
              <div class="top"></div>
            </div>
          </label>
        </div>
        <input type="reset" value="Return" />
      </form>
    </div>
  </template>
  
<script>
  import { books } from './inventory'
  // import Book from "@/components/scuola/biblioteca/BookComponent.vue";

  export default {
    name: "BibliotecaBox",
    // components: { Book },
    data() {
      return { }
    },
    methods: {
      msgAlert() {
        alert("Hello");
        console.log("Hola");
      }
    },
    mounted() {},
    setup() {
      return { books }
    }
  };
</script>

<style scoped>
  .biblioteca-content {
    opacity: 1;
  }
  .content-text {
    padding-top: 15px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* number of lines to show */
            line-clamp: 2; 
    -webkit-box-orient: vertical;
  }
  .link-btn{
    margin-top: 15px;
    font-size: 17px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    background: #6cbefd;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 40px;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    transition: .3s;
  }
</style>

<style lang="scss" scoped>
  @media (min-width: 990px) {
    $sqSize: 18px;
    $contW: 100%;
    $contH: 100%;
    $xSpaces: 25;
    $ySpaces: 14;
    $zSpaces: 15;
    $xAngle: 80deg;
    $zAngle: 0deg;
    $books: 7;
    $bookStart: 1;
    $trans: 0.3s;

    // font sizing
    $fFontSize: $sqSize*1; //Lomo
    $rFontSize: $sqSize*1.5; //Covert
    $cntntFontSize: $sqSize*0.7; //Content

    // non-book colors
    $btnColor: #c22;
    $shelfColor: #222;

    /* Block placement */
    // parameters: x-pos,y-pos,z-pos, width, depth, height, color, is-book
    $blocks:
      // books
      // (2,3,2, 2,11,14, #c00000, true),
      // (4,3,2, 2,11,14, #891a21, true),
      (4,3,2, 2,11,14, #d53613, true),
      (6.5,3,2, 2,11,14, #5a5b5b, true),
      (9,3,2, 2,11,14, #0e4326, true),
      (11.5,3,2, 2,11,14, #0066cc, true),
      (14,3,2, 2,11,14, #222222, true),
      (16.5,3,2, 2,11,14, #ffa600, true),
      (19,3,2, 2,10,14, #221b59, true),
      // (20,3,2, 2,10,14, #443344, true),
      // (22,3,2, 2,10,14, #666777, true)
      ;

    @mixin placeBlock($x, $y, $z, $w, $d, $h, $c, $isBook) {
      display: block;
      transform: translate3d(
        $sqSize*($x - 1),
        $sqSize*(-$y - ($d - 1)),
        ($sqSize*$z) + ($sqSize*($h - 1))
      );
      .block-inner > div {
        background-color: $c;
          &.top, &.bottom {
          width: $sqSize * $w;
          height: $sqSize * $d;
        }
        &.top  {
          transform: rotateX(-90deg) translateY(-$sqSize*($d - 1));
        }
        &.bottom {
          transform: rotateX(-90deg) translateY(-$sqSize*($d - 1)) translateZ($sqSize*$h);
        }
          &.front, &.back, &.left, &.right {
          &::before {
            background-color: #000;
            content: "";
            width: 100%;
            height: 100%;
          }
          }
        &.front, &.back {
          width: $sqSize * $w;
          height: $sqSize * $h;
            &::before {
                opacity: 0.2;
            }
        }
        &.front {
          transform: translateZ($sqSize * ($d - 1));
        }
        &.left, &.right {
          width: $sqSize * $d;
          height: $sqSize * $h;
            @if ($isBook == true) {
              &::before {
                  opacity: 0;
              }
            }
            @else {
            &::before {
              opacity: 0.4;
            }	
            }
        }
        &.right {
          transform: rotateY(-270deg) translate3d($sqSize, 0, $sqSize*($w - $d));
            transform-style: preserve-3d;
            @if ($isBook == true) {
                background-color: #fff;
                  &::after {
                  background-color: $c;
                  content: attr(data-title);
                }
            }
        }
        @if ($isBook == true) {
          $pgC: #aaa;
            &.top, &.back, &.bottom, {
                background: {
                    color: #fff;
              image: repeating-linear-gradient(90deg,transparent, transparent 21%, $pgC 21%, $pgC 25%, transparent 25%, transparent 46%, $pgC 46%, $pgC 50%, transparent 50%);
              size: $sqSize $sqSize;
            };
            }
        }

      }
    }

    :root {
        font-size: 20px;
    }
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body, input {
      // font-family: "Hind", sans-serif;
      font-size: 1em;
    }
    input {
        position: absolute;
    }
    input[type=radio] {
        top: -20px;
        left: -20px;
        &:checked ~ input[type=reset] {
            visibility: visible;
        }
    }
    input[type=reset] {
        background-color: $btnColor;
        border: 0;
        border-radius: 0;
        color: #fff;
        padding: 0.5em 0.75em;
        bottom: 5%;
        left: 50%;
        visibility: hidden;
        transform: translateX(-50%);
        transition: background-color 0.2s;
        -webkit-appearance: none;
        appearance: none;
        &:hover, &:focus {
            background-color: lighten($btnColor,0.2);
        }
        &:active {
            background-color: darken($btnColor,0.2);
        }
    }
    .container {
      animation: fadeIn $trans $trans linear forwards;
      display: flex;
      margin: auto;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: $contW;
      height: $contH;
      perspective: 800px;
      transform-style: preserve-3d;
    }
    .surface {
      //@include grid(#888, $sqSize);
      display: block;
      width: $sqSize * $xSpaces;
      height: $sqSize * $ySpaces;
      margin: auto;
      transform-style: preserve-3d;
      transform: translateY($sqSize * $zSpaces/2) rotateX($xAngle) rotateZ($zAngle);
      transition: transform $trans;
      will-change: transform;
    }
    .block {
      display: none;
      transform-style: preserve-3d;
      position: absolute;
      bottom: 0;
    }
    .block-inner div {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      position: absolute;
      width: $sqSize;
      height: $sqSize;
    }
    .block-inner {
      position: relative;
      width: $sqSize;
      transition: transform $trans linear;
      transform-style: preserve-3d;
      transform: rotateX(-90deg) translateZ($sqSize);
    }
    .back {
      transform: translateZ(-$sqSize) rotateY(180deg);
    }
    .left {
      transform-origin: center left;
      transform: rotateY(270deg) translateX(-$sqSize);
    }
    .right {
      transform-origin: top right;
      &::after, div {
        top: 0;
        left: 0;
        transform-origin: 0 50%;
        transition: transform $trans $trans linear;
      }
      &::after {
          backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        color: #fff;
          font-size: $rFontSize;
          line-height: $rFontSize;
        text-align: center;
        padding: 20% 5%;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
      }
      div {
        width: 100%;
        height: 100%;
      }
    }
    .top, .bottom {
      transform-origin: top center;
    }
    .spine, .right::after, .contents h1 {
      font: {
          // family: "Lora", serif;
          // weight: bold;
      };
      -webkit-font-smoothing: antialiased;
    }
    .spine {
      background: transparent;
      color: #ccc;
      font-size: $fFontSize;
      line-height: $fFontSize;
      top: 0;
      left: 0;
      transform: rotate(90deg) translate($sqSize*0.75,-50%);
      white-space: nowrap;
      width: 0;
      height: $sqSize;
    }
    .cover {
        background-color: #fff;
        z-index: 1;
    }
    .contents {
        font-size: $cntntFontSize;
        padding: $sqSize;
        h1 {
            font-size: 2em;
        }
        p {
            // font-family: "Source Sans Pro", sans-serif;
        }
    }

    // * Render blocks *
    // one block only
    @if length(nth($blocks,1)) == 1 {
      .b1 {
          @include placeBlock(
            nth($blocks, 1),
            nth($blocks, 2),
            nth($blocks, 3),
            nth($blocks, 4),
            nth($blocks, 5),
            nth($blocks, 6),
            nth($blocks, 7),
            nth($blocks, 8)
          );
        }
    }
    // more than one block
    @else {
      @for $b from 1 through length($blocks) {
        .b#{$b} {
          @include placeBlock(
            nth(nth($blocks, $b), 1),
            nth(nth($blocks, $b), 2),
            nth(nth($blocks, $b), 3),
            nth(nth($blocks, $b), 4),
            nth(nth($blocks, $b), 5),
            nth(nth($blocks, $b), 6),
            nth(nth($blocks, $b), 7),
            nth(nth($blocks, $b), 8)
          );
        }
      }
    }

    /* Book Viewing */
    label:nth-child(n+#{$bookStart}):nth-child(-n+#{$bookStart + $books}):hover .block-inner {
        transform: rotateX(-100deg) translateZ($sqSize*7) translateY($sqSize*-3);
    }
    @for $i from 1 through $books {
        //Regresa el libro no el cover
        input[type=radio]:nth-child(#{$i}) ~ .surface {
            label:nth-child(#{$i + $bookStart - 1}) .block-inner {
                animation: returnBook $trans linear backwards;
            }
        }
        //Abre el libro
        input[type=radio]:nth-child(#{$i}):checked ~ .surface {
            //Corre la camara
            transform: translate(50% - (0% + ((2/$xSpaces) * 100) * $i),$sqSize * $zSpaces/2) rotateX($xAngle) rotateZ($zAngle);
            //Abre el libro
            label:nth-child(#{$i + $bookStart - 1}) .block-inner {
                animation: viewBook $trans $trans linear forwards;
                // & { //Se quita hover para abrir de una vez
                &:hover {
                    .right::after, .cover {
                        transform: rotateY(-135deg);
                    }
                }
            }
        }
    }

    @keyframes fadeIn {
        from {opacity: 0;}
        to {opacity: 1;}
    }
    @keyframes viewBook {
        from {transform: rotateX(-90deg) translateZ($sqSize*4) rotateY(0);}
        50% {transform: rotateX(-90deg) translateZ($sqSize*15) rotateY(0);}
        to {transform: rotateX(-90deg) translateZ($sqSize*15) rotateY(-90deg) rotateZ(-90deg + $xAngle) translateZ($sqSize*-5);}
    }
    @keyframes returnBook {
        from {transform: rotateX(-90deg) translateZ($sqSize*15) rotateY(-90deg) rotateZ(-90deg + $xAngle) translateZ($sqSize*-5);}
        50% {transform: rotateX(-90deg) translateZ($sqSize*15) rotateY(0);}
        to {transform: rotateX(-90deg) translateZ($sqSize) rotateY(0);}
    }
  }
  </style>

<style lang="scss" scoped>
  @media (max-width: 990px) {
    $sqSize: 16px;
    $contW: 100%;
    $contH: 100%;
    $xSpaces: 25;
    $ySpaces: 14;
    $zSpaces: 15;
    $xAngle: 80deg;
    $zAngle: 0deg;
    $books: 7;
    $bookStart: 1;
    $trans: 0.3s;

    // font sizing
    $fFontSize: $sqSize*1; //Lomo
    $rFontSize: $sqSize*1.5; //Covert
    $cntntFontSize: $sqSize*0.7; //Content

    // non-book colors
    $btnColor: #c22;
    $shelfColor: #222;

    /* Block placement */
    // parameters: x-pos,y-pos,z-pos, width, depth, height, color, is-book
    $blocks:
      // books
      // (2,3,2, 2,11,14, #c00000, true),
      // (4,3,2, 2,11,14, #891a21, true),
      (4,3,2, 2,11,14, #d53613, true),
      (6.5,3,2, 2,11,14, #5a5b5b, true),
      (9,3,2, 2,11,14, #0e4326, true),
      (11.5,3,2, 2,11,14, #0066cc, true),
      (14,3,2, 2,11,14, #222222, true),
      (16.5,3,2, 2,11,14, #ffa600, true),
      (19,3,2, 2,10,14, #221b59, true),
      // (20,3,2, 2,10,14, #443344, true),
      // (22,3,2, 2,10,14, #666777, true)
      ;

    @mixin placeBlock($x, $y, $z, $w, $d, $h, $c, $isBook) {
      display: block;
      transform: translate3d(
        $sqSize*($x - 1),
        $sqSize*(-$y - ($d - 1)),
        ($sqSize*$z) + ($sqSize*($h - 1))
      );
      .block-inner > div {
        background-color: $c;
          &.top, &.bottom {
          width: $sqSize * $w;
          height: $sqSize * $d;
        }
        &.top  {
          transform: rotateX(-90deg) translateY(-$sqSize*($d - 1));
        }
        &.bottom {
          transform: rotateX(-90deg) translateY(-$sqSize*($d - 1)) translateZ($sqSize*$h);
        }
          &.front, &.back, &.left, &.right {
          &::before {
            background-color: #000;
            content: "";
            width: 100%;
            height: 100%;
          }
          }
        &.front, &.back {
          width: $sqSize * $w;
          height: $sqSize * $h;
            &::before {
                opacity: 0.2;
            }
        }
        &.front {
          transform: translateZ($sqSize * ($d - 1));
        }
        &.left, &.right {
          width: $sqSize * $d;
          height: $sqSize * $h;
            @if ($isBook == true) {
              &::before {
                  opacity: 0;
              }
            }
            @else {
            &::before {
              opacity: 0.4;
            }	
            }
        }
        &.right {
          transform: rotateY(-270deg) translate3d($sqSize, 0, $sqSize*($w - $d));
            transform-style: preserve-3d;
            @if ($isBook == true) {
                background-color: #fff;
                  &::after {
                  background-color: $c;
                  content: attr(data-title);
                }
            }
        }
        @if ($isBook == true) {
          $pgC: #aaa;
            &.top, &.back, &.bottom, {
                background: {
                    color: #fff;
              image: repeating-linear-gradient(90deg,transparent, transparent 21%, $pgC 21%, $pgC 25%, transparent 25%, transparent 46%, $pgC 46%, $pgC 50%, transparent 50%);
              size: $sqSize $sqSize;
            };
            }
        }

      }
    }

    :root {
        font-size: 20px;
    }
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body, input {
      // font-family: "Hind", sans-serif;
      font-size: 1em;
    }
    input {
        position: absolute;
    }
    input[type=radio] {
        top: -20px;
        left: -20px;
        &:checked ~ input[type=reset] {
            visibility: visible;
        }
    }
    input[type=reset] {
        background-color: $btnColor;
        border: 0;
        border-radius: 0;
        color: #fff;
        padding: 0.5em 0.75em;
        bottom: 5%;
        left: 50%;
        visibility: hidden;
        transform: translateX(-50%);
        transition: background-color 0.2s;
        -webkit-appearance: none;
        appearance: none;
        &:hover, &:focus {
            background-color: lighten($btnColor,0.2);
        }
        &:active {
            background-color: darken($btnColor,0.2);
        }
    }
    .container {
      animation: fadeIn $trans $trans linear forwards;
      display: flex;
      margin: auto;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: $contW;
      height: $contH;
      perspective: 800px;
      transform-style: preserve-3d;
    }
    .surface {
      //@include grid(#888, $sqSize);
      display: block;
      width: $sqSize * $xSpaces;
      height: $sqSize * $ySpaces;
      margin: auto;
      transform-style: preserve-3d;
      transform: translateY($sqSize * $zSpaces/2) rotateX($xAngle) rotateZ($zAngle);
      transition: transform $trans;
      will-change: transform;
    }
    .block {
      display: none;
      transform-style: preserve-3d;
      position: absolute;
      bottom: 0;
    }
    .block-inner div {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      position: absolute;
      width: $sqSize;
      height: $sqSize;
    }
    .block-inner {
      position: relative;
      width: $sqSize;
      transition: transform $trans linear;
      transform-style: preserve-3d;
      transform: rotateX(-90deg) translateZ($sqSize);
    }
    .back {
      transform: translateZ(-$sqSize) rotateY(180deg);
    }
    .left {
      transform-origin: center left;
      transform: rotateY(270deg) translateX(-$sqSize);
    }
    .right {
      transform-origin: top right;
      &::after, div {
        top: 0;
        left: 0;
        transform-origin: 0 50%;
        transition: transform $trans $trans linear;
      }
      &::after {
          backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        color: #fff;
          font-size: $rFontSize;
          line-height: $rFontSize;
        text-align: center;
        padding: 20% 5%;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
      }
      div {
        width: 100%;
        height: 100%;
      }
    }
    .top, .bottom {
      transform-origin: top center;
    }
    .spine, .right::after, .contents h1 {
      font: {
          // family: "Lora", serif;
          // weight: bold;
      };
      -webkit-font-smoothing: antialiased;
    }
    .spine {
      background: transparent;
      color: #ccc;
      font-size: $fFontSize;
      line-height: $fFontSize;
      top: 0;
      left: 0;
      transform: rotate(90deg) translate($sqSize*0.75,-50%);
      white-space: nowrap;
      width: 0;
      height: $sqSize;
    }
    .cover {
        background-color: #fff;
        z-index: 1;
    }
    .contents {
        font-size: $cntntFontSize;
        padding: $sqSize;
        h1 {
            font-size: 2em;
        }
        p {
            // font-family: "Source Sans Pro", sans-serif;
        }
    }

    // * Render blocks *
    // one block only
    @if length(nth($blocks,1)) == 1 {
      .b1 {
          @include placeBlock(
            nth($blocks, 1),
            nth($blocks, 2),
            nth($blocks, 3),
            nth($blocks, 4),
            nth($blocks, 5),
            nth($blocks, 6),
            nth($blocks, 7),
            nth($blocks, 8)
          );
        }
    }
    // more than one block
    @else {
      @for $b from 1 through length($blocks) {
        .b#{$b} {
          @include placeBlock(
            nth(nth($blocks, $b), 1),
            nth(nth($blocks, $b), 2),
            nth(nth($blocks, $b), 3),
            nth(nth($blocks, $b), 4),
            nth(nth($blocks, $b), 5),
            nth(nth($blocks, $b), 6),
            nth(nth($blocks, $b), 7),
            nth(nth($blocks, $b), 8)
          );
        }
      }
    }

    /* Book Viewing */
    label:nth-child(n+#{$bookStart}):nth-child(-n+#{$bookStart + $books}):hover .block-inner {
        transform: rotateX(-100deg) translateZ($sqSize*7) translateY($sqSize*-3);
    }
    @for $i from 1 through $books {
        //Regresa el libro no el cover
        input[type=radio]:nth-child(#{$i}) ~ .surface {
            label:nth-child(#{$i + $bookStart - 1}) .block-inner {
                animation: returnBook $trans linear backwards;
            }
        }
        //Abre el libro
        input[type=radio]:nth-child(#{$i}):checked ~ .surface {
            //Corre la camara
            transform: translate(50% - (0% + ((2/$xSpaces) * 100) * $i),$sqSize * $zSpaces/2) rotateX($xAngle) rotateZ($zAngle);
            //Abre el libro
            label:nth-child(#{$i + $bookStart - 1}) .block-inner {
                animation: viewBook $trans $trans linear forwards;
                // & { //Se quita hover para abrir de una vez
                &:hover {
                    .right::after, .cover {
                        transform: rotateY(-135deg);
                    }
                }
            }
        }
    }

    @keyframes fadeIn {
        from {opacity: 0;}
        to {opacity: 1;}
    }
    @keyframes viewBook {
        from {transform: rotateX(-90deg) translateZ($sqSize*4) rotateY(0);}
        50% {transform: rotateX(-90deg) translateZ($sqSize*15) rotateY(0);}
        to {transform: rotateX(-90deg) translateZ($sqSize*15) rotateY(-90deg) rotateZ(-90deg + $xAngle) translateZ($sqSize*-5);}
    }
    @keyframes returnBook {
        from {transform: rotateX(-90deg) translateZ($sqSize*15) rotateY(-90deg) rotateZ(-90deg + $xAngle) translateZ($sqSize*-5);}
        50% {transform: rotateX(-90deg) translateZ($sqSize*15) rotateY(0);}
        to {transform: rotateX(-90deg) translateZ($sqSize) rotateY(0);}
    }
  }
</style>

<style lang="scss" scoped>
  @media (max-width: 330px) {
    $sqSize: 13.5px;
    $contW: 100%;
    $contH: 100%;
    $xSpaces: 25;
    $ySpaces: 14;
    $zSpaces: 15;
    $xAngle: 80deg;
    $zAngle: 0deg;
    $books: 7;
    $bookStart: 1;
    $trans: 0.3s;

    // font sizing
    $fFontSize: $sqSize*1; //Lomo
    $rFontSize: $sqSize*1.5; //Covert
    $cntntFontSize: $sqSize*0.7; //Content

    // non-book colors
    $btnColor: #c22;
    $shelfColor: #222;

    /* Block placement */
    // parameters: x-pos,y-pos,z-pos, width, depth, height, color, is-book
    $blocks:
      // books
      // (2,3,2, 2,11,14, #c00000, true),
      // (4,3,2, 2,11,14, #891a21, true),
      (4,3,2, 2,11,14, #d53613, true),
      (6.5,3,2, 2,11,14, #5a5b5b, true),
      (9,3,2, 2,11,14, #0e4326, true),
      (11.5,3,2, 2,11,14, #0066cc, true),
      (14,3,2, 2,11,14, #222222, true),
      (16.5,3,2, 2,11,14, #ffa600, true),
      (19,3,2, 2,10,14, #221b59, true),
      // (20,3,2, 2,10,14, #443344, true),
      // (22,3,2, 2,10,14, #666777, true)
      ;

    @mixin placeBlock($x, $y, $z, $w, $d, $h, $c, $isBook) {
      display: block;
      transform: translate3d(
        $sqSize*($x - 1),
        $sqSize*(-$y - ($d - 1)),
        ($sqSize*$z) + ($sqSize*($h - 1))
      );
      .block-inner > div {
        background-color: $c;
          &.top, &.bottom {
          width: $sqSize * $w;
          height: $sqSize * $d;
        }
        &.top  {
          transform: rotateX(-90deg) translateY(-$sqSize*($d - 1));
        }
        &.bottom {
          transform: rotateX(-90deg) translateY(-$sqSize*($d - 1)) translateZ($sqSize*$h);
        }
          &.front, &.back, &.left, &.right {
          &::before {
            background-color: #000;
            content: "";
            width: 100%;
            height: 100%;
          }
          }
        &.front, &.back {
          width: $sqSize * $w;
          height: $sqSize * $h;
            &::before {
                opacity: 0.2;
            }
        }
        &.front {
          transform: translateZ($sqSize * ($d - 1));
        }
        &.left, &.right {
          width: $sqSize * $d;
          height: $sqSize * $h;
            @if ($isBook == true) {
              &::before {
                  opacity: 0;
              }
            }
            @else {
            &::before {
              opacity: 0.4;
            }	
            }
        }
        &.right {
          transform: rotateY(-270deg) translate3d($sqSize, 0, $sqSize*($w - $d));
            transform-style: preserve-3d;
            @if ($isBook == true) {
                background-color: #fff;
                  &::after {
                  background-color: $c;
                  content: attr(data-title);
                }
            }
        }
        @if ($isBook == true) {
          $pgC: #aaa;
            &.top, &.back, &.bottom, {
                background: {
                    color: #fff;
              image: repeating-linear-gradient(90deg,transparent, transparent 21%, $pgC 21%, $pgC 25%, transparent 25%, transparent 46%, $pgC 46%, $pgC 50%, transparent 50%);
              size: $sqSize $sqSize;
            };
            }
        }

      }
    }

    :root {
        font-size: 20px;
    }
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body, input {
      // font-family: "Hind", sans-serif;
      font-size: 1em;
    }
    input {
        position: absolute;
    }
    input[type=radio] {
        top: -20px;
        left: -20px;
        &:checked ~ input[type=reset] {
            visibility: visible;
        }
    }
    input[type=reset] {
        background-color: $btnColor;
        border: 0;
        border-radius: 0;
        color: #fff;
        padding: 0.5em 0.75em;
        bottom: 5%;
        left: 50%;
        visibility: hidden;
        transform: translateX(-50%);
        transition: background-color 0.2s;
        -webkit-appearance: none;
        appearance: none;
        &:hover, &:focus {
            background-color: lighten($btnColor,0.2);
        }
        &:active {
            background-color: darken($btnColor,0.2);
        }
    }
    .container {
      animation: fadeIn $trans $trans linear forwards;
      display: flex;
      margin: auto;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: $contW;
      height: $contH;
      perspective: 800px;
      transform-style: preserve-3d;
    }
    .surface {
      //@include grid(#888, $sqSize);
      display: block;
      width: $sqSize * $xSpaces;
      height: $sqSize * $ySpaces;
      margin: auto;
      transform-style: preserve-3d;
      transform: translateY($sqSize * $zSpaces/2) rotateX($xAngle) rotateZ($zAngle);
      transition: transform $trans;
      will-change: transform;
    }
    .block {
      display: none;
      transform-style: preserve-3d;
      position: absolute;
      bottom: 0;
    }
    .block-inner div {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      position: absolute;
      width: $sqSize;
      height: $sqSize;
    }
    .block-inner {
      position: relative;
      width: $sqSize;
      transition: transform $trans linear;
      transform-style: preserve-3d;
      transform: rotateX(-90deg) translateZ($sqSize);
    }
    .back {
      transform: translateZ(-$sqSize) rotateY(180deg);
    }
    .left {
      transform-origin: center left;
      transform: rotateY(270deg) translateX(-$sqSize);
    }
    .right {
      transform-origin: top right;
      &::after, div {
        top: 0;
        left: 0;
        transform-origin: 0 50%;
        transition: transform $trans $trans linear;
      }
      &::after {
          backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        color: #fff;
          font-size: $rFontSize;
          line-height: $rFontSize;
        text-align: center;
        padding: 20% 5%;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
      }
      div {
        width: 100%;
        height: 100%;
      }
    }
    .top, .bottom {
      transform-origin: top center;
    }
    .spine, .right::after, .contents h1 {
      font: {
          // family: "Lora", serif;
          // weight: bold;
      };
      -webkit-font-smoothing: antialiased;
    }
    .spine {
      background: transparent;
      color: #ccc;
      font-size: $fFontSize;
      line-height: $fFontSize;
      top: 0;
      left: 0;
      transform: rotate(90deg) translate($sqSize*0.75,-50%);
      white-space: nowrap;
      width: 0;
      height: $sqSize;
    }
    .cover {
        background-color: #fff;
        z-index: 1;
    }
    .contents {
        font-size: $cntntFontSize;
        padding: $sqSize;
        h1 {
            font-size: 2em;
        }
        p {
            // font-family: "Source Sans Pro", sans-serif;
        }
    }

    // * Render blocks *
    // one block only
    @if length(nth($blocks,1)) == 1 {
      .b1 {
          @include placeBlock(
            nth($blocks, 1),
            nth($blocks, 2),
            nth($blocks, 3),
            nth($blocks, 4),
            nth($blocks, 5),
            nth($blocks, 6),
            nth($blocks, 7),
            nth($blocks, 8)
          );
        }
    }
    // more than one block
    @else {
      @for $b from 1 through length($blocks) {
        .b#{$b} {
          @include placeBlock(
            nth(nth($blocks, $b), 1),
            nth(nth($blocks, $b), 2),
            nth(nth($blocks, $b), 3),
            nth(nth($blocks, $b), 4),
            nth(nth($blocks, $b), 5),
            nth(nth($blocks, $b), 6),
            nth(nth($blocks, $b), 7),
            nth(nth($blocks, $b), 8)
          );
        }
      }
    }

    /* Book Viewing */
    label:nth-child(n+#{$bookStart}):nth-child(-n+#{$bookStart + $books}):hover .block-inner {
        transform: rotateX(-100deg) translateZ($sqSize*7) translateY($sqSize*-3);
    }
    @for $i from 1 through $books {
        //Regresa el libro no el cover
        input[type=radio]:nth-child(#{$i}) ~ .surface {
            label:nth-child(#{$i + $bookStart - 1}) .block-inner {
                animation: returnBook $trans linear backwards;
            }
        }
        //Abre el libro
        input[type=radio]:nth-child(#{$i}):checked ~ .surface {
            //Corre la camara
            transform: translate(50% - (0% + ((2/$xSpaces) * 100) * $i),$sqSize * $zSpaces/2) rotateX($xAngle) rotateZ($zAngle);
            //Abre el libro
            label:nth-child(#{$i + $bookStart - 1}) .block-inner {
                animation: viewBook $trans $trans linear forwards;
                // & { //Se quita hover para abrir de una vez
                &:hover {
                    .right::after, .cover {
                        transform: rotateY(-135deg);
                    }
                }
            }
        }
    }

    @keyframes fadeIn {
        from {opacity: 0;}
        to {opacity: 1;}
    }
    @keyframes viewBook {
        from {transform: rotateX(-90deg) translateZ($sqSize*4) rotateY(0);}
        50% {transform: rotateX(-90deg) translateZ($sqSize*15) rotateY(0);}
        to {transform: rotateX(-90deg) translateZ($sqSize*15) rotateY(-90deg) rotateZ(-90deg + $xAngle) translateZ($sqSize*-5);}
    }
    @keyframes returnBook {
        from {transform: rotateX(-90deg) translateZ($sqSize*15) rotateY(-90deg) rotateZ(-90deg + $xAngle) translateZ($sqSize*-5);}
        50% {transform: rotateX(-90deg) translateZ($sqSize*15) rotateY(0);}
        to {transform: rotateX(-90deg) translateZ($sqSize) rotateY(0);}
    }
  }
</style>