<template>
    <div class="logo">
        <!-- <img class="logo" alt="Web Page logo" id="img" src="../assets/img/flag.png"> -->
        <div id="main">
            <section id="r1"></section>
            <section id="r2"></section>
            <section id="r3"></section>
            <section id="r4"></section>
            <section id="r5"></section>
            <section id="r6"></section>
            <section id="r7"></section>
        </div>
    </div>
</template>
  
<script>
  export default {
    name: "LogoView",
    // components: { Book },
    data() {
      return { len: 0, sections: null, current: null, counter: 0, i: 0 }
    },
    methods: {
        set_timing() {
            this.sections = $('section');
            this.len = this.sections.length;
            //console.log(this.len);
        },
        set_waving() {
            this.current = this.sections[this.counter];
            if(!this.current) {
                return;
            }
            if($(this.current).hasClass('active')) {
                $(this.current).removeClass('active');
            } else {
                $(this.current).addClass('active');
            }
            this.counter++;
            if(this.counter == this.len)
            this.counter = 0;
            setTimeout(this.set_waving, 50);
        }
    },
    mounted: function mounted () {
        this.set_timing();
        this.set_waving();
    }
  };
</script>
  
<style scoped>
.logo {
    text-align: center;
}
section {
    display: block;
    height: 25px;
    padding: 0 50px;
    width: 216px;

    background-repeat: no-repeat;

    transition-property: background-position;
    transition-duration: 2s;
}
.logo section {
    background-image: url('../assets/img/flag.png');
}

#r0 {
    background-position: 0 0;
}
#r1 {
    background-position: 0 0;
}
#r2 {
    background-position: 0 -25px;
}
#r3 {
    background-position: 0 -50px;
}
#r4 {
    background-position: 0 -75px;
}
#r5 {
    background-position: 0 -100px;
}
#r6 {
    background-position: 0 -125px;
}
#r7 {
    background-position: 0 -150px;
}

#r0.active {
    background-position: 0px 0;
}
#r1.active {
    background-position: 5px 0;
}
#r2.active {
    background-position: 5px -25px;
}
#r3.active {
    background-position: 5px -50px;
}
#r4.active {
    background-position: 5px -75px;
}
#r5.active {
    background-position: 5px -100px;
}
#r6.active {
    background-position: 5px -125px;
}
#r7.active {
    background-position: 5px -150px;
}
</style>