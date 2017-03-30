<template>
  <table @click="handleMonthTableClick" class="x-month-table">
    <tbody>
    <tr>
      <td :class="getCellStyle(0)">
        <a class="cell">{{ t('x.datepicker.months.jan') }}</a>
      </td>
      <td :class="getCellStyle(1)">
        <a class="cell">{{ t('x.datepicker.months.feb') }}</a>
      </td>
      <td :class="getCellStyle(2)">
        <a class="cell">{{ t('x.datepicker.months.mar') }}</a>
      </td>
      <td :class="getCellStyle(3)">
        <a class="cell">{{ t('x.datepicker.months.apr') }}</a>
      </td>
    </tr>
    <tr>
      <td :class="getCellStyle(4)">
        <a class="cell">{{ t('x.datepicker.months.may') }}</a>
      </td>
      <td :class="getCellStyle(5)">
        <a class="cell">{{ t('x.datepicker.months.jun') }}</a>
      </td>
      <td :class="getCellStyle(6)">
        <a class="cell">{{ t('x.datepicker.months.jul') }}</a>
      </td>
      <td :class="getCellStyle(7)">
        <a class="cell">{{ t('x.datepicker.months.aug') }}</a>
      </td>
    </tr>
    <tr>
      <td :class="getCellStyle(8)">
        <a class="cell">{{ t('x.datepicker.months.sep') }}</a>
      </td>
      <td :class="getCellStyle(9)">
        <a class="cell">{{ t('x.datepicker.months.oct') }}</a>
      </td>
      <td :class="getCellStyle(10)">
        <a class="cell">{{ t('x.datepicker.months.nov') }}</a>
      </td>
      <td :class="getCellStyle(11)">
        <a class="cell">{{ t('x.datepicker.months.dec') }}</a>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import { hasClass } from '../../../utils/dom';
import Config from '../config';

export default {
    mixins: [Config],
    props: {
        disabledDate: {},
        date: {},
        month: {
            type: Number
        }
    },
    methods: {
        getCellStyle(month) {
            const style = {};
            const date = new Date(this.date);

            date.setMonth(month);
            style.disabled = typeof this.disabledDate === 'function'
                && this.disabledDate(date);
            style.current = this.month === month;

            return style;
        },

        handleMonthTableClick(event) {
            const target = event.target;
            if (target.tagName !== 'A') {
                return;
            }
            if (hasClass(target.parentNode, 'disabled')) {
                return;
            }
            const column = target.parentNode.cellIndex;
            const row = target.parentNode.parentNode.rowIndex;
            const month = row * 4 + column;

            this.$emit('pick', month);
        }
    }
};

</script>
