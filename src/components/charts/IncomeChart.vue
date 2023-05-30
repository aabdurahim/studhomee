<template>
  <div class="w-full h-96">
    <canvas ref="myChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.myChart.getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Profit',
              data: [100, 150, 200, 300, 250, 400, 450],
              borderColor: 'green',
              fill: false
            },
            {
              label: 'Expenses',
              data: [80, 100, 150, 200, 180, 220, 280],
              borderColor: 'red',
              fill: false
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }
  }
}
</script>