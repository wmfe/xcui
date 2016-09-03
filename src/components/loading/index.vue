<template>
  <div v-show="show" class="xcui-loading load-container" :class="[type,size,classname]">
      <div class="loader" :style="{'color' : color}"></div>
  </div>
</template>

<script>
export default {
    name: 'xcui-loading',
    props: {
        'show': {
            type: Boolean,
            default: false
        },
        'type': {
            type: String,
            default: 'load1'
        },
        'classname': {
            type: String,
            default: ''
        },
        'color': {
            type: String,
            default: ''
        },
        'size': {
            type: String,
            default: 'md'
        }
    },
    methods: {
    }
};
</script>

<style lang="less" scoped>
    @foreground: #46C3C1;
    @background: rgba(255, 255, 255, 0.7);
	.xcui-loading {
        display: block;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 999;
        background:@background;
    }

/*loading-1********************/

    .load1 {
    .loader {
        color:@foreground;
        font-size:13px;
        margin:20% auto;
        width:1em;
        height:1em;
        border-radius:50%;
        position:relative;
        text-indent:-9999em;
        -webkit-animation:load1 1.3s infinite linear;
        animation:load1 1.3s infinite linear;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
    }

    }
    @-webkit-keyframes load1 {.load1-frames;}
    @keyframes load1 {.load1-frames;}

    .load1-frames() {

    0%,
    100% {
        box-shadow:0 -3em 0 0.2em,
        2em -2em 0 0em,
        3em 0 0 -1em,
        2em 2em 0 -1em,
        0 3em 0 -1em,
        -2em 2em 0 -1em,
        -3em 0 0 -1em,
        -2em -2em 0 0;
    }
    12.5% {
        box-shadow:0 -3em 0 0,
        2em -2em 0 0.2em,
        3em 0 0 0,
        2em 2em 0 -1em,
        0 3em 0 -1em,
        -2em 2em 0 -1em,
        -3em 0 0 -1em,
        -2em -2em 0 -1em;
    }

    25% {
        box-shadow:0 -3em 0 -0.5em,
        2em -2em 0 0,
        3em 0 0 0.2em,
        2em 2em 0 0,
        0 3em 0 -1em,
        -2em 2em 0 -1em,
        -3em 0 0 -1em,
        -2em -2em 0 -1em;
    }

    37.5% {
        box-shadow:0 -3em 0 -1em,
        2em -2em 0 -1em,
        3em 0em 0 0,
        2em 2em 0 0.2em,
        0 3em 0 0em,
        -2em 2em 0 -1em,
        -3em 0em 0 -1em,
        -2em -2em 0 -1em;
    }

    50% {
        box-shadow:0 -3em 0 -1em,
        2em -2em 0 -1em,
        3em 0 0 -1em,
        2em 2em 0 0em,
        0 3em 0 0.2em,
        -2em 2em 0 0,
        -3em 0em 0 -1em,
        -2em -2em 0 -1em;
    }

    62.5% {
        box-shadow:0 -3em 0 -1em,
        2em -2em 0 -1em,
        3em 0 0 -1em,
        2em 2em 0 -1em,
        0 3em 0 0,
        -2em 2em 0 0.2em,
        -3em 0 0 0,
        -2em -2em 0 -1em;
    }

    75% {
        box-shadow:0em -3em 0 -1em,
        2em -2em 0 -1em,
        3em 0em 0 -1em,
        2em 2em 0 -1em,
        0 3em 0 -1em,
        -2em 2em 0 0,
        -3em 0em 0 0.2em,
        -2em -2em 0 0;
    }

    87.5% {
        box-shadow:0em -3em 0 0,
        2em -2em 0 -1em,
        3em 0 0 -1em,
        2em 2em 0 -1em,
        0 3em 0 -1em,
        -2em 2em 0 0,
        -3em 0em 0 0,
        -2em -2em 0 0.2em;
    }

    }

/*loading-2********************/

    .load2 {

    .loader {
        color:@foreground;
        font-size:60px;
        text-indent:-9999em;
        overflow: hidden;
        width:1em;
        height:1em;
        border-radius:50%;
        margin:20% auto;
        position:relative;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation:load2 1.7s infinite ease;
        animation:load2 1.7s infinite ease;
    }

    }
    @-webkit-keyframes load2 {.load2-frames;}
    @keyframes load2 {.load2-frames;}

    .load2-frames() {

    0% {
        -webkit-transform:rotate(0deg);
        transform:rotate(0deg);
        box-shadow:
            0 -0.83em 0 -0.4em,
            0 -0.83em 0 -0.42em,
            0 -0.83em 0 -0.44em,
            0 -0.83em 0 -0.46em,
            0 -0.83em 0 -0.477em;
    }

    5%,
    95% {
        box-shadow:
            0 -0.83em 0 -0.4em,
            0 -0.83em 0 -0.42em,
            0 -0.83em 0 -0.44em,
            0 -0.83em 0 -0.46em,
            0 -0.83em 0 -0.477em;
    }

    10%,
    59% {
        box-shadow:
            0 -0.83em 0 -0.4em,
            -0.087em -0.825em 0 -0.42em,
            -0.173em -0.812em 0 -0.44em,
            -0.256em -0.789em 0 -0.46em,
            -0.297em -0.775em 0 -0.477em;
    }

    20% {
        box-shadow:
            0 -0.83em 0 -0.4em,
            -0.338em -0.758em 0 -0.42em,
            -0.555em -0.617em 0 -0.44em,
            -0.671em -0.488em 0 -0.46em,
            -0.749em -0.34em 0 -0.477em;
    }

    38% {
        box-shadow:
            0 -0.83em 0 -0.4em,
            -0.377em -0.74em 0 -0.42em,
            -0.645em -0.522em 0 -0.44em,
            -0.775em -0.297em 0 -0.46em,
            -0.82em -0.09em 0 -0.477em;
    }

    100% {
        -webkit-transform:rotate(360deg);
        transform:rotate(360deg);
        box-shadow:
            0 -0.83em 0 -0.4em,
            0 -0.83em 0 -0.42em,
            0 -0.83em 0 -0.44em,
            0 -0.83em 0 -0.46em,
            0 -0.83em 0 -0.477em;
    }

    }

/*loading-3********************/

    .load3 {

    .loader,
    .loader:before,
    .loader:after {
        border-radius:50%;
        width:1.5em;
        height:1.5em;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation:load3 1.8s infinite ease-in-out;
        animation:load3 1.8s infinite ease-in-out;
    }

    .loader {
        color:@foreground;
        font-size:10px;
        margin:20% auto;
        position:relative;
        text-indent:-9999em;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation-delay:-0.16s;
        animation-delay:-0.16s;

    &:before,
    &:after {
         content:'';
         position:absolute;
         top:0;
     }

    &:before {
         left:-3em;
         -webkit-animation-delay:-0.32s;
         animation-delay:-0.32s;
     }

    &:after {
         left:3em;
     }

    }

    }

    @-webkit-keyframes load3 {.load3-frames;}
    @keyframes load3 {.load3-frames;}

    .load3-frames() {

    0%,
    80%,
    100% {
        box-shadow:0 2.5em 0 -1.3em;
    }

    40% {
        box-shadow:0 2.5em 0 0;
    }

    }

    .sm{
        .loader{
            font-size: 10px;
        }
    }

    .sm.load2{
        .loader{
            font-size: 40px;
        }
    }

    .md{
    .loader{
        font-size: 14px;
    }
    }

    .md.load2{
    .loader{
        font-size: 60px;
    }
    }

    .lg{
    .loader{
        font-size: 18px;
    }
    }

    .lg.load2{
    .loader{
        font-size: 80px;
    }
    }


</style>
