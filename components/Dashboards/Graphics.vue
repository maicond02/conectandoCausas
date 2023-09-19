
<template>
    <div>
        <Card class="card-container">
            <template #content>
                <div class="grid">
                    <div class="col-3">
                        <Card class="card-graphic">
                            <template #content>
                                <div class="card">
                                    <Chart type="bar" :data="chartData" :options="chartOptions" />
                                </div>
                            </template>
                        </Card>
                    </div>
                    <div class="col-3">
                        <Card class="card-graphic">
                            <template #content>
                                <div class="card">
                                    <Chart type="bar" :data="chartData" :options="chartOptions" />
                                </div>
                            </template>
                        </Card>
                    </div>
                    <div class="col-3">
                        <Card class="card-graphic">
                            <template #content>
                                <div class="card">
                                    <Chart type="bar" :data="chartData" :options="chartOptions" />
                                </div>
                            </template>
                        </Card>
                    </div>
                    <div class="col-3">
                        <Card class="card-graphic">
                            <template #content>
                                <div class="card">
                                    <Chart type="bar" :data="chartData" :options="chartOptions" />
                                </div>
                            </template>
                        </Card>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [
                    {
                        label: 'Sales',
                        data: [540, 325, 702, 620],
                        backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                        borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                        borderWidth: 1
                    }
                ]
            },
            chartOptions: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };
    }
};
</script>

<style scoped>
    .card-container{
        background-color: transparent !important;
    }
    .card-graphic{
        background-color:white;
    }
</style>