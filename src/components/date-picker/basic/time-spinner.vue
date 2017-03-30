<template>
  <div class="x-time-spinner" :class="{ 'has-seconds': showSeconds }">
    <div class="x-time-spinner-wrapper" ref="hour">
        <ul
          @mouseenter.native="emitSelectRange('hours')"
          class="x-time-spinner-list"
          style="max-height: inherit;"
          >
          <li
            @click="handleClick('hours', { value: hour, disabled: disabled }, true)"
            v-for="(disabled, hour) in hoursList"
            track-by="hour"
            class="x-time-spinner-item"
            :class="{ 'active': hour === hours, 'disabled': disabled }"
            v-text="hour"></li>
        </ul>
    </div>
    <div class="x-time-spinner-wrapper" ref="minute">
        <ul
          @mouseenter.native="emitSelectRange('minutes')"
          class="x-time-spinner-list"
          tyle="max-height: inherit;"
          >
          <li
            @click="handleClick('minutes', key, true)"
            v-for="(minute, key) in 60"
            class="x-time-spinner-item"
            :class="{ 'active': key === minutes }"
            v-text="key"></li>
        </ul>
    </div>
    <div class="x-time-spinner-wrapper" ref="second">
        <ul
          v-show="showSeconds"
          @mouseenter.native="emitSelectRange('seconds')"
          class="x-time-spinner-list"
          style="max-height: inherit;"
          noresize
          >
          <li
            @click="handleClick('seconds', key, true)"
            v-for="(second, key) in 60"
            class="x-time-spinner-item"
            :class="{ 'active': key === seconds }"
            v-text="key"></li>
        </ul>
    </div>
  </div>
</template>

<script>
import { getRangeHours } from '../util';

export default {
    props: {
        hours: {
            type: Number,
            default: 0
        },

        minutes: {
            type: Number,
            default: 0
        },

        seconds: {
            type: Number,
            default: 0
        },

        showSeconds: {
            type: Boolean,
            default: true
        }
    },

    watch: {
        hoursPrivate(newVal, oldVal) {
            if (!(newVal >= 0 && newVal <= 23)) {
                this.hoursPrivate = oldVal;
            }
            this.ajustElTop('hour', newVal);
            this.$emit('change', { hours: newVal });
        },

        minutesPrivate(newVal, oldVal) {
            if (!(newVal >= 0 && newVal <= 59)) {
                this.minutesPrivate = oldVal;
            }
            this.ajustElTop('minute', newVal);
            this.$emit('change', { minutes: newVal });
        },

        secondsPrivate(newVal, oldVal) {
            if (!(newVal >= 0 && newVal <= 59)) {
                this.secondsPrivate = oldVal;
            }
            this.ajustElTop('second', newVal);
            this.$emit('change', { seconds: newVal });
        }
    },

    computed: {
        hoursList() {
            return getRangeHours(this.selectableRange);
        },

        hourEl() {
            return this.$refs.hour;
        },

        minuteEl() {
            return this.$refs.minute;
        },

        secondEl() {
            return this.$refs.second;
        }
    },

    data() {
        return {
            hoursPrivate: 0,
            minutesPrivate: 0,
            secondsPrivate: 0,
            selectableRange: []
        };
    },

    mounted() {
        this.$nextTick(() => {
            this.bindScrollEvent();
        });
    },

    methods: {
        handleClick(type, value, disabled) {
            if (value.disabled) {
                return;
            }

            this[type + 'Private'] = value.value >= 0 ? value.value : value;

            this.emitSelectRange(type);
        },

        emitSelectRange(type) {
            if (type === 'hours') {
                this.$emit('select-range', 0, 2);
            }
            else if (type === 'minutes') {
                this.$emit('select-range', 3, 5);
            }
            else if (type === 'seconds') {
                this.$emit('select-range', 6, 8);
            }
        },

        bindScrollEvent() {
            const bindFuntion = (type) => {
                this[`${type}El`].onscroll = (e) => this.handleScroll(type, e);
            };
            bindFuntion('hour');
            bindFuntion('minute');
            bindFuntion('second');
        },

        handleScroll(type) {
            const ajust = {};
            ajust[`${type}s`] = Math.min(Math.floor((this[`${type}El`].scrollTop - 80) / 32 + 3), 59);
            this.$emit('change', ajust);
        },

        ajustScrollTop() {
            this.ajustElTop('hour', this.hours);
            this.ajustElTop('minute', this.minutes);
            this.ajustElTop('second', this.seconds);
        },

        ajustElTop(type, value) {
            this[`${type}El`].scrollTop = Math.max(0, (value - 2.5) * 32 + 80);
        }
    }
};

</script>
