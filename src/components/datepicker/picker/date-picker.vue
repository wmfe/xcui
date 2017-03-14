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
        <date-range-panel  v-if="type === 'daterange' || type === 'datetimerange'" :popperClass="popperClass" ref="picker"></date-panel>
    </div>
</template>

<script>
import Picker from './pickerMixin';
import DateRangePanel from '../panel/date-range';
import DatePanel from '../panel/date';
import XInput from '../../input';

export default {
    name: 'xDatePicker',
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

<style>
  
/*.el-date-table {
    font-size: 12px;
    min-width: 224px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.el-date-table td {
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer
}

.el-date-table td.next-month,.el-date-table td.prev-month {
    color: #ddd
}

.el-date-table td.today {
    color: #46C3C1;
    position: relative
}

.el-date-table td.today:before {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-top: .5em solid #46C3C1;
    border-left: .5em solid transparent
}

.el-date-table td.available:hover {
    background-color: #e4e8f1
}

.el-date-table td.in-range {
    background-color: #d2ecff
}

.el-date-table td.in-range:hover {
    background-color: #afddff
}

.el-date-table td.current:not(.disabled),.el-date-table td.end-date,.el-date-table td.start-date {
    background-color: #46C3C1!important;
    color: #fff
}

.el-date-table td.disabled {
    background-color: #f4f4f4;
    opacity: 1;
    cursor: not-allowed;
    color: #ccc
}

.el-date-table td.week {
    font-size: 80%;
    color: #8391a5
}

.el-date-table th {
    padding: 5px;
    color: #8391a5;
    font-weight: 400
}

.el-date-table.is-week-mode .el-date-table__row:hover {
    background-color: #e4e8f1
}

.el-date-table.is-week-mode .el-date-table__row.current {
    background-color: #d2ecff
}

.el-month-table {
    font-size: 12px;
    margin: -1px;
    border-collapse: collapse
}

.el-month-table td {
    text-align: center;
    padding: 20px 3px;
    cursor: pointer
}

.el-month-table td .cell {
    width: 48px;
    height: 32px;
    display: block;
    line-height: 32px;
    color: #48576a
}

.el-month-table td .cell:hover {
    background-color: #e4e8f1
}

.el-month-table td.disabled .cell {
    background-color: #f4f4f4;
    cursor: not-allowed;
    color: #ccc
}

.el-month-table td.current:not(.disabled) .cell {
    background-color: #46C3C1!important;
    color: #fff
}

.el-year-table {
    font-size: 12px;
    margin: -1px;
    border-collapse: collapse
}

.el-year-table .el-icon {
    color: #97a8be
}

.el-year-table td {
    text-align: center;
    padding: 20px 3px;
    cursor: pointer
}

.el-year-table td .cell {
    width: 48px;
    height: 32px;
    display: block;
    line-height: 32px;
    color: #48576a
}

.el-year-table td .cell:hover {
    background-color: #e4e8f1
}

.el-year-table td.disabled .cell {
    background-color: #f4f4f4;
    cursor: not-allowed;
    color: #ccc
}

.el-year-table td.current:not(.disabled) .cell {
    background-color: #46C3C1!important;
    color: #fff
}

.el-date-range-picker {
    min-width: 520px
}

.el-date-range-picker table {
    table-layout: fixed;
    width: 100%
}

.el-date-range-picker .el-picker-panel__body {
    min-width: 513px
}

.el-date-range-picker .el-picker-panel__content {
    margin: 0
}

.el-date-range-picker.has-sidebar.has-time {
    min-width: 766px
}

.el-date-range-picker.has-sidebar {
    min-width: 620px
}

.el-date-range-picker.has-time {
    min-width: 660px
}

.el-date-range-picker__header {
    position: relative;
    text-align: center;
    height: 28px
}

.el-date-range-picker__header button {
    float: left
}

.el-date-range-picker__header div {
    font-size: 14px;
    margin-right: 50px
}

.el-date-range-picker__content {
    float: left;
    width: 50%;
    box-sizing: border-box;
    margin: 0;
    padding: 16px
}

.el-date-range-picker__content.is-right .el-date-range-picker__header button {
    float: right
}

.el-date-range-picker__content.is-right .el-date-range-picker__header div {
    margin-left: 50px;
    margin-right: 50px
}

.el-date-range-picker__content.is-left {
    border-right: 1px solid #e4e4e4
}

.el-date-range-picker__editors-wrap {
    box-sizing: border-box;
    display: table-cell
}

.el-date-range-picker__editors-wrap.is-right {
    text-align: right
}

.el-date-range-picker__time-header {
    position: relative;
    border-bottom: 1px solid #e4e4e4;
    font-size: 12px;
    padding: 8px 5px 5px;
    display: table;
    width: 100%;
    box-sizing: border-box
}

.el-date-range-picker__time-header>.el-icon-arrow-right {
    font-size: 20px;
    vertical-align: middle;
    display: table-cell;
    color: #97a8be
}

.el-date-range-picker__time-picker-wrap {
    position: relative;
    display: table-cell;
    padding: 0 5px
}

.el-date-range-picker__time-picker-wrap .el-picker-panel {
    position: absolute;
    top: 13px;
    right: 0;
    z-index: 1;
    background: #fff
}

.el-time-range-picker {
    min-width: 354px;
    overflow: visible
}

.el-time-range-picker__content {
    position: relative;
    text-align: center;
    padding: 10px
}

.el-time-range-picker__cell {
    box-sizing: border-box;
    margin: 0;
    padding: 4px 7px 7px;
    width: 49%;
    display: inline-block
}

.el-time-range-picker__header {
    margin-bottom: 5px;
    text-align: center;
    font-size: 14px
}

.el-picker-panel,.el-time-range-picker__body {
    border-radius: 2px;
    border: 1px solid #d1dbe5
}

.el-picker-panel {
    color: #48576a;
    box-shadow: 0 2px 6px #ccc;
    background: #fff;
    line-height: 20px;
    margin: 5px 0
}

.el-picker-panel__body-wrapper:after,.el-picker-panel__body:after {
    content: "";
    display: table;
    clear: both
}

.el-picker-panel__content {
    position: relative;
    margin: 15px
}

.el-picker-panel__footer {
    border-top: 1px solid #e4e4e4;
    padding: 4px;
    text-align: right;
    background-color: #fff;
    position: relative
}

.el-picker-panel__shortcut {
    display: block;
    width: 100%;
    border: 0;
    background-color: transparent;
    line-height: 28px;
    font-size: 14px;
    color: #48576a;
    padding-left: 12px;
    text-align: left;
    outline: none;
    cursor: pointer
}

.el-picker-panel__shortcut:hover {
    background-color: #e4e8f1
}

.el-picker-panel__shortcut.active {
    background-color: #e6f1fe;
    color: #46C3C1
}

.el-picker-panel__btn {
    border: 1px solid #dcdcdc;
    color: #333;
    line-height: 24px;
    border-radius: 2px;
    padding: 0 20px;
    cursor: pointer;
    background-color: transparent;
    outline: none;
    font-size: 12px
}

.el-picker-panel__btn[disabled] {
    color: #ccc;
    cursor: not-allowed
}

.el-picker-panel__icon-btn {
    font-size: 12px;
    color: #97a8be;
    border: 0;
    background: transparent;
    cursor: pointer;
    outline: none;
    margin-top: 3px
}

.el-picker-panel__icon-btn:hover {
    color: #46C3C1
}

.el-picker-panel__link-btn {
    cursor: pointer;
    color: #46C3C1;
    text-decoration: none;
    padding: 15px;
    font-size: 12px
}

.el-picker-panel [slot=sidebar],.el-picker-panel__sidebar {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 110px;
    border-right: 1px solid #e4e4e4;
    box-sizing: border-box;
    padding-top: 6px;
    background-color: #fbfdff
}

.el-picker-panel [slot=sidebar]+.el-picker-panel__body,.el-picker-panel__sidebar+.el-picker-panel__body {
    margin-left: 110px
}

.el-date-picker {
    min-width: 254px
}

.el-date-picker .el-picker-panel__content {
    min-width: 224px
}

.el-date-picker table {
    table-layout: fixed;
    width: 100%
}

.el-date-picker.has-sidebar.has-time {
    min-width: 434px
}

.el-date-picker.has-sidebar {
    min-width: 370px
}

.el-date-picker.has-time {
    min-width: 324px
}

.el-date-picker__editor-wrap {
    position: relative;
    display: table-cell;
    padding: 0 5px
}

.el-date-picker__time-header {
    position: relative;
    border-bottom: 1px solid #e4e4e4;
    font-size: 12px;
    padding: 8px 5px 5px;
    display: table;
    width: 100%;
    box-sizing: border-box
}

.el-date-picker__header {
    margin: 12px;
    text-align: center
}

.el-date-picker__header-label {
    font-size: 14px;
    padding: 0 5px;
    line-height: 22px;
    text-align: center;
    cursor: pointer
}

.el-date-picker__header-label.active,.el-date-picker__header-label:hover {
    color: #46C3C1
}

.el-date-picker__prev-btn {
    float: left
}

.el-date-picker__next-btn {
    float: right
}

.el-date-picker__time-wrap {
    padding: 10px;
    text-align: center
}

.el-date-picker__time-label {
    float: left;
    cursor: pointer;
    line-height: 30px;
    margin-left: 10px
}

.time-select {
    margin: 5px 0;
    min-width: 0
}

.time-select .el-picker-panel__content {
    max-height: 200px;
    margin: 0;
    overflow: hidden;
}

.time-select .el-picker-panel__content:hover {
    overflow-y: scroll;
}

.time-select-item {
    padding: 8px 10px;
    font-size: 14px
}

.time-select-item.selected:not(.disabled) {
    background-color: #46C3C1;
    color: #fff
}

.time-select-item.selected:not(.disabled):hover {
    background-color: #46C3C1
}

.time-select-item.disabled {
    color: #d1dbe5;
    cursor: not-allowed
}

.time-select-item:hover {
    background-color: #e4e8f1;
    cursor: pointer
}

.el-date-editor {
    position: relative;
    display: inline-block
}

.el-date-editor .el-picker-panel {
    position: absolute;
    min-width: 180px;
    box-sizing: border-box;
    box-shadow: 0 2px 6px #ccc;
    background: #fff;
    z-index: 10;
    top: 41px
}

.el-date-editor.el-input {
    width: 193px
}

.el-date-editor--daterange.el-input {
    width: 220px
}

.el-date-editor--datetimerange.el-input {
    width: 350px
}

.el-time-spinner.has-seconds .el-time-spinner__wrapper {
    width: 33%
}

.el-time-spinner.has-seconds .el-time-spinner__wrapper:hover {
    overflow-y: scroll;
}

.el-time-spinner.has-seconds .el-time-spinner__wrapper .el-scrollbar__wrap:not(.el-scrollbar__wrap--hidden-default) {
    padding-bottom: 15px
}

.el-time-spinner.has-seconds .el-time-spinner__wrapper:nth-child(2) {
    margin-left: 1%
}

.el-time-spinner__wrapper {
    max-height: 190px;
    overflow: hidden;
    display: inline-block;
    width: 50%;
    vertical-align: top;
    position: relative
}

.el-time-spinner__list {
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center
}

.el-time-spinner__list:after,.el-time-spinner__list:before {
    content: "";
    display: block;
    width: 100%;
    height: 80px
}

.el-time-spinner__item {
    height: 32px;
    line-height: 32px;
    font-size: 12px
}

.el-time-spinner__item:hover:not(.disabled):not(.active) {
    background: #e4e8f1;
    cursor: pointer
}

.el-time-spinner__item.active:not(.disabled) {
    color: #fff
}

.el-time-spinner__item.disabled {
    color: #d1dbe5;
    cursor: not-allowed
}

.el-time-panel {
    margin: 5px 0;
    border: 1px solid #d1dbe5;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);
    border-radius: 2px;
    position: absolute;
    width: 180px;
    left: 0;
    z-index: 1000;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.el-time-panel__content {
    font-size: 0;
    position: relative;
    overflow: hidden
}

.el-time-panel__content:after,.el-time-panel__content:before {
    content: ":";
    top: 50%;
    color: #fff;
    position: absolute;
    font-size: 14px;
    margin-top: -15px;
    line-height: 16px;
    background-color: #46C3C1;
    height: 32px;
    z-index: -1;
    left: 0;
    right: 0;
    box-sizing: border-box;
    padding-top: 6px;
    text-align: left
}

.el-time-panel__content:after {
    left: 50%;
    margin-left: -2px
}

.el-time-panel__content:before {
    padding-left: 50%;
    margin-right: -2px
}

.el-time-panel__content.has-seconds:after {
    left: 66.66667%
}

.el-time-panel__content.has-seconds:before {
    padding-left: 33.33333%
}

.el-time-panel__footer {
    border-top: 1px solid #e4e4e4;
    padding: 4px;
    height: 36px;
    line-height: 25px;
    text-align: right;
    box-sizing: border-box
}

.el-time-panel__btn {
    border: none;
    line-height: 28px;
    padding: 0 5px;
    margin: 0 5px;
    cursor: pointer;
    background-color: transparent;
    outline: none;
    font-size: 12px;
    color: #8391a5
}

.el-time-panel__btn.confirm {
    font-weight: 800;
    color: #46C3C1
}
*/


</style>


