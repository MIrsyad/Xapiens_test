import React, { Component } from 'react';
import { StyleSheet, Text,  View  } from 'react-native';

class NumberOne extends Component {
  render() {
    const number = 1234567;
    const arr = `${number}`.split('');
    return (
      <View>
        {arr.map((char, key) => (
          <Text>
            {char}
            {'0'.repeat(arr.length - (key + 1))}
          </Text>
        ))}
      </View>
    );
  }
}

class NumberTwo extends Component {
  render() {
    const data = [1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3];

    //bagi menjadi 3 kelompok
    const result = [[], [], []] 
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
    const summedArray = [[], [], []] 
    for (let index = 0; index < result.length; index++) {
      let sum=0;
      for(let element of result[index]){
        sum=sum+element;
      }
      summedArray[index]=sum;
    }

    //average
    const average = [[], [], []] 
    for (let index = 0; index < result.length; index++) {
      average[index] = summedArray[index]/result[index].length;
    }

    //minmax
    const min = [[], [], []]
    const max = [[], [], []]
    for (let index = 0; index < result.length; index++) {
      min[index]=Math.min(...result[index]);
      max[index]=Math.max(...result[index]);
    }

    return (
      <View style={{alignItems: 'center'}}>

        <Text>sorted: {result[0]} |</Text>
        <Text>sum: {summedArray[0]} |</Text>
        <Text>average: {average[0]} |</Text>
        <Text>min: {min[0]} |</Text>
        <Text>max: {max[0]} {"\n"}</Text>
        <Text>sorted: {result[1]} |</Text>
        <Text>sum: {summedArray[1]} |</Text>
        <Text>average: {average[1]} |</Text>
        <Text>min: {min[1]} |</Text>
        <Text>max: {max[1]} {"\n"}</Text>
        <Text>sorted: {result[2]} |</Text>
        <Text>sum: {summedArray[2]} |</Text>
        <Text>average: {average[2]} |</Text>
        <Text>min: {min[2]} |</Text>
        <Text>max: {max[2]} {"\n"}</Text>
      </View>
    );
  }
}

class NumberThree extends Component {
  render() {
    //data
    const data =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio.';
    const lower = data.toLowerCase();

    //hitung karakter
    var alphabets = {};

    for (let index = 'a'.charCodeAt(0); index <= 'z'.charCodeAt(0); index++) {
      let total = Array.from(lower)
        .map((i) => !!~i.indexOf(String.fromCharCode(index)))
        .filter((i) => i).length;

      alphabets[String.fromCharCode(index)] = total;
    }

    //rubahchar
    let codePoint = [];
    for (let index = 0; index < lower.length; index++) {
      codePoint[index] = lower.charCodeAt(index);
      codePoint[index] = codePoint[index] + 5;
      codePoint[index] = String.fromCharCode(codePoint[index]);
    }
    let result = codePoint.join('');
    //menghilangkan % yang tadinya spasi, diganti menjadi spasi kembali supaya mudah terbaca
    result = result.replace(/%/g, ' ');

    return (
      <View>
        {Object.keys(alphabets).map((alphabet) => (
          <Text>{`Karakter ${alphabet.toUpperCase()} sebanyak ${
            alphabets[alphabet]
          } kali`}</Text>
        ))}

        <Text style={{ marginTop: 12 }}>{result}</Text>
      </View>
    );
  }
}

class NumberFour extends Component {
    
  render() {

    let min = 0;
    let max = 100;
    const RandomNumber = Math.floor(Math.random()*100);
    let count = 0;
    let indexFound;
    
    while(min < max) {
      let middleIndex = Math.floor((min + max) / 2);
      if(RandomNumber === middleIndex) {
        count++;
        indexFound=middleIndex;
        break;
      }
      if(RandomNumber > middleIndex) {
        count++;
        min = middleIndex + 1;
      }
      if(RandomNumber < middleIndex) {
        count++;
        max = middleIndex - 1;
      }
    console.log("Target ditemukan di index "+indexFound);
    }
    
    return (
      <View>
        <Text>{RandomNumber}</Text> 
        <Text>target ditemukan pada hitungan ke {count}</Text>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default NumberFour;