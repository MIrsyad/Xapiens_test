import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextComponent, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

class NumberTwo extends Component {
  render() {
    const data = [1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3];

    //bagi menjadi 3 kelompok
    const result = [[], [], []] 
    const average = [[], [], []] 
    const summedArray = [[], [], []] 
    const min = [[], [], []]
    const max = [[], [], []]

    const wordsPerLine = Math.ceil(data.length / 3)
    for (let line = 0; line < 3; line++) {
      for (let i = 0; i < wordsPerLine; i++) {
        const value = data[i + line * wordsPerLine]
        if (!value) continue 
        result[line].push(value)
      }
    }

    // urut besar ke kecil
    for (let index = 0; index < result.length; index++) {
      result[index].sort(function(a, b) {
        return b - a;
      });
    }

    //total tiap kelompok
    for (let index = 0; index < result.length; index++) {
      let sum=0;
      for(let element of result[index]){
        sum=sum+element;
      }
      summedArray[index]=sum;
    }

    //average
    for (let index = 0; index < result.length; index++) {
      average[index] = summedArray[index]/result[index].length;
    }

    //minmax
    for (let index = 0; index < result.length; index++) {
      min[index]=Math.min(...result[index]);
      max[index]=Math.max(...result[index]);
    }

    return (
      <view>
        <Text>{result[0]} </Text>
        <Text>{summedArray[0]} </Text>
        <Text>{average[0]} </Text>
        <Text>{min[0]} </Text>
        <Text>{max[0]} </Text>
      </view>
    );
  }
}

class NumberThree extends Component {
  render() {
    //data
    const data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio.";
    const lower = data.toLowerCase();

    //hitung karakter
    for (let index = 'a'; index <= 'z'; index++) {
      let total=Array.from(lower).map(i => !!~i.indexOf(index))
                .filter(i => i)
                .length;
      <Text>Karakter {index} sebanyak {total}</Text>
    }

    //rubahchar
    let codePoint = [];
    for (let index = 0; index < lower.length; index++) {
      codePoint[index]= lower.charCodeAt(index);
      codePoint[index]=codePoint[index]+5;
      codePoint[index]= String.fromCharCode(codePoint[index]);
    }
    let result= codePoint.join("");
    //menghilangkan % yang tadinya spasi, diganti menjadi spasi kembali supaya mudah terbaca
    result = result.replace(/%/g," ");

    return (
      <view>
       <Text>{result} </Text>
      </view>
    );
  }
} 

class NumberFour extends Component {

  render() {
    const array=[];
    const RandomNumber = Math.floor(Math.random() * 100) + 1 ;

    for (let index = 1; index <= 100; index++) {
      array[index]=index;
    }

    let startIndex = 0;
    let endIndex = 99;
    let count = 0;
    let indexFound;
    while(startIndex <= endIndex) {
      let middleIndex = Math.floor((startIndex + endIndex) / 2);
      if(RandomNumber === array[middleIndex]) {
        count++;
        indexFound=middleIndex;
      }
      if(RandomNumber > array[middleIndex]) {
        count++;
        startIndex = middleIndex + 1;
      }
      if(RandomNumber < array[middleIndex]) {
        count++;
        endIndex = middleIndex - 1;
      }
    console.log("Target ditemukan di index "+indexFound);
    }
    
    return (
      <view>
        <Text>target ditemukan di {indexFound} pada hitungan ke {count}</Text>
      </view>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listView: {
    backgroundColor: '#F5FCFF'
  },
  data: {
    
  },
});

export default NumberFour;