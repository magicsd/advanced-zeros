module.exports = function getZerosCount(number, base) {
    const simpleNum = []; // простые числа
    for (let i = 2; i <= 256; i++) {
      let f = 0;
      for (let j = 2; j < i ; j++) {
        if (i % j === 0) f++;
      }
      if (f === 0) simpleNum.push(i);
    }

    let dividers = {}; // делители base
    for (let i = 0; i < simpleNum.length; i++) {
      let b = base;
      for (let j = 1; b > 1; j++) {
        if (b % simpleNum[i] === 0) {
          dividers[simpleNum[i]] ? dividers[simpleNum[i]]++ : dividers[simpleNum[i]] = 1;
        } else {break};
        b = b/simpleNum[i];
      }
    }

    let zeros = {};
    for (div in dividers) {
      zeros[div] = 0;
      for (let i = 1; Math.floor(number / Math.pow(div, i)) > 0; i++) {
        zeros[div] += Math.floor(number / Math.pow(div, i));
      }
    }

    let arr = [];
    for (key in zeros) {
      arr.push(zeros[key]);
    }
    return Math.min(...arr);
}
