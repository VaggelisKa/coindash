import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const ChartComponent = () => {
  return (
    <LineChart
      data={{
        labels: ['mon', 'tue', 'wed', 'wen', 'fri', 'sat', 'sun'],
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
      yAxisLabel="€"
      yAxisSuffix="k"
      yAxisInterval={1}
      chartConfig={{
        backgroundColor: 'rgba(247, 148, 27, 1)',
        backgroundGradientFrom: '#06225a',
        backgroundGradientTo: '#06225a',
        decimalPlaces: 1,
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
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
        marginRight: 10
      }}
    />
  );
};

export default ChartComponent;
