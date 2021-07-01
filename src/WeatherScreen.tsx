import React from 'react';
import { View, Text } from 'react-native';

const WeatherScreen = () => {

  const tempArray = [];

  fetch("http://api.openweathermap.org/data/2.5/forecast?zip=GL51,GB&appid=12dd7ca9ea3ee83b8905ec822844bcd1")
    .then(response => response.json())
    .then((data) => {
      //let weatherData = data
      //console.log(data["list"][0].dt);


      let nextDay = new Date();
      nextDay.setDate(nextDay.getDate() + 1);
      nextDay.setHours(12, 0, 0)
      nextDay.getTime() / 1000;

      let i = 0;
      while (i < 7) {
        //console.log(nextDay);
        if ((data["list"][i].dt) === nextDay) {
          tempArray.push(data["list"][i]["main"]["temp"]);

        }
        i++;
        console.log(tempArray);
      }


    })
    .catch((error) => {
      console.error(error)
    })
  // console.log(tempArray);


  return (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }}>
      <Text>Page 2</Text>
      <Text>Temperature this week will be ...</Text>
      {/* <ul>
        {tempArray}
      </ul> */}
    </View>
  )
};

export default WeatherScreen;