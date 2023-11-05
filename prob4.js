function vowelsCount(str){
    const vowelsCount = "aeiouy";
    let count = 0;
    const arr = str.split("");
    arr.forEach((element) => {
        if (vowelsCount.includes(element)) {
          ++count;
        }
      });
      return count;
    }
    
    const str = "The quick brown fox";
    console.log(vowelsCount(str));
