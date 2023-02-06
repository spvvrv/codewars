//https://www.codewars.com/kata/59752e1f064d1261cb0000ec/train/javascript

var whatTimeIsIt = function(angle) {
  const time = Math.floor(angle * 2);
  const hours = Math.floor(time / 60)
  const minutes = time - (hours * 60);
  const hoursTitle = (hours === 0) ? 12 : (hours < 10) ? `0${hours}` : hours;
  const minutesTitle = (minutes < 10) ? `0${minutes}` : minutes;

  return `${hoursTitle}:${minutesTitle}`;
}