function stringLength(str) {

  if (str.length < 1 || str.length > 10) {
    return 'Invalid String';
  }
  return str.length;
}

module.exports = stringLength;