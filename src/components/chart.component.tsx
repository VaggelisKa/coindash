import { AppContext } from 'context/AppContextProvider';
import React, { useContext } from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const ChartComponent = () => {
  const { historicalData } = useContext(AppContext);

  return (
    <LineChart
      data={{
        labels: ['6d', '5d', '4d', '3d', '2d', '1d', 'today'],
        datasets: [
          {
            data: historicalData,
          }
        ]
      }}
      width={Dimensions.get('window').width - 25}
      height={330}
      onDataPointClick={({ index }) => console.log(index)}
      yAxisLabel="€"
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
