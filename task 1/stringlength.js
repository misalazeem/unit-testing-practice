const stringlength = string => {
  if(string.length > 0 && string.length <= 10){
    return string.length;
  }
  else {
    throw new Error('String cannot be empty or greater than 10 characters');
  }
};

module.exports = stringlength;
