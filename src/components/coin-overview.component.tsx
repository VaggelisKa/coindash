import { AppContext } from 'context/AppContextProvider';
import { Coin } from 'models/models';
import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Spinner from './spinner.component';

interface Props {
  item: Coin,
  topSection: boolean
}

const CoinOverview: React.FC<Props> = ({ item, topSection }: Props) => {
  const { setFavoriteCoins, removeFavoriteCoin, isInFavorites } = useContext(AppContext);
  const {
    CoinName,
    Symbol,
    ImageUrl
  } = item;


  const onPress = (coin: Coin) => {
    if (topSection) {
      removeFavoriteCoin(coin);
    } else {
      setFavoriteCoins(coin);
    }
  };

  return (
    <TouchableOpacity onPress={() => onPress(item)} style={styles.container}>
      <View style={topSection ? styles.topSection : styles.bottomContainer}>
        {
        topSection ? null : <Text style={styles.coinSymbol}>{Symbol}</Text>
        }
        <Text style={styles.coinName}>{CoinName}</Text>
        {
        ImageUrl ? <Image source={{uri: `http://cryptocompare.com/${ImageUrl}`}} style={styles.image} />
                  : <Spinner />
        }
      </View>
    </TouchableOpacity>
  );
};

const sharedStyles = {
  flex: 1,
  margin: 7,
  paddingTop: 5,
  paddingHorizontal: 5,
  backgroundColor: '#06215a',
  shadowColor: '#121d5b',
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.50,
  shadowRadius: 12.35,
  elevation: 19,
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: '100%'
  },
  bottomContainer: {
    ...sharedStyles as Object,
    alignItems: 'flex-start',
    paddingBottom: 20
  },
  topSection: {
    ...sharedStyles as Object,
    paddingBottom: 7,
    alignItems: 'center',
  },
  coinName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  coinSymbol: {
    position: 'absolute',
    flex: 1,
    color: '#fff',
    fontSize: 12,
    alignSelf: 'flex-end',
  },
  image: {
    marginTop: 15,
    height: 70,
    width: 70,
    borderRadius: 70/2
  }
});


export default React.memo(CoinOverview);
