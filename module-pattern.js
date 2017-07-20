// simple module
const wecode = (function () {
  //private 
  const _members = [] 

  function _memberInfoIsValid (newMember) {
    return (newMember.email && newMember.phoneNuumber && newMember.fullname)
  }
  //public
  return {
    addMember: function (member) {
      if (!_memberInfoIsValid(member)) {
        return {error: true, msg: 'Invalid information provided'}
      }
      _members.push(member)
      return {err: false, msg: 'new member added successfully!'}
    },
    getMember: function (id) {
      return _members.find(function (member, index) {
        return member.id === id
      })
    }
  }
})()
const member = {fullname: 'femi oni', email: 'freefony@gmail.com', phoneNuumber: '080xxxxxx'}

wecode.addMember(member)
//new member added successfully!

wecode._memberInfoIsValid(member) //Uncaught TypeError: wecode._memberInfoIsValid is not a function

//Namespacing
_memberInfoIsValid(member) //Uncaught ReferenceError: _memberInfoIsValid is not defined

function _memberInfoIsValid (externalNumber) {
  return 'my number is '+ externalNumber
}

_memberInfoIsValid(3) //true

/*
 * no way to remove a member
 * */
