<template>
  <div class="p-5">
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'PieChart',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    const ctx = this.$refs.chart.getContext('2d');

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Income', 'Expense'],
        datasets: [{
          label: 'Pie Chart',
          data: this.data,
          backgroundColor: [
            '#4dc9f6',
            '#f67019',
          ],
          borderWidth: 0,
        }],
      },
      options: {
        cutoutPercentage: 70,
        legend: {
          position: 'bottom',
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  },
};
</script>