exports = function(arg){
 const signingMethod = "HS256";
  // const payload = {
  //   "sub": "1234567890",
  //   "name": "Joe Example",
  //   "iat": 1565721223187
  // };
  const secret = "this-is-our-climstech-keyforquestions-123456789"; // or can be stored as a secret. 
  return utils.jwt.encode(signingMethod, arg, secret);
};
