const package = function (type) {
  this.content = []
  this.type = type
}

package.prototype = {
  add: function (content) {
    this.content.push(content)
  },
  remove: function (content) {
    const location = this.content.indexOf(content)
    this.content.splice(location, 1)
  },
  countContent: function () {
    return this.children.length
  }
}

const miloCarton = new package('carton')
const miloBox1 = new package('box')
const miloSatchet1 = new package('satchet')

miloBox1.add(miloSatchet1) 

miloCarton.add(miloBox1) 