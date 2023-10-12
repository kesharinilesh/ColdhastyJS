//Sum to 100

// function sumto100(){
//   let sum = 0;
//   for(let i = 1; i <= 100; i++){
//     sum += i;
//     console.log(sum)
//   }
// }
// sumto100()


// fibonacci

// function fibonacci(n){
//   let arr = [0, 1];
//   for(let i = 2; i < n + 1; i++){
//     arr.push(arr[i - 2] + arr[i -1])
//   }
//   return arr[n]
// }
// let ans=fibonacci(6)
// console.log(ans)

// pattern

// function starPattern(n){
//   chr='*'
//   for(let i=1; i<n+1; i++){
//     console.log(chr)
//     chr+='*'
//   }
// }
// starPattern(6)

// pyramidpattern

// function pyramidPattern(rows){
//   for (let i = 1; i <= rows; i++) {
//     let spaces = ' '.repeat(rows - i);
//     let stars = '*'.repeat(2 * i - 1);
//     console.log(spaces + stars);
//   }
// }
// pyramidPattern(6)

// More  pattern problems

// ******
// *    *
// *    *
// *    *
// *    *
// ******

// function singleCompleteLine(n){
//   str=''
//   for(let i=0;i<n;i++){
//     str+='*'
//   }
//   console.log(str)
// }
// // singleCompleteLine(6)

// function middleLine(n){
//   str=''
//   str+='*'
//   for(let i=0;i<n-2;i++){
//     str+=' '
//   }
//   str+='*'
//   console.log(str)
// }
// // middleLine(6)
// function wholePattern(n){
//   singleCompleteLine(n)
//   for(let i=0;i<n-2;i++){
//     middleLine(n)
//   }
//   singleCompleteLine(n)
// }
// wholePattern(6)



