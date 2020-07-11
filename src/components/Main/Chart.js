import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({countries}) => {
    const revresed = [...countries].reverse()
    return ( 
        <div>
            <Line
            data={{
            labels: revresed.map(({ countries_and_territories }) => countries_and_territories),
            datasets: [
                {
                data: revresed.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: '#3333ff',
                fill: true,
                },
                {
                data: revresed.map((data) => data.daily_confirmed_cases),
                label: 'Daily Confirmed Cases',
                borderColor: '#1e6f20',
                fill: false,
                },
                {
                data: revresed.map((data) => data.increaseRate),
                label: 'Increase Rate',
                borderColor: '#e44ac6',
                fill: false,
                },
            ],
            }}
        />
        </div>
     );
}
 
export default Chart;