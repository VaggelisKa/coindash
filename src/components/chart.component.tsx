import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const ChartComponent = () => {
  return (
    <LineChart
      data={{
        labels: ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
          }
        ]
      }}
      width={Dimensions.get('window').width - 25}
      height={330}
      fromZero
      segments={7}
      onDataPointClick={({ index }) => console.log(index)}
      yAxisLabel="€"
      yAxisSuffix="k"
      chartConfig={chartConfiguration}
      style={{
        marginVertical: 8,
        borderRadius: 16,
        marginRight: 10
      }}
    />
  );
};

const chartConfiguration = {
  backgroundColor: 'rgba(247, 148, 27, 1)',
  backgroundGradientFrom: '#06225a',
  backgroundGradientTo: '#06225a',
  decimalPlaces: 2,
  color: () => `rgba(247, 148, 27, 1)`,
  labelColor: () => `#fff`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726'
  }
};

export default ChartComponent;
