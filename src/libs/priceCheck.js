const priceCheck = rating => {
  if (rating <=3) {
    return 3500
  } else if ((rating >3) && (rating <=6)) {
    return 8250
  } else if ((rating >6) && (rating <=8)) {
    return 16350
  } else {
    return 21250
  }
}

export default priceCheck