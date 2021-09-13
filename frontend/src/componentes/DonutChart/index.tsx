import Chart from 'react-apexcharts';

const DonutChart = () => {

    const mockData = {
        series: [431225, 682245, 623453, 704785, 457457],
        labels: ['Anakin', 'Barry Alleen', 'Kal', 'Logan', 'unnamed']        
    }

    const options = {
        legend: {
            show:true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: mockData.labels }}
            series={mockData.series}
            type="donut"
            height="240"
        />

    );
}

export default DonutChart;
