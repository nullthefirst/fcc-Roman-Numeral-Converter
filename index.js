// add multiples of 0 to number character
function multipleString(char, reps) {
  let charSet = '';
  
    for (let i = 1; i <= reps; i++) {
      charSet += char;
    } 
  
    return charSet;
}

// conversion to roman numerals
function convertToRoman(num) {
  
  // add numbers to array in reverse
  let numberHolder = [];
  
  const numberStringBucket = `${num}`.split('');
  
  for (let i = numberStringBucket.length - 1; i >= 0; i--) {
    numberHolder.push(numberStringBucket[i]);
  }

  // add multiples of zero to numbers based off array position
  const numberHolderMultiples = [];

  const multiples = '0';

  for (let int in numberHolder) {
    if (int === '0') {
      numberHolderMultiples.push(numberHolder[int]);
    } else {
      numberHolderMultiples.push(
        numberHolder[int] += multipleString(
          multiples, 
          int
        )
      );
    }
  }

  // clean array of elements evaluated as zero integers
  const numberMultiplesRaw = [];

  for (let int of numberHolderMultiples) {
    if (parseInt(int) !== 0) {
      numberMultiplesRaw.push(int);
    }
  }

  // reverse array to have logical order
  const numberMultiples = numberMultiplesRaw.reverse();

  console.log(numberMultiples);
}

convertToRoman(7204);