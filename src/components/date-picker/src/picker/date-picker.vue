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
        <date-panel v-if="type !== 'daterange' && type !== 'datetimerange'" :popperClass="popperClass" ref="picker"></date-panel>
        <date-range-panel 
            v-if="type === 'daterange' || type === 'datetimerange'"
            :popperClass="popperClass" ref="picker">
        </date-range-panel>
    </div>
</template>

<script>
import Picker from './pickerMixin';
import DateRangePanel from '../panel/date-range';
import DatePanel from '../panel/date';
import XInput from '../../../input';

export default {
    name: 'XDatePicker',
    mixins: [Picker],
    components: {
        XInput,
        DatePanel,
        DateRangePanel
    },
    props: {
        type: {
            type: String,
            default: 'date'
        }
    }
};
</script>



