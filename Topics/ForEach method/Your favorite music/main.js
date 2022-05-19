const music = ["rock", "pop", "hip-hop", "electronic"];

function myFavoriteMusic (music) {
  function printEach (mType, _, mArray) {
    console.log('My favorite music is ' + mType + ' choosing from ' + mArray);
  }
  music.forEach(printEach);
}
