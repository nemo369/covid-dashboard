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
                data: revresed.map((data) => data.confirmed_cases),
                label: 'Confirmed Cases',
                borderColor: '#1e6f20',
                fill: false,
                },
            ],
            }}
        />
        </div>
     );
}
 
export default Chart;