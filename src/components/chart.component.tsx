import { AppContext } from 'context/AppContextProvider';
import React, { useContext } from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const ChartComponent = () => {
  const { historicalData } = useContext(AppContext);

  const formatValue = (value: number): string => {
    if (value < 10) {
      return value.toString();
    }
    return value.toFixed(0);
  };

  const labelFormat = (): string[] => {
    const labelArr: string[] = [];

    if (historicalData.length === 7) {
      for (let i = 7; i > 0; i--) {
        if (i == 1) {
          labelArr.push('Today');
          break;
        }
        const label = `${i}d`;
        labelArr.push(label);
      }
    } else {
      for (let i = historicalData.length; i > 0; i--) {
        if (i == 1) {
          labelArr.push('Tod');
          break;
        }
        const label = `${i}m`;
        labelArr.push(label);
      }
    }

    return labelArr;
  };

  return (
    <LineChart
      data={{
        labels: labelFormat(),
        datasets: [
          {
            data: historicalData,
          }
        ]
      }}
      width={Dimensions.get('window').width - 25}
      height={330}
      formatYLabel={(yValue) => formatValue(+yValue)}
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
  decimalPlaces: 5,
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
