import React, { useRef, useState, useEffect } from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";

const { width } = Dimensions.get("window");

const banners = [
    { id: "1", img: { uri: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" } },
    { id: "2", img: { uri : "https://imgs.search.brave.com/Dz7MdN_b8DEkf5beSlZLLa3tUti_A29ja1pgAjL_EXg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Z3JhYm9uLmluL2dv/Z3JhYm9uL2ltYWdl/cy93ZWItaW1hZ2Vz/L3VwbG9hZHMvMTY1/ODkxOTIzODgxMC96/b21hdG8tY291cG9u/cy5qcGc"} },
    { id: "3", img: { uri : "https://imgs.search.brave.com/o0cpCkIWsFjv-IobK9APxMz25-6sqmfFfIs4qq7Apc4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YzLzQ5/L2UzL2YzNDllMzYx/ZTA0NDgwY2U3MGM0/YzlkNjAxNGJkOWEy/LmpwZw"} },
];

export default function SlidingBanner() {
  const pagerRef = useRef(null);
  const [page, setPage] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      let nextPage = (page + 1) % banners.length;
      pagerRef.current?.setPage(nextPage);
      setPage(nextPage);
    }, 3000);

    return () => clearInterval(interval);
  }, [page]);

  return (
    <View style={styles.container}>
      <PagerView
        ref={pagerRef}
        style={styles.pager}
        initialPage={0}
        onPageSelected={(e) => setPage(e.nativeEvent.position)}
      >
        {banners.map((item) => (
          <View key={item.id} style={styles.page}>
            <Image source={item.img} style={styles.image} />
          </View>
        ))}
      </PagerView>

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {banners.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, page === i && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 200 },
  pager: { flex: 1 },
  page: { width, justifyContent: "center", alignItems: "center" },
  image: { width: "100%", height: 200, resizeMode: "cover" },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: "#ccc",
  },
  activeDot: {
    backgroundColor: "#000",
  },
});
