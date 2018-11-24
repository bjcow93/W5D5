const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function absurdBubbleSort(arr, sortCompletionCallback) {

}

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}? `, function (answer) {
    if (answer === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i = 0, madeAnySwaps = false) {
  if (i === arr.length - 1) {
    // outerBubbleSortLoop(madeAnySwaps);
    return arr;
  }
//
  askIfGreaterThan(arr[i], arr[i+1], function (isGreaterThan) {
      reader.close();
      let num1 = arr[i];
      let num2 = arr[i+1];
      if (isGreaterThan === true) {
        arr[i] = num2;
        arr[i+1] = num1;
        madeAnySwaps = true;
        console.log(arr);
      }

      innerBubbleSortLoop(arr, i+1, madeAnySwaps);

    }
  );


}

  innerBubbleSortLoop([3,1,2,5,10,7,1], 0, false);

  // askIfGreaterThan(1, 2, test);
  //
  // function test(value) {
  //   reader.close();
  //   if (value === true) {
  //     return console.log('swapped');
  //   }
  //   return console.log('not swapped');
  // }
