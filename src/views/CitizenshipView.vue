<template>
  <div class="context">
  <!-- <div class="context">
    <div class="argumento-section">
      <h2>BIENVENIDOS A NUESTRA PAGINA WEB</h2>
      <p><span class="italic">Parole In Lingua Italiana</span> es una joven y pequeña realidad con la cual queremos ayudar en el conocimiento de la lengua italiana y su cultura. </p> 
      <p>Hemos acompañado y mediado a más de 2000 personas en su trayectoria y pasaje de la lengua nativa al idioma italiano; además de la preparación para la certificación oficial como competencia de la lengua italiana. </p>
      <p>Te invitamos a interactuar con el menú de la derecha para entrar más en detalle con lo que te interesa. Exámenes, Cursos, Consejos, etc. </p>
    </div>
  </div> -->
  <div class="scene">
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
              <h3><strong>EXAMEN DE CIUDADANÍA ITALIANA</strong></h3>
              <h6>por <a href="/">PAROLE IN LINGUA ITALIANA</a> (ESPAÑOL)</h6>
              <p></p>
              <p>A partir del 4 de diciembre del año 2018 se introdujo el articulo 9.1 a la Ley No. 91 del 5 de 
                febrero de 1992 en la cual se establecen los requisitos para la adquisición de la ciudadanía italiana.</p>
              <br/>
              <p>La <span class="text-bold">certificación de ciudadanía italiana</span> se realiza a través de 
                cuatro <span class="text-bold">(4) pruebas:</span> una prueba escrita, una oral, una de escucha y 
                una de comprensión de lectura y gramática incluida.</p>
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
            <a class="marcadores lib-1 text-bold" href="/about">Chi_siamo</a>
            <br/><br/><br/>
            <a class="marcadores lib-2 text-bold" href="/certification">Certificazione</a>
            <br/><br/><br/>
            <a class="marcadores lib-3 text-bold" href="/citizenship">Cittadinanza</a>
            <br/><br/><br/>
            <a class="marcadores lib-4 text-bold" href="/qcer">QCER</a>
            <br/><br/><br/>
            <a class="marcadores lib-5 text-bold" href="/advice">Consulenza</a>
            <br/><br/><br/>
            <a class="marcadores lib-6 text-bold" href="/levels">Livelli</a>
            <br/><br/><br/>
            <a class="marcadores lib-7 text-bold" href="/courses">Corsi</a>
            <br/><br/><br/><br/><br/><br/><br/>
            <a class="marcadores lib-0 text-bold" href="/">HOME</a>
          </p>
        </div>
        <div class="layer-text right">
          <div class="page-right-2">
            <div class="page-text w-richtext">
              <h3><strong>ESAME CITTADINANZA ITALIANA</strong></h3>
              <h6>da <a href="/">PAROLE IN LINGUA ITALIANA</a> (ITALIANO) </h6>
              <p></p>
              <p>Dal 4 dicembre 2018 si è stabilito l'art. 9.1 alla legge 5 febbraio 1992 sui 
                requisiti per l'acquisizione della cittadinanza italiana.</p>
              <br/>
              <p><span class="text-bold">La certificazione della cittadinanza</span> italiana si 
                effettua attraverso quattro <span class="text-bold">(4) prove:</span> una prova 
                scritta, una prova orale, una prova di ascolto e una prova di comprensione del 
                testo che include la grammatica.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: "CitizenshipView",
  };
</script>

<style scoped>
  .context{
    padding: 0px 50px;
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
  background-color: #0e4326;
  box-shadow: inset 4px -4px 4px 1px #0e4326, inset 7px -7px 4px 0 #0e4326;
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
  background-color: #0e4326;
  box-shadow: inset -4px -4px 4px 1px #0e4326, inset -7px -7px 4px 0 #0e4326;
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

@media (max-width: 991px) {
  .scene {
    height: 56vw;
  }
  .book-wrap {
    width: 62vw;
  }
  .page-left-2 {
    border-top-left-radius: 20%;
  }
  .corner-fold {
    left: 0%;
    top: -1%;
    width: 3.5vw;
    height: 3.5vw;
    max-height: 35px;
    background-image: -webkit-linear-gradient(315deg, transparent 50%, #f0f0f0 51%, #fff 52%, #f6f6f6);
    background-image: linear-gradient(135deg, transparent 50%, #f0f0f0 51%, #fff 52%, #f6f6f6);
  }
  .corner {
    top: 8%;
  }
  .page-text h3 {
    margin-top: 2vw;
    margin-bottom: 1vw;
    font-size: 3vw;
  }
  .page-text h6 {
    margin-top: 1vw;
    margin-bottom: 1vw;
    font-size: 1vw;
  }
  .page-right-2 {
    padding-left: 9%;
  }
}

@media (max-width: 767px) {
  .book-wrap {
    width: 80vw;
    margin-bottom: 2vw;
  }
  .layer-text {
    width: 94%;
    -webkit-transform: translate3d(0px, 0px, 20px);
    transform: translate3d(0px, 0px, 20px);
  }
  .layer-text.right {
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-transform: translate3d(-34px, 0px, 24px);
    transform: translate3d(-34px, 0px, 24px);
  }
  .page-left-2 {
    border-top-left-radius: 23%;
    -webkit-transform: rotateX(0deg) rotateY(17deg) rotateZ(0deg) translate(9px, 0px);
    transform: rotateX(0deg) rotateY(17deg) rotateZ(0deg) translate(9px, 0px);
  }
  .corner-fold {
    width: 4.5vw;
    height: 4.5vw;
    max-height: 29px;
    min-width: 29px;
    background-image: -webkit-linear-gradient(310deg, transparent 48%, #f0f0f0 49%, #fff 50%, #f6f6f6);
    background-image: linear-gradient(140deg, transparent 48%, #f0f0f0 49%, #fff 50%, #f6f6f6);
  }
  .page-text {
    margin-top: 2vw;
  }
  .page-text h3 {
    margin-top: 0vw;
    font-size: 3vw;
  }
  .layer2 {
    -webkit-transform: translate3d(2px, 0px, 6px);
    transform: translate3d(2px, 0px, 6px);
  }
  .layer2.right {
    -webkit-transform: translate3d(-5px, 0px, 6px);
    transform: translate3d(-5px, 0px, 6px);
  }
  .layer3 {
    -webkit-transform: translate3d(4px, 0px, 12px);
    transform: translate3d(4px, 0px, 12px);
  }
  .layer3.right {
    -webkit-transform: translate3d(-10px, 0px, 12px);
    transform: translate3d(-10px, 0px, 12px);
  }
  .layer4 {
    -webkit-transform: translate3d(6px, 0px, 18px);
    transform: translate3d(6px, 0px, 18px);
  }
  .layer4.right {
    -webkit-transform: translate3d(-15px, 0px, 18px);
    transform: translate3d(-15px, 0px, 18px);
  }
  .page-right-2 {
    width: 92%;
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
  }
}

@media (max-width: 479px) {
  .scene {
    height: 69vw;
  }
  .corner-fold {
    width: 5.5vw;
    height: 5.5vw;
    min-width: 21px;
  }
}
</style>
