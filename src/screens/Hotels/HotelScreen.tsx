import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useMemo } from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { useCart } from '../../context/CartContext';
import { Snackbar } from 'react-native-paper';

const HotelScreen = () => {
  const route = useRoute();
  const { hotel } = route.params;
  const screenWidth = Dimensions.get('window').width;

  // ✅ Use context only
  const { cartItems, addToCart, removeOneFromCart } = useCart();

  // ✅ Derive quantities from cart
  const countMap = useMemo(() => {
    const map = {};
    for (const item of cartItems) {
      map[item.id] = (map[item.id] || 0) + 1;
    }
    return map;
  }, [cartItems]);

  const getQty = id => countMap[id] || 0;

  // ✅ Snackbar state
  const [visible, setVisible] = useState(false);
  const [lastItem, setLastItem] = useState(null);
  const [lastAction, setLastAction] = useState(null);

  const handleAddToCart = item => {
    addToCart(item);
    setLastItem(item);
    setLastAction('add');
    setVisible(true);
  };

  const handleRemoveFromCart = item => {
    if (getQty(item.id) === 0) return; // nothing to remove
    removeOneFromCart(item.id);
    setLastItem(item);
    setLastAction('remove');
    setVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Hero Image */}
        <Image
          source={{ uri: hotel.featured_image }}
          style={styles.heroImage}
        />

        {/* Info Section */}
        <View style={styles.infoContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{hotel.name}</Text>
            <Text style={styles.cuisines}>{hotel.cuisines}</Text>
            <Text style={styles.address}>{hotel.smalladdress}</Text>
          </View>

          {/* Right Side Badges */}
          <View style={styles.badgeContainer}>
            <Text style={styles.ratingBadge}>⭐ {hotel.aggregate_rating}</Text>
            <Text style={styles.photoBadge}>📷 30+ Photos</Text>
          </View>
        </View>

        {/* Quick Info Row */}
        <View style={styles.quickInfoRow}>
          <View style={styles.quickInfoBox}>
            <Text style={styles.quickTitle}>🚴 Mode</Text>
            <Text style={styles.quickValue}>Delivery</Text>
          </View>
          <View style={styles.quickInfoBox}>
            <Text style={styles.quickTitle}>⏱ Time</Text>
            <Text style={styles.quickValue}>{hotel.time}</Text>
          </View>
          <View style={styles.quickInfoBox}>
            <Text style={styles.quickTitle}>🎁 Offers</Text>
            <Text style={styles.quickValue}>{hotel.offer}</Text>
          </View>
        </View>

        {/* Extra Details */}
        <View style={styles.extraDetails}>
          <Text style={styles.delivery}>
            {hotel.no_of_Delivery}+ successful deliveries 🚀
          </Text>
          <Text style={styles.fee}>₹30 additional distance fee (if far)</Text>
        </View>

        {/* Menu List */}
        <View style={styles.menu}>
          <FlatList
            data={hotel.menu}
            keyExtractor={menuItem => menuItem.id}
            renderItem={({ item: menuItem }) => (
              <View style={styles.card}>
                {/* LEFT SIDE INFO */}
                <View style={styles.cardInfo}>
                  <Text style={styles.menuTitle}>{menuItem.name}</Text>
                  <Text style={styles.menuDescription}>
                    {menuItem.description || 'Delicious and freshly prepared'}
                  </Text>
                  <Text style={styles.menuPrice}>₹{menuItem.price}</Text>
                  <Text style={styles.menuRating}>{menuItem.rating}⭐</Text>
                </View>

                {/* RIGHT SIDE IMAGE + COUNTER OVERLAY */}
                <View style={styles.cardRight}>
                  <Image
                    source={{ uri: menuItem.image }}
                    style={styles.menuImage}
                  />
                  {/* Overlay Counter */}
                  <View style={styles.qtyOverlay}>
                    <TouchableOpacity
                      onPress={() => handleRemoveFromCart(menuItem)}
                    >
                      <Text style={styles.qtyText}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.qtyValue}>
                      {getQty(menuItem.id)}
                    </Text>

                    <TouchableOpacity
                      onPress={() => handleAddToCart(menuItem)}
                    >
                      <Text style={styles.qtyText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>

      {/* ✅ Snackbar */}
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={600}
        action={{
          label: 'Undo',
          onPress: () => {
            if (!lastItem || !lastAction) return;
            if (lastAction === 'add') {
              removeOneFromCart(lastItem.id);
            } else if (lastAction === 'remove') {
              addToCart(lastItem);
            }
            setLastItem(null);
            setLastAction(null);
          },
        }}
        style={styles.snackbar}
      >
        {lastAction === 'add'
          ? 'Item added to cart!'
          : 'Item removed from cart!'}
      </Snackbar>
    </SafeAreaView>
  );
};

export default HotelScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroImage: {
    width: '90%',
    height: 200,
    borderRadius: 16,
    alignSelf: 'center',
    marginVertical: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    marginBottom: 4,
  },
  cuisines: {
    fontSize: 15,
    color: '#777',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: '#555',
  },
  badgeContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  ratingBadge: {
    backgroundColor: 'green',
    color: '#fff',
    fontWeight: '600',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 6,
  },
  photoBadge: {
    backgroundColor: 'deeppink',
    color: '#fff',
    fontWeight: '600',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  quickInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
    paddingHorizontal: 8,
  },
  quickInfoBox: {
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 12,
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 6,
    elevation: 2,
  },
  quickTitle: {
    fontSize: 13,
    color: '#666',
    marginBottom: 4,
  },
  quickValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
  },
  extraDetails: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eae7e7ff',
    backgroundColor: '#f8f8f8',
    marginHorizontal: 8,
    marginTop: 10,
    borderRadius: 8,
  },
  delivery: {
    fontSize: 15,
    color: '#444',
    marginBottom: 4,
  },
  fee: {
    fontSize: 13,
    color: '#888',
  },
  menu: {
    paddingHorizontal: 16,
    marginTop: 12,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  cardInfo: {
    flex: 1,
    paddingRight: 12,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  menuDescription: {
    fontSize: 14,
    color: '#777',
    marginBottom: 6,
  },
  menuPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  cardRight: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  menuRating: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
  },
  qtyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: 6,
  },
  qtyValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 4,
  },
  qtyOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 2,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  snackbar: {
    backgroundColor: '#245c5aff',
    borderRadius: 8,
  },
});
