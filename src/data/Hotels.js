// Hotels.js

const hotels = [
  {
    id: "1",
    featured_image: "https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Makhan Fish and Chicken Corner",
    cuisines: "Asian, Chinese",
    aggregate_rating: 4.5,
    address: "21-A, Near Madaan Hospital, Majitha Road, Basant Nagar, Amritsar",
    smalladdress: "Basant Nagar, Amritsar",
    offer: "₹55 OFF",
    no_of_Delivery: 1200,
    latitude: 12.9716,
    longitude: 77.5946,
    time: "43 min",
    menu: [
      {
        id: "1",
        name: "Amritsari Fish Fry",
        price: 280,
        rating: 4.6,
        description: "A classic dish that feels like a warm hug.",
        badge: "bestseller",
        image: "https://images.unsplash.com/photo-1656389863341-1dfd38ee6edc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "2",
        name: "Chicken Malai Tikka",
        price: 320,
        rating: 4.4,
        description: "Indulge in a culinary delight crafted with the finest ingredients.",
        badge: "Must try",
        image: "https://plus.unsplash.com/premium_photo-1675864532625-60efd11cde54?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "3",
        name: "Butter Chicken",
        price: 350,
        rating: 4.7,
        description : "",
        badge: "chef special",
        image: "https://images.unsplash.com/photo-1728910107534-e04e261768ae?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ]
  },
  {
    id: "2",
    featured_image: "https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name : "Indian Coffee House ",
    cuisines: "The India's Biggest Coffee Hub",
    aggregate_rating: 4.2,
    address: "Sector 29, Near Huda Metro Station, Gurgaon",
    smalladdress: "Sector 29, Gurgaon",
    offer: "₹100 OFF",
    no_of_Delivery: 900,
    latitude: 28.4595,
    longitude: 77.0266,
    time: "32 min",
    menu: [
      {
        id: "1",
        name: "Filter Coffee",
        price: 80,
        rating: 4.8,
        description: "A classic dish that feels like a warm hug.",
        badge: "bestseller",
        image: "https://images.unsplash.com/photo-1587955245893-389f2215c6eb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "2",
        name: "Masala Dosa",
        price: 150,
        rating: 4.5,
        description: "Sometimes the best things are the simplest. Enjoy a timeless favorite.",
        badge: "Must try",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "3",
        name: "Veg Cutlet",
        price: 120,
        rating: 4.3,
        badge: "bestseller",
        image: "https://images.unsplash.com/photo-1598298125619-ac63f5c89d90?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ]
  },
  {
    id: "3",
    featured_image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Domino's Pizza",
    cuisines: "Pizza, Fast Food",
    aggregate_rating: 4.0,
    address: "Shop 12, MG Road, Opposite Metro Station, Bangalore",
    smalladdress: "MG Road, Bangalore",
    offer: "₹75 OFF",
    no_of_Delivery: 2000,
    latitude: 12.9719,
    longitude: 77.6412,
    time: "27 min",
    menu: [
      {
        id: "1",
        name: "Pepperoni Pizza",
        price: 399,
        rating: 4.6,
        badge: "bestseller",
        image: "https://images.unsplash.com/photo-1705537637301-956413896f3c?q=80&w=789&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "2",
        name: "Veggie Supreme",
        price: 349,
        rating: 4.4,
        badge: "Must try",
        image: "https://images.unsplash.com/photo-1681567604770-0dc826c870ae?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "3",
        name: "Cheese Garlic Bread",
        price: 189,
        rating: 4.5,
        badge: "bestseller",
        image: "https://images.unsplash.com/photo-1709203876602-f23c63fff81b?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ]
  },
  {
    id: "4",
    featured_image: "https://images.unsplash.com/photo-1730965804405-1f6a2b5d1068?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Haldiram’s",
    cuisines: "Indian, Street Food",
    aggregate_rating: 4.3,
    address: "Connaught Place, New Delhi",
    smalladdress: "CP, New Delhi",
    offer: "₹50 OFF",
    no_of_Delivery: 1500,
    latitude: 28.6353,
    longitude: 77.2249,
    time: "35 min",
    menu: [
      {
        id: "1",
        name: "Raj Kachori",
        price: 40,
        rating: 4.6,
        badge: "bestseller",
        image: "https://images.unsplash.com/photo-1616787700988-44c85b2ffcf5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "2",
        name: "Pav Bhaji",
        price: 60,
        rating: 4.5,
        badge: "Must try",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "3",
        name: "Chole Bhature",
        price: 180,
        rating: 4.7,
        badge: "chef special",
        image: "https://cdn.s3waas.gov.in/s33416a75f4cea9109507cacd8e2f2aefc/uploads/bfi_thumb/2019082662-olw83cmkaiz8eb77zl4k8owpfszt7qdzuc9ae2gurq.jpg"
      }
    ]
  },
  {
    id: "5",
    featured_image: "https://images.unsplash.com/photo-1720777636417-bc75f5203e38?q=80&w=693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"Kakke di hatti",
    cuisines: "Chicken, Fast Food",
    aggregate_rating: 4.1,
    address: "Forum Mall, Koramangala, Bangalore",
    smalladdress: "Koramangala, Bangalore",
    offer: "₹60 OFF",
    no_of_Delivery: 1800,
    latitude: 12.9352,
    longitude: 77.6245,
    time: "30 min",
    menu: [
      {
        id: "1",
        name: "Tandoori Chicken",
        price: 320,
        rating: 4.6,
        badge: "bestseller",
        image: "https://images.unsplash.com/photo-1628294896516-344152572ee8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "2",
        name: "Chicken Seekh Kebab",
        price: 280,
        rating: 4.5,
        badge: "Must try",
        image: "https://images.unsplash.com/photo-1605908580297-f3e1c02e64ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        id: "3",
        name: "Butter Naan",
        price: 50,
        rating: 4.4,
        badge: "bestseller",
        image: "https://images.unsplash.com/photo-1697155406014-04dc649b0953?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ]
  },
];

export default hotels;
