import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

import { sharedStyles } from 'components/coin-overview.component';
import { AppContext } from 'context/AppContextProvider';
import { VerticalAxis, HorizontalAxis, Area, Line, Chart, Tooltip } from 'react-native-responsive-linechart';

const CoinSpotlight: React.FC = () => {
  const { selectedFavorite } = useContext(AppContext);

  const data = [
    { x: 0, y: 0 },
    { x: 1, y: 7 },
    { x: 2, y: 6 },
    { x: 3, y: 8 },
    { x: 4, y: 10 },
    { x: 5, y: 8 },
    { x: 6, y: 12 },
    { x: 7, y: 14 },
    { x: 8, y: 12 },
    { x: 9, y: 13.5 },
    { x: 10, y: 18 },
    { x: 11, y: 19 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: `http://cryptocompare.com/${selectedFavorite?.ImageUrl}`}} style={styles.image} />
      <Text style={styles.titleText}>{selectedFavorite?.FullName}</Text>
      <View style={styles.chartWrapper}>
        <Chart
          style={styles.chartStyles}
          data={data}
          padding={{ left: 40, bottom: 20, right: 10, top: 20 }}
          xDomain={{ min: 0, max: 11 }}
          yDomain={{ min: 0, max: 20 }}
        >
          <VerticalAxis
            tickCount={11}
            theme={{
              labels: {label: { fontSize: 13, color: '#fff', rotation: 100}, visible: true},
              ticks: { stroke: { color: '#fff', width: 2} },
            }}
          />
          <HorizontalAxis
            tickCount={11}
            theme={{
              labels: {label: { fontSize: 13, color: '#fff', rotation: 70}, formatter: (v: number) => v.toFixed(1), visible: true},
              grid: {visible: false},
              ticks: { stroke: { color: '#fff', width: 2} },
            }}
          />
          <Area
            theme={
              {
                gradient: {
                  from: { color: '#f7941b' },
                  to: { color: '#ffa502', opacity: 0.2 }
                }
              }
            }
          />
          <Line
            tooltipComponent={<Tooltip />}
            smoothing="cubic-spline"
            data={data}
            theme={
              {
                stroke: { color: '#f7941b', width: 4 },
                scatter: { default: { width: 2, height: 2, rx: 2 }}
              }
            }
          />
        </Chart>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...sharedStyles,
    marginBottom: 10,
    paddingBottom: 150,
    flexGrow: 1.8
  },
  titleText: {
    color: '#fff',
    paddingLeft: 5,
    alignSelf: 'center',
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  image: {
    marginTop: 5,
    height: 60,
    width: 60,
    borderRadius: 60/2,
    alignSelf: 'center'
  },
  chartWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  chartStyles: {
    paddingTop: 30,
    width: '100%',
    height: 330,
    marginLeft: 50,
  }
});

export default CoinSpotlight;
