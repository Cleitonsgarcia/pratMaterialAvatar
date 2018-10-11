var pratMaterialAvatar = (name) => {

  var nameWords = name.split(' ')
  var firstName = nameWords[0]
  var lastName = nameWords[nameWords.length-1]
  var firstNameInitial = firstName[0]
  var lastNameInitial = lastName[0]
  var fullName = firstNameInitial + lastNameInitial
  
  if(firstName === lastName){
  	  fulName = firstName
  }


  return { 
  	  chars: fullName.toUpperCase()
  }
  
}