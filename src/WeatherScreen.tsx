import React from 'react';
import { View, Text } from 'react-native';

const WeatherScreen = () => {

  let weatherArray = [];

  const compareTime = (data) => {
    let i = 0;


    while (i < data["list"].length) {

      let compareDate = new Date();
      compareDate.setDate(compareDate.getDate()  + i);
      compareDate.setHours(13, 0, 0);
      compareDate.setMilliseconds(0);

      // console.log(i);
      // let date = new Date(data["list"][i].dt * 1000)
      // console.log(date);
      
      console.log(compareDate.getTime());
      console.log(data["list"][i].dt * 1000);


      if ((data["list"][i].dt * 1000) === compareDate.getTime()) {
        console.log(data["list"][i].dt);
        console.log(data["list"][i]["main"]["temp"]);
        weatherArray.push(data["list"][i]["main"]["temp"]);

      }
      i++;
      //console.log(weatherArray);
    }
  }

  fetch("http://api.openweathermap.org/data/2.5/forecast?zip=GL51,GB&appid=12dd7ca9ea3ee83b8905ec822844bcd1")
    .then(response => response.json())
    .then((data) => {
      //console.log(data["list"][0].dt);
      compareTime(data);
    })
    .catch((error) => {
      console.error(error)
    })

  return (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }}>
      <Text>Page 2</Text>
      <Text>Temperature this week will be ...</Text>
      <ul>
        {weatherArray}
      </ul>
    </View>
  )
};

export default WeatherScreen;