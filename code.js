//APPROACH 1
// const calcMaxMin = (arr, k) => {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     for (let j = i + 1; j <= arr.length - 1; j++) {
//       if (arr[i] > arr[j]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//   }
//   let maxSum = 0;
//   let minSum = 0;

//   let valofK = k;

//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (valofK === 0) {
//       minSum += arr[i];
//     } else {
//       valofK--;
//     }
//   }
//   valofK = k;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     console.log(arr[i]);
//     if (valofK === 0) {
//       maxSum += arr[i];
//     } else {
//       console.log("testdata");
//       valofK--;
//     }
//   }

//   console.log(minSum, maxSum);

//   return [maxSum, minSum];
// };

//APPROACH 2
// const calcMaxMin = (arr, k) => {
//   let totalSum = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     totalSum += arr[i];
//     for (let j = i + 1; j <= arr.length - 1; j++) {
//       if (arr[i] > arr[j]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//   }

//   let minSum = 0;
//   let maxMinus = 0;
//   //SETTING MAX
//   for (let i = 0; i < k; i++) {
//     maxMinus += arr[i];
//   }
//   //SETING MIN
//   for (let i = 0; i <= arr.length - (k + 1); i++) {
//     minSum += arr[i];
//   }
//   let maxSum = totalSum - maxMinus;
//   return [maxSum, minSum];
// };

// console.log(calcMaxMin([1, 2, 3, 4, 5], 3));

// REDUX TOOLKIT SETUP - CART FUNCTIONALITY
// CLASS COMPONENT SETUPS
// API FETCH OLD WAY NEW WAY
// ZUSTAND
