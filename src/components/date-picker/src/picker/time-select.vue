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
        <panel :popperClass="popperClass" ref="picker"></panel>
    </div>
</template>

<script>
  import Picker from './pickerMixin';
  import Panel from '../panel/time-select.vue';

  export default {
      mixins: [Picker],
      components: {
          Panel
      },
      name: 'XTimeSelect',
      beforeCreate() {
          this.type = 'time-select';
      }
  };

</script>
