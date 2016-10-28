<template>
    <div class="xcui-progress" >
        <div class="xcui-progress-container">
            <div class="xcui-progress-outer">
                 <div class="xcui-progress-inner" :style="{width:percent+'%',height:height+'px'}"></div>
            </div>
        </div>
        <div :class="['infoClassName',!showInfo ? 'hidden':'']" >
            {{percentInfo}}
        </div>
    <div>
</template>

<script>
    export default {
        name: 'xcui-progress',
        props: {
            percent: {
                type: Number,
                default: 0
            },
            percentInfo: {
                type: String,
                default: ''
            },
            infoClassName: {
                type: String,
                default: 'xcui-progress-info'
            },
            showInfo: {
                type: Boolean,
                default: false
            },
            height: {
                type: Number,
                default: 10
            }
        }
    };
</script>

<style lang="less">
    .xcui-progress{
        margin:10px;

        .xcui-progress-container{
            width: 100%;
            margin-right:-50px;
            padding-right:50px;
            display:inline-block;
        }

        .xcui-progress-outer{
            width:100%;
            background:#ccc;
            display:inline-block;
            border-radius:50px;
           
        }

        .xcui-progress-inner{
            background-color:#2db7f5;
            border-radius:50px;
            position: relative;
        }

        .xcui-progress-info{
            display:inline-block;
        }

        .shine span {
          
        }
        .xcui-progress-inner:after {
            content: "";
            opacity: 0;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: #fff;
            -moz-border-radius: 3px;
            -webkit-border-radius: 3px;
            border-radius: 3px;
            -moz-animation: animate-shine 2s ease-out infinite;
            -webkit-animation: animate-shine 2s ease-out infinite;
        }
        
        @-moz-keyframes animate-shine {
            0%{
                opacity: 0;
                width: 0;
            }
            50% {
                opacity: 0.5;
            }
            100%{
                opacity: 0;
                width: 95%;
            }
        }

        @-webkit-keyframes animate-shine {
            0%{
                opacity: 0;
                width: 0;
            }
            50%{
                opacity: 0.5;
            }

            100%{
                opacity: 0;
                width: 95%;
            }
        }
    }
</style>
