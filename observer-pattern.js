
const cashier = function () {
  this.handlers = []
}

cashier.prototype = {
  on: function (action, handler) {
    this.handlers.push(handler)
  },
  makeSales: function (sale) {
    this.handlers.forEach(function(handler, index) {
      handler(sale)
    });
  }
}

const cashier1 = new cashier()

const inventory = (function () {
  const store = [{
    name: 'Sticky notes',
    qty: 200,
    pricePerUnit: 50
  }]
  const findItemInStore = function (name) {
    return store.find(function (item) {
        return item.name === name
      })
  }
  const updateBalanceFromSales = function (sale) {
      const balanceOfItemSold = findItemInStore(sale.name)
      balanceOfItemSold.qty = balanceOfItemSold.qty - sale.qty
    }
  return {
    getStockBalance: function (name) {
      const stock = findItemInStore(name)
      return stock.qty
    },
    updateBalanceFromSales
  }
})()

const accountBalance = (function () {
  let cashInHand = 0

  const credit = function (amount) {
    cashInHand = cashInHand + amount
  }
  const debit = function (amount) {
    cashInHand = cashInHand - amount
  }

  return {
    creditFromSales: function (sale) {
      credit(sale.amountPaid)
    },
    getBalance: function () {
      return cashInHand
    }
  }
})()

cashier1.on('sale', inventory.updateBalanceFromSales)
cashier1.on('sale', accountBalance.creditFromSales)

cashier1.makeSales({
    name: 'Sticky notes',
    qty: 2,
    pricePerUnit: 50,
    amountPaid: 100
  })