<template>
    <div id="introText">
        <van-row :gutter="[0, 13]" justify="center">
            <van-col span="11">
                <h2>BIENVENIDOS A NUESTRA PAGINA WEB</h2>
                <p><span class="text-bold">Parole In Lingua Italiana</span> es una joven y pequeña realidad a través de la cual ofrecemos el conocimiento de la lengua italiana y de su cultura.</p>
                <p>Hemos acompañado a más de 2000 personas, tanto en su trayectoria de aprendizaje del idioma, como, en la preparación para la certificación oficial.</p>
                <p>Para una mayor información te invitamos a explorar en nuestra biblioteca, los libros (exámenes, cursos, asesorías…).</p>
                Síguenos en <a target="_blank" href="https://www.instagram.com/parole.in.lingua.italiana/"><i class="fa-brands fa-instagram"></i></a>
                <br/><br/>
            </van-col>
        
            <van-col span="11" offset="1">
                <h2>BENVENUTI NELLA NOSTRA PAGINA WEB</h2>
                <p><span class="text-bold">Parole In Lingua Italiana</span> è una giovane e piccola realtà attraverso la quale offriamo la conoscenza della lingua italiana e della sua cultura.</p>
                <p>Abbiamo accompagnato più di 2.000 persone sia nel percorso di apprendimento linguistico, sia, nella preparazione alla certificazione ufficiale.</p>
                <p>Per un maggiore approfondimento, ti invitiamo a esplorare nella nostra biblioteca i libri (esami, corsi, consulenza, ecc.).</p>
                Seguiteci su <a target="_blank" href="https://www.instagram.com/parole.in.lingua.italiana/"><i class="fa-brands fa-instagram"></i></a>
                <br/><br/>
            </van-col>
        </van-row>
    </div>
</template>

<style scoped>
.italic {
    /* font-style: italic; */
    font-family: 'Eras Bold ITC', serif !important;
    font-weight: bold;
}

#introText {
    border: 1px solid rgb(0, 0, 0);
    border-radius: 5px;
    background-color: white;
    text-align: justify;
    padding: 0px 20px;
    widows: 100%;
}
</style>