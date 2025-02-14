function otp() {
  let myotp = "";
  for (let i = 0; i < 6; i++) {
    myotp += Math.floor(Math.random() * 10);
  }
  return myotp;
}

console.log(`Your OTP : ${otp()}`)
