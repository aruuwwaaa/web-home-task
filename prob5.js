function findSecondLowestAndSecondGreatest(arr) {
    const num = arr.sort();
    return `${num[1]} ${num[num.length - 2]}`;
}
  
  const arr = [1, 2, 3, 4, 5];
  console.log(findSecondLowestAndSecondGreatest(arr));
  
