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
import React, { useState, useMemo ,useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { Snackbar, Button, Modal, Portal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../routes';
import { useCart } from '../../context/CartContext';

const HotelScreen = () => {
  const route = useRoute();
  const { hotel } = route.params;
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation();

  // ✅ Use context only
const { cartItems, addToCart, removeOneFromCart, setHotel } = useCart();

  // ✅ Derive quantities from cart
  const countMap = useMemo(() => {
    const map = {};
    for (const item of cartItems) {
      map[item.id] = (map[item.id] || 0) + 1;
    }
    return map;
  }, [cartItems]);

  React.useEffect(() => {
  if (hotel) setHotel(hotel);
}, [hotel]);


  const getQty = id => countMap[id] || 0;

  // ✅ Snackbar state
  const [visible, setVisible] = useState(false);
  const [lastItem, setLastItem] = useState(null);
  const [lastAction, setLastAction] = useState(null);

  // ✅ Bottom sheet state
  const [sheetVisible, setSheetVisible] = useState(false);

  const handleAddToCart = item => {
    addToCart(item);
    setLastItem(item);
    setLastAction('add');
    setVisible(true);
  };

  const handleRemoveFromCart = item => {
    if (getQty(item.id) === 0) return;
    removeOneFromCart(item.id);
    setLastItem(item);
    setLastAction('remove');
    setVisible(true);
  };

  // ✅ Total
  const total = cartItems.reduce((sum, i) => sum + i.price, 0);

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

                {/* RIGHT SIDE IMAGE + COUNTER */}
                <View style={styles.cardRight}>
                  <Image
                    source={{ uri: menuItem.image }}
                    style={styles.menuImage}
                  />
                  <View style={styles.qtyOverlay}>
                    <TouchableOpacity
                      onPress={() => handleRemoveFromCart(menuItem)}
                    >
                      <Text style={styles.qtyText}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.qtyValue}>{getQty(menuItem.id)}</Text>

                    <TouchableOpacity onPress={() => handleAddToCart(menuItem)}>
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

      {/* ✅ Floating "View Cart" */}
      {cartItems.length > 0 && (
        <View style={styles.cartButtonWrapper}>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => {
              setSheetVisible(true);
              setTimeout(() => {
                console.log('cart button');
              }, 1000);
            }}
            activeOpacity={0.8}
          >
            <Text style={styles.cartButtonText}>
              View Cart ({cartItems.length}) • ₹{total}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* ✅ Bottom Sheet */}
      <Portal>
        <Modal
          visible={sheetVisible}
          onDismiss={() => setSheetVisible(false)}
          contentContainerStyle={styles.bottomSheet}
        >
          {/* Restaurant Name */}
          <Text style={styles.sheetHeader}>{hotel.name}</Text>

          {/* Delivery */}
          <View style={styles.deliveryRow}>
            <Text style={styles.deliveryIcon}>⏱</Text>
            <Text style={styles.deliveryText}>Delivery in {hotel.time}</Text>
          </View>

          {/* Cart Items */}
          {Object.entries(countMap).map(([id, qty]) => {
            const item = cartItems.find(i => i.id === id);
            if (!item) return null;
            return (
              <View key={id} style={styles.cartItemRow}>
                <Text style={styles.cartItemText}>
                  {item.name} x{qty}
                </Text>
                <Text style={styles.cartItemPrice}>₹{item.price * qty}</Text>
              </View>
            );
          })}

          {/* Offers */}
          <View style={styles.offerBox}>
            <Text>🏷</Text>
            <Text style={styles.offerText}>Select a Promo code</Text>
          </View>

          {/* Climate Conscious */}
          <View style={styles.climateBox}>
            <Text style={styles.climateText}>
              ✅ Don’t send cutlery, tissues and straws. Thank you for caring
              about the environment.
            </Text>
          </View>

          {/* Totals */}
          <View style={styles.totalRow}>
            <Text style={styles.totalText}>Item Total</Text>
            <Text style={styles.totalText}>₹{total}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.grandTotal}>Grand Total</Text>
            <Text style={styles.grandTotal}>₹{total + 33}</Text>
          </View>

          {/* Place Order Button */}
          <Button
            mode="contained"
            style={styles.orderBtn}
            onPress={() => {
              setSheetVisible(false);
              navigation.navigate(SCREENS.DeliverySummary, {hotel}); // 👈 Navigate to Delivery
            }}
          >
            Place Order
          </Button>
        </Modal>
      </Portal>
    </SafeAreaView>
  );
};

export default HotelScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 100,
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
  // 🔽 Bottom Sheet Styles 🔽
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    maxHeight: '80%',
  },
  sheetHeader: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
    color: '#222',
  },
  deliveryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  deliveryIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  deliveryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d7d46',
  },
  cartItemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cartItemText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginLeft: 10,
  },
  offerBox: {
    marginTop: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  offerText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
  climateBox: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#f1fdf6',
    borderRadius: 12,
  },
  climateText: {
    fontSize: 14,
    color: '#2d7d46',
    fontWeight: '500',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 12,
  },
  totalText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  grandTotal: {
    fontSize: 18,
    fontWeight: '700',
    color: '#e53935',
  },
  orderBtn: {
    marginTop: 16,
    borderRadius: 12,
    paddingVertical: 10,
    backgroundColor: '#e53935',
  },
  cartButtonWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },

  cartButton: {
    backgroundColor: '#E53935', // bold red like Zomato
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },

  cartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
