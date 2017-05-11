<template>
  <transition name="x-slide-up" @after-leave="$emit('dodestroy')">
    <div
      v-show="currentVisible"
      :style="{width: width + 'px'}"
      class="x-time-panel"
      :class="popperClass">
      <div class="x-time-panel-content" :class="{ 'has-seconds': showSeconds }">
        <time-spinner
          ref="spinner"
          @change="handleChange"
          :show-seconds="showSeconds"
          @select-range="setSelectionRange"
          :hours="hours"
          :minutes="minutes"
          :seconds="seconds">
        </time-spinner>
      </div>
      <div class="x-time-panel-footer">
        <button
          type="button"
          class="x-time-panel-btn cancel"
          @click="handleCancel">{{ t('x.datepicker.cancel') }}</button>
        <button
          type="button"
          class="x-time-panel-btn confirm"
          @click="handleConfirm()">{{ t('x.datepicker.confirm') }}</button>
      </div>
    </div>
  </transition>
</template>

<script>
import { limitRange } from '../util/index';
import Config from '../config';

export default {
    mixins: [Config],
    components: {
        TimeSpinner: require('../basic/time-spinner')
    },

    props: {
        pickerWidth: {},
        defaultValue: [Date, String],
        date: {
            default() {
                return new Date();
            }
        },
        visible: Boolean
    },

    watch: {
        visible(val) {
            this.currentVisible = val;
        },

        pickerWidth(val) {
            this.width = val;
        },

        value(newVal) {
            let date;
            if (newVal instanceof Date) {
                date = limitRange(newVal, this.selectableRange);
            }
            else if (!newVal) {
                date = new Date();
            }

            if (!date) {
                let time = new Date(newVal).getTime();
                date = isNaN(time) ? new Date() : new Date(newVal);
            }

            this.handleChange({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds()
            });
            this.$nextTick(_ => this.ajustScrollTop());
        },

        selectableRange(val) {
            this.$refs.spinner.selectableRange = val;
        }

        // defaultValue(val) {
        //     if (val instanceof Date) {
        //         this.currentDate = val;
        //         this.hours = this.currentDate.getHours();
        //         this.minutes = this.currentDate.getMinutes();
        //         this.seconds = this.currentDate.getSeconds();
        //     }
        //     else if (val.length > 0 && !isNaN(new Date(val).getTime())) {
        //         this.currentDate = new Date(val);
        //         this.hours = this.currentDate.getHours();
        //         this.minutes = this.currentDate.getMinutes();
        //         this.seconds = this.currentDate.getSeconds();
        //     }
        // }
    },

    data() {
        return {
            popperClass: '',
            format: 'HH:mm:ss',
            value: '',
            hours: 0,
            minutes: 0,
            seconds: 0,
            selectableRange: [],
            currentDate: this.defaultValue || this.date || new Date(),
            currentVisible: this.visible || false,
            width: this.pickerWidth || 0
            // visible: false,
            // date: new Date()
        };
    },

    computed: {
        showSeconds() {
            return (this.format || '').indexOf('ss') !== -1;
        }
    },

    methods: {
        handleClear() {
            this.$emit('pick');
        },

        handleCancel() {
            this.$emit('pick');
        },

        handleChange(date) {
            if (date.hours !== undefined) {
                this.currentDate.setHours(date.hours);
                this.hours = this.currentDate.getHours();
            }
            if (date.minutes !== undefined) {
                this.currentDate.setMinutes(date.minutes);
                this.minutes = this.currentDate.getMinutes();
            }
            if (date.seconds !== undefined) {
                this.currentDate.setSeconds(date.seconds);
                this.seconds = this.currentDate.getSeconds();
            }

            this.handleConfirm(true);
        },

        setSelectionRange(start, end) {
            this.$emit('select-range', start, end);
        },

        handleConfirm(visible = false, first) {
            if (first) {
                return;
            }
            const date = new Date(limitRange(this.currentDate, this.selectableRange, 'HH:mm:ss'));
            this.$emit('pick', date, visible, first);
        },

        ajustScrollTop() {
            return this.$refs.spinner.ajustScrollTop();
        }
    },

    created() {
        this.hours = this.currentDate.getHours();
        this.minutes = this.currentDate.getMinutes();
        this.seconds = this.currentDate.getSeconds();
    },

    mounted() {
        this.$nextTick(() => this.handleConfirm(true, true));
    }
};

</script>
