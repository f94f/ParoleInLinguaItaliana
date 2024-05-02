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
                <h3><strong v-html="argomenti['levels'].title_es"></strong></h3>
                <span v-html="argomenti['levels'].link_es"></span>
                <span v-html="argomenti['levels'].content_es"></span>
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
                <h3><strong v-html="argomenti['levels'].title_it"></strong></h3>
                <span v-html="argomenti['levels'].link_it"></span>
                <span v-html="argomenti['levels'].content_it"></span>
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
            <!-- <van-col span="1"><van-button :color="segnalibri['book_1'].color" @click="navigate(segnalibri['book_1'].link)">{{ segnalibri['book_1'].content_es }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_2'].color" @click="navigate(segnalibri['book_2'].link)">{{ segnalibri['book_2'].content_es }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_3'].color" @click="navigate(segnalibri['book_3'].link)">{{ segnalibri['book_3'].content_es }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_4'].color" @click="navigate(segnalibri['book_4'].link)">{{ segnalibri['book_4'].content_es }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_5'].color" @click="navigate(segnalibri['book_5'].link)">{{ segnalibri['book_5'].content_es }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_6'].color" @click="navigate(segnalibri['book_6'].link)">{{ segnalibri['book_6'].content_es }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_7'].color" @click="navigate(segnalibri['book_7'].link)">{{ segnalibri['book_7'].content_es }}</van-button></van-col> -->
            <van-col span="3"><van-button class="tooltip" :color="segnalibri['book_1'].color" @click="navigate(segnalibri['book_1'].link)"><i class="fa-solid fa-book"></i><span class="tooltiptext">{{ segnalibri['book_1'].content_es }}</span></van-button></van-col>
            <van-col span="3"><van-button class="tooltip" :color="segnalibri['book_2'].color" @click="navigate(segnalibri['book_2'].link)"><i class="fa-solid fa-book"></i><span class="tooltiptext">{{ segnalibri['book_2'].content_es }}</span></van-button></van-col>
            <van-col span="3"><van-button class="tooltip" :color="segnalibri['book_3'].color" @click="navigate(segnalibri['book_3'].link)"><i class="fa-solid fa-book"></i><span class="tooltiptext">{{ segnalibri['book_3'].content_es }}</span></van-button></van-col>
            <van-col span="3"><van-button class="tooltip" :color="segnalibri['book_4'].color" @click="navigate(segnalibri['book_4'].link)"><i class="fa-solid fa-book"></i><span class="tooltiptext">{{ segnalibri['book_4'].content_es }}</span></van-button></van-col>
            <van-col span="3"><van-button class="tooltip" :color="segnalibri['book_5'].color" @click="navigate(segnalibri['book_5'].link)"><i class="fa-solid fa-book"></i><span class="tooltiptext">{{ segnalibri['book_5'].content_es }}</span></van-button></van-col>
            <van-col span="3"><van-button class="tooltip" :color="segnalibri['book_6'].color" @click="navigate(segnalibri['book_6'].link)"><i class="fa-solid fa-book"></i><span class="tooltiptext">{{ segnalibri['book_6'].content_es }}</span></van-button></van-col>
            <van-col span="3"><van-button class="tooltip" :color="segnalibri['book_7'].color" @click="navigate(segnalibri['book_7'].link)"><i class="fa-solid fa-book"></i><span class="tooltiptext">{{ segnalibri['book_7'].content_es }}</span></van-button></van-col>
            <van-col span="3"><van-button type="default" @click="navigate(segnalibri['book_0'].link)"><i class="fa-solid fa-house-chimney"></i></van-button></van-col>
          </van-row>
          <br/>
          <div>
            <h3><strong v-html="argomenti['levels'].title_es"></strong></h3>
            <span v-html="argomenti['levels'].link_es"></span>
            <span v-html="argomenti['levels'].content_es"></span>
          </div>
        </div>
        <div v-else>
          <van-row justify="space-between">
            <!-- <van-col span="1"><van-button :color="segnalibri['book_1'].color" @click="navigate(segnalibri['book_1'].link)">{{ segnalibri['book_1'].content_it }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_2'].color" @click="navigate(segnalibri['book_2'].link)">{{ segnalibri['book_2'].content_it }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_3'].color" @click="navigate(segnalibri['book_3'].link)">{{ segnalibri['book_3'].content_it }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_4'].color" @click="navigate(segnalibri['book_4'].link)">{{ segnalibri['book_4'].content_it }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_5'].color" @click="navigate(segnalibri['book_5'].link)">{{ segnalibri['book_5'].content_it }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_6'].color" @click="navigate(segnalibri['book_6'].link)">{{ segnalibri['book_6'].content_it }}</van-button></van-col>
            <van-col span="1"><van-button :color="segnalibri['book_7'].color" @click="navigate(segnalibri['book_7'].link)">{{ segnalibri['book_7'].content_it }}</van-button></van-col> -->
            <van-col span="3"><van-button class="tooltip" :color="segnalibri['book_1'].color" @click="navigate(segnalibri['book_1'].link)"><i class="fa-solid fa-book"></i><span class="tooltiptext">{{ segnalibri['book_1'].content_it }}</span></van-button></van-col>
            <van-col span="3"><van-button class="tooltip" :color="segnalibri['book_2'].color" @click="navigate(segnalibri['book_2'].link)"><i class="fa-solid fa-book"></i><span class="tooltiptext">{{ segnalibri['book_2'].content_it }}</span></van-button></van-col>
            <van-col span="3"><van-button class="tooltip" :color="segnalibri['book_3'].color" @click="navigate(segnalibri['book_3'].link)"><i class="fa-solid fa-book"></i><span class="tooltiptext">{{ segnalibri['book_3'].content_it }}</span></van-button></van-col>
            <van-col span="3"><van-button class="tooltip" :color="segnalibri['book_4'].color" @click="navigate(segnalibri['book_4'].link)"><i class="fa-solid fa-book"></i><span class="tooltiptext">{{ segnalibri['book_4'].content_it }}</span></van-button></van-col>
            <van-col span="3"><van-button class="tooltip" :color="segnalibri['book_5'].color" @click="navigate(segnalibri['book_5'].link)"><i class="fa-solid fa-book"></i><span class="tooltiptext">{{ segnalibri['book_5'].content_it }}</span></van-button></van-col>
            <van-col span="3"><van-button class="tooltip" :color="segnalibri['book_6'].color" @click="navigate(segnalibri['book_6'].link)"><i class="fa-solid fa-book"></i><span class="tooltiptext">{{ segnalibri['book_6'].content_it }}</span></van-button></van-col>
            <van-col span="3"><van-button class="tooltip" :color="segnalibri['book_7'].color" @click="navigate(segnalibri['book_7'].link)"><i class="fa-solid fa-book"></i><span class="tooltiptext">{{ segnalibri['book_7'].content_it }}</span></van-button></van-col>
            <van-col span="3"><van-button type="default" @click="navigate(segnalibri['book_0'].link)"><i class="fa-solid fa-house-chimney"></i></van-button></van-col>
          </van-row>
          <br/>
          <div>
            <h3><strong v-html="argomenti['levels'].title_it"></strong></h3>
            <span v-html="argomenti['levels'].link_it"></span>
            <span v-html="argomenti['levels'].content_it"></span>
          </div>
        </div>
    </div>
    <br/>
    <div class="argumento-section">
        <!-- <van-switch v-model="checked" active-color="#ee0a24" inactive-color="#dcdee0" />QUADRO COMUNE EUROPEO DI RIFERIMENTO PER LE LINGUE (QCER) -->
      <van-tabs v-model:active="language" sticky>
        <van-tab title="ESPAÑOL"></van-tab>
        <van-tab title="ITALIANO"></van-tab>
      </van-tabs>
      <div class="argumento-table-section">
        <table>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">
                <span v-if="language==0" class="text-bold">ESCUCHA<br/>(Comprensión)</span>
                <span v-else class="text-bold">ASCOLTO<br/>(Comprensione)</span>
              </th>
              <th scope="col">
                <span v-if="language==0" class="text-bold">LECTURA<br/>(Comprensión)</span>
                <span v-else class="text-bold">LETTURA<br/>(Comprensione)</span>
              </th>
              <th scope="col">
                <span v-if="language==0" class="text-bold">ORAL<br/>(Interacción)</span>
                <span v-else class="text-bold">ORALE<br/>(Interazione)</span>
              </th>
              <th scope="col">
                <span v-if="language==0" class="text-bold">ORAL<br/>(Expresión)</span>
                <span v-else class="text-bold">ORALE<br/>(Espressione)</span>
              </th>
              <th scope="col">
                <span v-if="language==0" class="text-bold">ESCRITO<br/>(Producción - Gramática)</span>
                <span v-else class="text-bold">SCRITTO<br/>(Produzione/Grammatica)</span>
              </th>
            </tr>
          </thead>
          <!-- <tfoot>
            <tr>
              <td colspan="3"><a href="https://europa.eu/europass/it/common-european-framework-reference-language-skills" target="_blank">europa.eu</a></td>
            </tr>
          </tfoot> -->
          <tbody v-if="language==0">
            <tr>
              <th scope="row" class="text-bold">A1</th>
              <td>Reconoce palabras que le resultan familiares y usa expresiones muy simples que hacen referencia a sí mismo, a la familia, al medio ambiente, siempre y cuando le hablen lenta y claramente.</td>
              <td>Reconoce nombres y frases que le son familiares, por ejemplo, aquellas de anuncios, vayas, catálogos.</td>
              <td>Interactúa en la conversación siempre y cuando el interlocutor está dispuesto a repetir y sirve de apoyo para lo que está intentando decir. Pregunta y responde a temas que le son familiares o a necesidades inmediatas.</td>
              <td>Utiliza expresiones y oraciones simples para describir su familia, personas, lugares o situaciones de su entorno social.</td>
              <td>Escribe una postal breve y sencilla, por ejemplo, para enviar saludos por las vacaciones. Llena formularios con datos personales escribiendo en el formulario de registro, su nombre, nacionalidad y dirección.</td>
            </tr>
            <tr>
              <th scope="row" class="text-bold">A2</th>
              <td>Comprende lo esencial de mensajes y anuncios breves, sencillos y claros.</td>
              <td>Lee y comprende textos y cartas muy cortos y sencillos. Encuentra información detalla y predecible en menús, publicidad, horarios y otros.</td>
              <td>Intercambia información sobre temas y actividades frecuentes. Participa en conversaciones cortas, aunque si no siempre, logra mantener el diálogo.</td>
              <td>Narra brevemente la trama de un libro o de una película haciendo uso de expresiones simples y frases cortas.</td>
              <td>Toma apuntes y escribe mensajes sencillos relacionados con las necesidades inmediatas; escribe cartas personales cortas, por ejemplo, para demostrar agradecimiento a alguien.</td>
            </tr>
            <tr>
              <th scope="row" class="text-bold">B1</th>
              <td>Comprende los elementos principales de una conversación que trata con frecuencia sobre temas de actualidad o de interés personal o profesional, siempre que el diálogo sea lento y claro.</td>
              <td>Comprende y lee textos escritos de uso cotidiano, artículos y reportajes sobre temas de actualidad. Distingue la descripción contenida en cartas personales de acontecimientos, necesidades y demás sentimientos.</td>
              <td>Aborda situaciones y temas imprevistos en conversaciones de interés personal o del diario vivir, inclusive en los países donde se habla el idioma.</td>
              <td>Se expresa de manera clara y articulada en una amplia gama de temas que le son familiares. Explica brevemente los proyectos de vida. Relata la trama di un libro o di una película dando a conocer sus opiniones al respecto.</td>
              <td>Escribe textos simples y coherentes sobre temas que son de su interés. Escribe cartas personales comentando experiencias e impresiones.</td>
            </tr>
            <tr>
              <th scope="row" class="text-bold">B2</th>
              <td>Comprende discursos, transmisiones de radio, tv y conferencias de cierta duración. Sigue incluso argumentos complejos siempre que el tema le sea generalmente familiar.</td>
              <td>Lee tipos de ensayos de actualidad. Comprende un texto de tipo narrativo contemporáneo.</td>
              <td>Participa activamente a una discusión en entornos familiares, exponiendo su opinión. Se comunica e interactúa con espontaneidad y fluidez suficiente con el hablante nativo.</td>
              <td>Se expresa de forma clara y articulada sobre una amplia gama de temas que le interesan. Expresa una opinión sobre un tema de actualidad, indicando las ventajas y desventajas.</td>
              <td>Realiza textos claros y detallados sobre una amplia gama de temas que le interesan. Formula ensayos e informes, proporcionando información y razones a favor o en contra de una opinión particular. Escribe cartas destacando el significado que personalmente atribuye a sucesos y experiencias, destacando los aspectos más relevantes.</td>
            </tr>
            <tr>
              <th scope="row" class="text-bold">C1</th>
              <td>Entiende una conversación larga, aún si las ideas del discurso permanecen implícitas. Entiende la mayoría de los programas de televisión, noticieros y la mayoría de las películas sin mayor dificultad.</td>
              <td>Comprende lecturas de tipo literario largas y complejas y reconoce la diferencia de etilos. Entiende artículos especializados e instrucciones técnicas bastante largas, incluso cuando no son de su dominio.</td>
              <td>Utiliza el idioma con flexibilidad y eficacia sin necesidad de buscar demasiado en el vocabulario. Expresa sus opiniones y las conecta hábilmente con las de los demás interlocutores.</td>
              <td>Describe y articula temas complejos, integra temas secundarios concluyendo todo de manera coherente y clara.</td>
              <td>Escribe textos claros y bien estructurados, desarrollando analíticamente su punto de vista. Prepara cartas, ensayos e informes de temas complejos, destacando los puntos que considera importantes. Elige el estilo adecuado para los lectores a los que pretende dirigirse.</td>
            </tr>
            <tr>
              <th scope="row" class="text-bold">C2</th>
              <td>Entiende cualquier conversación inclusive la de un hablante nativo que pronuncie rápidamente siempre y cuando tenga tiempo para acostumbrarse al acento.</td>
              <td>Entiende prácticamente con facilidad todas las formas de lenguaje escrito incluyendo, textos teóricos, estructural o lingüísticamente complejos, como manuales, artículos especializados y obras literarias.</td>
              <td>Participa sin esfuerzo en cualquier conversación y discusión realizando con precisión matices sutiles de significado. Se encuentra familiarizado con expresiones idiomáticas y coloquialismos. Se expresa con fluidez y eficacia. Logra desenvolverse en situaciones de dificultad sin que nadie lo perciba.</td>
              <td>Describe o argumenta de manera clara y fluida, en un estilo apropiado al contexto y con una estructura lógica efectiva que ayuda al destinatario a identificar puntos relevantes para recordar. Adapta su lenguaje al estilo del momento y al del oyente.</td>
              <td>Realiza textos claros y fluidos con estilo. Escribe cartas, informes y artículos complejos. Mantiene el contenido con una estructura lógica eficaz que ayuda al destinatario a identificar los puntos más importantes a recordar. Escribe resúmenes y comentarios personales sobre obras literarias y textos especializados que animan a otra persona a comprarlos o leerlos.</td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <th scope="row" class="text-bold">A1</th>
              <td>Riesce a riconoscere parole familiari ed espressioni molto semplici riferite alla famiglia, al proprio ambiente o a sé stesso, purché le persone parlino lentamente e chiaramente.</td>
              <td>Capisce i nomi e le persone che gli sono familiari e frasi molto semplici, per esempio quelle di annunci, cartelloni, cataloghi.</td>
              <td>Riesce a interagire in modo semplice se l'interlocutore e disposto a ripetere o a riformulare più lentamente le richieste e lo aiuta a riformulare ciò che sta cercando di dire. Pone e risponde a domande semplici su argomenti molto familiari o che riguardano bisogni immediati.</td>
              <td>Riesce a usare espressioni e frasi semplici per descrivere il luogo dove abita e la famiglia e le persone dell'ambiente sociale che conosce.</td>
              <td>Compila moduli con dati personali scrivendo ad esempio il proprio nome, la nazionalità e l'indirizzo sulla scheda di registrazione. Scrive una breve e semplice cartolina, ad esempio per mandare i saluti delle vacanze.</td>
            </tr>
            <tr>
              <th scope="row" class="text-bold">A2</th>
              <td>Riesce ad afferrare l'essenziale di, espressioni che gli sono familiari, di messaggi, di informazioni, di annunci brevi, semplici e chiari.</td>
              <td>Legge testi molto brevi e semplici e trova informazioni specifiche e prevedibili in materiale di uso quotidiano, quali pubblicità, programmi, menù e orari. Riesce a capire lettere personali semplici e brevi.</td>
              <td>Riesce a comunicare affrontando uno scambio semplice e diretto di informazioni su argomenti e attività abituali. Partecipa a brevi conversazioni, anche se non sempre riesce a sostenere la conversazione.</td>
              <td>Racconta brevemente la trama di un libro o di un film utilizzando espressioni semplici e frasi brevi.</td>
              <td>Prende semplici appunti e scrive brevi messaggi su argomenti riguardanti bisogni immediati. Scrive una lettera personale semplice, ad esempio per ringraziare qualcuno.</td>
            </tr>
            <tr>
              <th scope="row" class="text-bold">B1</th>
              <td>Capisce gli elementi principali in una conversazione che affronta frequentemente su argomenti familiari, di attualità, di interesse proprio o professionale purché il discorso sia relativamente lento e chiaro.</td>
              <td>Capisce e legge testi scritti di uso corrente legati alla sfera quotidiana o al lavoro. Riesce a capire la descrizione di avvenimenti, di sentimenti e di desideri contenuta in lettere personali.</td>
              <td>Affronta situazioni e argomenti imprevisti, in conversazioni di interesse personale o di vita quotidiana, anche nei paesi in cui si parla la lingua.</td>
              <td>Si esprime in modo chiaro e articolato su un'ampia gamma di argomenti con cui ha familiarità. Spiega brevemente i progetti di vita. Racconta la trama di un libro o di un film, facendo conoscere le proprie opinioni in merito.</td>
              <td>Scrive testi semplici e coerenti su argomenti a esso noti o di proprio interesse. Scrive lettere personali esponendo esperienze e impressioni.</td>
            </tr>
            <tr>
              <th scope="row" class="text-bold">B2</th>
              <td>Capisce discorsi di una certa lunghezza e conferenze e a seguire argomentazioni anche complesse purché il tema gli sia relativamente familiare.</td>
              <td>Riesce a leggere articoli e relazioni su questioni d'attualità.  Comprende un testo narrativo contemporaneo.</td>
              <td>Riesce a comunicare con un grado di spontaneità e scioltezza sufficiente per interagire in modo normale con parlanti nativi. Partecipa attivamente a una discussione in contesti familiari, esponendo e sostenendo le proprie opinioni.</td>
              <td>Si esprime in modo chiaro e articolato su una vasta gamma di argomenti che gli interessano. Esprime un'opinione su un argomento d'attualità, indicando i vantaggi e gli svantaggi.</td>
              <td>Scrive testi chiari e dettagliati su un'ampia gamma di argomenti che a esso interessano. Formula saggi e relazioni, fornendo informazioni e ragioni a favore o contro una particolare opinione. Scrive lettere evidenziando il significato che personalmente attribuisci agli avvenimenti e alle esperienze, mettendo in evidenza gli aspetti più rilevanti.</td>
            </tr>
            <tr>
              <th scope="row" class="text-bold">C1</th>
              <td>Capisce un discorso lungo anche se non è chiaramente strutturato e le relazioni non vengono segnalate. Riesce a capire senza troppo sforzo le trasmissioni televisive e i film.</td>
              <td>Riesce a capire testi letterari e informativi lunghi e complessi e sa apprezzare le differenze di stile. Capisce articoli specialistici e istruzioni tecniche piuttosto lunghe.</td>
              <td>Usa la lingua in modo flessibile ed efficace senza cercare troppo le parole. Esprime le sue opinioni e le collega abilmente con quelle degli altri interlocutori.</td>
              <td>Fornisce descrizioni chiare e dettagliate su argomenti complessi, integrando temi secondari, sviluppando punti specifici e concludendo il tutto in modo appropriato.</td>
              <td>Scrive testi chiari e ben strutturati, sviluppando analiticamente il proprio punto di vista. Scrive lettere, saggi e relazioni, che spiegano argomenti complessi, evidenziando i punti a esso importanti. Sceglie lo stile adeguato per i lettori a cui intende rivolgersi.</td>
            </tr>
            <tr>
              <th scope="row" class="text-bold">C2</th>
              <td>Capisce qualsiasi lingua parlata, anche se il discorso è tenuto in modo veloce da una persona madrelingua, purché abbia il tempo di abituarsi all' accento.</td>
              <td>Capisce con facilità praticamente tutte le forme di lingua scritta inclusi; i teorici, strutturalmente o linguisticamente complessi, quali manuali, articoli specialistici e opere letterarie.</td>
              <td>Partecipa senza sforzi a qualsiasi conversazione e discussione ed usa le espressioni idiomatiche e colloquiali. Esprime con scioltezza e precisione sottili sfumature di significato. Quando serve, ritorna sul discorso e lo riformula al punto che difficilmente qualcuno se ne accorge.</td>
              <td>Descrive o argomenta in un modo chiaro, scorrevole, in uno stile adeguato al contesto e con una struttura logica efficace che aiutare il destinatario a identificare i punti importanti da rammentare. Adatta il suo linguaggio allo stile del momento e a quello di chi ascolta.</td>
              <td>Realizza testi chiari, scorrevoli e con stilo. Scrive lettere, relazioni e articoli complessi. Mantiene il contenuto con una struttura logica efficace che aiuta il destinatario a identificare i punti più significativi da ricordare. Realizza riassunti e commenti personali di opere letterarie e di testi specialisti attraverso i cui si invoglia qualcun altro a comprarlo o a leggerlo.</td>
            </tr>
          </tbody>
        </table>
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
    name: "LevelsView",
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
  *, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  table {
    max-width: 1560px;
    margin: 10px auto;
  }

  caption {
    font-size: 1.6em;
    font-weight: 400;
    padding: 10px 0;
  }

  thead th {
    font-weight: 400;
    background: #8a97a0;
    color: #FFF;
  }

  tr {
    background: #f4f7f8;
    border-bottom: 1px solid #FFF;
    margin-bottom: 5px;
  }

  tr:nth-child(even) {
    background: #e8eeef;
  }

  th, td {
    text-align: left;
    padding: 20px;
    font-weight: 300;
  }

  tfoot tr {
    background: none;
  }

  tfoot td {
    padding: 10px 2px;
    font-size: 0.8em;
    font-style: italic;
    color: #8a97a0;
  }
</style>

<style scoped>
  @media (max-width: 870px) {
    .argumento-table-section {
      overflow:auto
    }
  }

  @media (min-width: 1230px) {
    .argumento-section {
      max-width: 1230px;
      margin: auto;
      
    }
  }

  @media (max-width: 1230px) {
    .argumento-section {
      margin: 15px;
    }
  }

  @media (min-width: 1230px) {
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
      background-color: #ffa600;
      box-shadow: inset 4px -4px 4px 1px #ffa600, inset 7px -7px 4px 0 #ffa600;
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
      background-color: #ffa600;
      box-shadow: inset -4px -4px 4px 1px #ffa600, inset -7px -7px 4px 0 #ffa600;
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
