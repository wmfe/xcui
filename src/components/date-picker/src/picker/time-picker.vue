<template>
    <div>
        <x-input
            class="x-date-editor"
            :class="'x-date-editor-' + type"
            :readonly="!editable || readonly"
            :disabled="disabled"
            :size="size"
            v-clickoutside="handleClose"
            :placeholder="placeholder"
            @focus="handleFocus"
            @blur="handleBlur"
            @keydown.native="handleKeydown"
            :value="displayValue"
            @change.native="displayValue = $event.target.value"
            :validateEvent="false"
            ref="reference">
            <i slot="icon"
              class="x-icon x-input-icon"
              @click="handleClickIcon"
              :class="[showClose ? 'x-icon-android-close' : triggerClass]"
              @mouseenter="handleMouseEnterIcon"
              @mouseleave="showClose = false"
              v-if="haveTrigger">
            </i>
        </x-input>
        <time-panel v-if="type === 'time'"
            :default-value="currentValue"
            :popperClass="popperClass"
            :visible="pickerVisible"
            :date="pickerDateForTime"
            ref="picker"></time-panel>
        <time-range-panel v-if="type === 'timerange'"
            :value="pickerValueForTimeRange"
            :default-value="currentValue"
            :popperClass="popperClass"
            ref="picker"></time-range-panel>
    </div>
</template>

<script>
import Picker from './pickerMixin';
import TimePanel from '../panel/time';
import TimeRangePanel from '../panel/time-range';

export default {
    name: 'XTimePicker',
    mixins: [Picker],
    components: {
        TimePanel,
        TimeRangePanel
    },
    props: {
        isRange: Boolean,
        type: {
            type: String,
            default() {
                return this.isRange ? 'timerange' : 'time';
            }
        }
    }
};
</script>



