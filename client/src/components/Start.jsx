import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Star = ({ filled, onPress }) => (
  <Icon
    name={filled ? 'star' : 'star-o'}
    onPress={onPress}
    size={30}
    color="#FFD64C"
  />
);

const Rating = () => {
  const [rating, setRating] = useState(3.5);

  const handleRating = (value) => {
    setRating(value);
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        filled={i <= rating}
        onPress={() => handleRating(i)}
      />
    );
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.stars}>{stars}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginRight: 10,
    fontSize: 16,
  },
  stars: {
    flexDirection: 'row',
  },
});

export default Rating;
