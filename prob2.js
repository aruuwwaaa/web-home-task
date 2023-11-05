function toUpper(str) {
    const arr = str.split(" ");
    const result = [];
    arr.forEach((element) => {
      result.push(element[0].toUpperCase() + element.slice(1, element.length));
    });
    return result.join(" ");
  }
  
  const str = "the quick brown fox";
  console.log(toUpper(str));