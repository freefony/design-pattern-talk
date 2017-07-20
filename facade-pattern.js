function electricityBill () {
  function getMeterCategory (meterNo) {

  }
  function getMeterCategoryRates (meterCategory) {

  }
  
  function calculatePrice (meterCategoryRates, units) {
    return 5000
  }

  return {
    calculate: function runTransaction (meterNo, units) {
      const meterCategory = getMeterCategory(meterNo)
      const meterCategoryRates = getMeterCategoryRates(meterCategory)
      return calculatePrice(meterCategoryRates, units)
    }
  }
}
electricityBill().calculate('eiueid', 150)