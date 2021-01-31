exports.min = function min(array) {
  let minnummber;
  if ((!array) || (array.length === 0)) return 0;
  minnummber = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < minnummber) { minnummber = array[i]; }
  }
  return (minnummber);
}

exports.max = function max(array) {
  let maxnummber;
  if ((!array) || (array.length === 0)) return 0;
  maxnummber = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > maxnummber) { maxnummber = array[i]; }
  }
  return (maxnummber);
}

exports.avg = function avg(array) {
  let avgnumber = 0;
  if ((!array) || (array.length === 0)) return 0;
  for (var i = 0; i < array.length; i++) {
    avgnumber = avgnumber + array[i];
  }
  avgnumber = avgnumber / array.length;

  return (avgnumber);
}
