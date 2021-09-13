import Chart from 'react-apexcharts';
const BarChart = () => {
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Alleen', 'Kal', 'Logan', 'unnamed']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.5, 68.2, 62.3, 70., 45.3]
            }
        ]
    };

    return (
        <Chart
            options={{ ...options, xaxis: mockData.labels }}
            series={mockData.series}
            type="bar"
            height="240"
        />

    );
}

export default BarChart;
