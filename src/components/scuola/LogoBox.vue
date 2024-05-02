<template>
    <div>
        <!-- <img class="logo" alt="Web Page logo" id="img" src="../../assets/piliLogo.png"> -->
        <div class="container">
            <div class="barrage" @click="navigateHome()">
                <img class="logo" alt="Web Page logo" id="img" src="../../assets/logo_simple.png">
            </div>
            <!-- <button type="button" class="btn" id="send" @click="sendRandomBarrage()">SEND</button> -->
        </div>
        <!-- <van-barrage v-model="list" ref="barrage" :auto-play="false">
            <div class="video" style="width: 100%; height: 150px"></div>
        </van-barrage>
        <van-space style="margin-top: 10px">
            <van-button @click="add" type="primary" size="small"> ADD </van-button>
        </van-space> -->
        <!-- <span class="floating-text">HOLA</span> -->
    </div>
</template>

<script>
    // import { ref } from 'vue'
    import parole from "@/assets/json/parole.json";

    export default {
        data() {
            return {
                list: parole,
                posizioni: [
                    { X: "51px", Y: "13px" }, 
                    { X: "308px", Y: "13px" },
                    { X: "549px", Y: "13px" },
                    { X: "972px", Y: "13px" },
                    { X: "1272px", Y: "13px" },
                    { X: "155px", Y: "142px" },
                    { X: "385px", Y: "142px" },
                    { X: "727px", Y: "142px" },
                    { X: "990px", Y: "142px" },
                    { X: "1332px", Y: "142px" },
                ]
            }
        },
        methods: {
            navigateHome() {
                this.$router.push({ path: '/' })
            },
            getY() {
                var ele =  document.getElementsByClassName("barrage")[0];
                var elemHeight = 3;
                if (Math.random() >= 0.5)
                    elemHeight = ele.offsetHeight-52;
                return (Math.floor(10) + elemHeight)  + "px";

                // return (Math.floor(Math.random()*(ele.offsetHeight-80)))  + "px";
            },
            getX() {
                var ele =  document.getElementsByClassName("barrage")[0];
                return (Math.floor(Math.random()*(ele.offsetWidth-230)))  + "px";
            },
            // readColor() {
            //     return '#'+Math.floor(Math.random()*16777215).toString(16);
            // },
            getPosition() {
                return this.list[Math.floor(Math.random() * this.posizioni.length)];
            },
            getParola() {
                return this.list[Math.floor(Math.random() * this.list.length)];
            },
            sendBarrage(pos) {
                // console.log(this.list);
                var text = this.getParola();
                var newBarrage = document.createElement("span");
                var ele =  document.getElementsByClassName("barrage")[0];
                ele.appendChild(newBarrage);
                newBarrage.className = "parola-volante";
                newBarrage.innerHTML = text;
                newBarrage.style.top = this.posizioni[pos].Y;
                newBarrage.style.left = this.posizioni[pos].X;
                setTimeout(function() { newBarrage.remove(); }, 14000);
                // newBarrage.style.color = this.readColor();
            },
            sendRandomBarrage() {
                // console.log(this.list);
                var text = this.getParola();
                var newBarrage = document.createElement("span");
                var ele =  document.getElementsByClassName("barrage")[0];
                ele.appendChild(newBarrage);
                newBarrage.className = "parola-volante";
                newBarrage.innerHTML = text;
                newBarrage.style.top = this.getY();
                newBarrage.style.left = this.getX();
                setTimeout(function() { newBarrage.remove(); }, 14000);
                // newBarrage.style.color = this.readColor();
            },
            mostraLeParole() {
                this.posizioni.forEach((v, i) => {
                    this.sendBarrage(i);
                });
                // alert("hola");

                setTimeout(this.mostraLeParole, 13000);
            }
        },
        mounted: function mounted () {
            if ($(window).width() < 600) {
                // alert('Less than 600');
            } else {
                // this.posizioni.forEach((v, i) => {
                //     // this.sendBarrage(i);
                //     setInterval(this.sendBarrage(i), 5000);
                // });
                // this.mostraLeParole();
            }
        },
        setup() {
            // const defaultList = [
            //     { id: 100, text: 'Lightweight' },
            //     { id: 101, text: 'Customizable' },
            //     { id: 102, text: 'Mobile' },
            //     { id: 103, text: 'Vue' },
            //     { id: 104, text: 'Library' },
            //     { id: 105, text: 'VantUI' },
            // ];

            // const list = ref([...defaultList]);
            // const add = () => {
            //     list.value.push({ id: Math.random(), text: '<h1>Hola Mundo</h1>' });
            // };
            // return { list, add };

            // const list = ref([...defaultList]);
            // const barrage = ref<BarrageInstance>();
            // const add = () => {
            // list.value.push({ id: Math.random(), text: 'Barrage' });
            // };

            // const [isPlay, toggle] = useToggle(false);

            // watch(isPlay, () => {
            //     if (isPlay.value) barrage.value?.play();
            //     else barrage.value?.pause();
            // });

            // return { list, barrage, isPlay, toggle, add };
        },
    };
</script>

<style scoped>
    .container {
        display: block;
    }
    .logo {
        margin-top: 20px;
        padding: 0px;
        box-shadow: 15px 5px 5px black;
        /* box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box; */
        /* width: 94%;
        height: 95%; */
        width: 100%;
        cursor: pointer;
    }
</style>

<style lang="scss">
    .barrage {
        position:relative;
    }
    .parola-volante {
        position:absolute;
        top:100px;
        font-size:22px;
        // color:darkred;
        animation: fly linear forwards 14s;
        padding: 5px 20px;
        //border: 1px solid #c2b7b77b;
        //border-radius: 10px;
        //background-color: #c2b7b7;
        font-weight: bold;
        font-style: italic;
    }
    @keyframes fly {
        0%{
            opacity: 0.1;
            
        };
        10%{
            opacity: 0.7;
        
        };
        25%{
            opacity: 1;
        
        };
        50%{
            opacity: 1;
        
        };
        75%{
            opacity: 0.8;
        
        };
        90% {
            opacity: 0;
        };
        100%{
            opacity: 0;
        };
    }
</style>
