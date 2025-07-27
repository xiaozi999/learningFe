//第一个Promise链
Promise.resolve().then(() => {//1
  console.log(0);
  return Promise.resolve(4)
}).then((res) => {//2
  console.log(res)
})

Promise.resolve().then(() => {//3
  console.log(1);
}).then(() => {//4
  console.log(2);
}).then(() => {//5
  console.log(3);
}).then(() => {//6
  console.log(5);
}).then(() => {//7
  console.log(6);
})