<template>
  <div
    class="x-progress"
    :class="[
      'x-progress-' + type,
      status ? 'is-' + status : '',
      {
        'x-progress-without-text': !showText,
        'x-progress-text-inside': textInside,
      }
    ]"
  >
    <div class="x-progress-bar" v-if="type === 'line'">
      <div class="x-progress-bar-outer" :style="{height: strokeWidth + 'px'}">
        <div class="x-progress-bar-inner" :style="barStyle">
          <div class="x-progress-bar-innerText" v-if="showText && textInside">{{percentage}}%</div>
        </div>
      </div>
    </div>
    <div class="x-progress-circle" :style="{height: width + 'px', width: width + 'px'}" v-else>
      <svg viewBox="0 0 100 100">
        <path class="x-progress-circle-track" :d="trackPath" stroke="#e5e9f2" :stroke-width="relativeStrokeWidth" fill="none"></path>
        <path class="x-progress-circle-path" :d="trackPath" stroke-linecap="round" :stroke="stroke" :stroke-width="relativeStrokeWidth" fill="none" :style="circlePathStyle"></path>
      </svg>
    </div>
    <div
      class="x-progress-text"
      v-if="showText && !textInside"
      :style="{fontSize: progressTextSize + 'px'}"
    >
      <template v-if="!status">{{percentage}}%</template>
      <i v-else class="x-icon" :class="iconClass"></i>
    </div>
  </div>
</template>
<script>
export default {
    name: 'XProgress',
    props: {
        type: {
            type: String,
            default: 'line',
            validator: val => ['line', 'circle'].indexOf(val) > -1
        },
        percentage: {
            type: Number,
            default: 0,
            required: true,
            validator: val => val >= 0 && val <= 100
        },
        status: {
            type: String
        },
        strokeWidth: {
            type: Number,
            default: 6
        },
        textInside: {
            type: Boolean,
            default: false
        },
        width: {
            type: Number,
            default: 126
        },
        showText: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        barStyle() {
            let style = {};
            style.width = this.percentage + '%';
            return style;
        },
        relativeStrokeWidth() {
            return (this.strokeWidth / this.width * 100).toFixed(1);
        },
        trackPath() {
            let radius = parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);

            return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2}`
            + ` a ${radius} ${radius} 0 1 1 0 -${radius * 2}`;
        },
        perimeter() {
            let radius = 50 - parseFloat(this.relativeStrokeWidth) / 2;
            return 2 * Math.PI * radius;
        },
        circlePathStyle() {
            let perimeter = this.perimeter;
            return {
                strokeDasharray: `${perimeter}px,${perimeter}px`,
                strokeDashoffset: (1 - this.percentage / 100) * perimeter + 'px',
                transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
            };
        },
        stroke() {
            let ret;
            switch (this.status) {
                case 'success':
                    ret = '#00a854';
                    break;
                case 'exception':
                    ret = '#f04134';
                    break;
                default:
                    ret = '#2c96ef';
            }
            return ret;
        },
        iconClass() {
            if (this.type === 'line') {
                return this.status === 'success' ? 'x-icon-checkmark-circled' : 'x-icon-close-circled';
            } 
            return this.status === 'success' ? 'x-icon-checkmark-round' : 'x-icon-close-round';
        },
        progressTextSize() {
            return this.type === 'line' ? 12 + this.strokeWidth * 0.4 : this.width * 0.111111 + 2;
        }
    }
};

</script>
