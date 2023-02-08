// https://www.codewars.com/kata/rgb-to-hex-conversion÷

function rgb(r, g, b) {
  let arr = [r, g, b];
  const newArr = arr.map(function (el) {
    el = el < 0 ? 0 : el;
    el = el > 255 ? 255 : el;
    // el = Math.max(0, Math.min(el, 255));
    el = el.toString(16).padStart(2, "0");
    console.log(el);
  });
  console.log(newArr.join("").toUpperCase());
}

rgb(173, 255, 7);

// const rgb = (...rgb) => rgb.map((n) => Math.max(0, Math.min(n, 255)).toString(16).padStart(2, '0')).join("").toUpperCase();