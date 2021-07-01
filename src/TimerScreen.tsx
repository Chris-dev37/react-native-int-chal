import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const TimerScreen = () => {

  const [count, setCount] = useState(10);
  const [disable, setDisable] = useState(false);

  const startCount = () => {
    setDisable(true);
  };
  
  useEffect(() => {
    if (count > 0 && disable) {
      setTimeout(() => setCount(count - 1), 1000);
    } else {
      setCount(10);
      setDisable(false);
    }

  });
  return (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }}>
      <Text>Page 1</Text>
      <Button title="Press me" onPress={startCount} disabled={disable} />
      <Text>{count}</Text>
    </View>
  )
};

export default TimerScreen;
