const generateKey = (length = 6) => {
  var dictionary = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * dictionary.length);
    key = key + dictionary[index];
  }
  return key;
};

module.exports = { generateKey };
