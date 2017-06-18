//1 Object Values
    function objectValues(object) {
    var arr = [];
    for (var key in object) {
        arr.push(object[key]);
    }
    return arr;
}


//2 Key to string
function keysToString(object){
  var arr = [];
arr.push(Object.keys(object));
var str = arr.join(" ").replace(/,/g, " ");
  
  return str;
}
  

//3 Values to string
function valuesToString(object){
  var arr = [];
  
 for (var key in object){
   if (typeof object[key] === "string") {
  arr.push(object[key]);
   }
  }
  
 var str = arr.join(" "); //.replace(/,/g, " ");
  return str;

}


//Array or object

function arrayOrObject(test) {
    if (Array.isArray(test)) {
        return "array";
    }else if (typeof test === "object") {
        return "object";
    }
}



//Capitalize word
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.substr(1);
}


//Capitalize All Words

function capitalizeAllWords(string){
  var useArray = string.split(" ");
  var newArray = [];
  for (var i = 0; i < useArray.length; i++) {
    newArray.push(useArray[i].charAt(0).toUpperCase() + useArray[i].substr(1));
  } return newArray.join(" ");
}



//Welcome Message
function welcomeMessage(object, name) {
    return "Welcome " + object.name.charAt(0).toUpperCase() +object.name.substr(1) + "!";
}



//Profile Info
function profileInfo(object, name, species) {
    return object["name"].charAt(0).toUpperCase() + object.name.substr(1) + 
    " is a " + object["species"].charAt(0).toUpperCase() + object["species"].substr(1);
}



//Maybe Noises

function maybeNoises(object) {
    var getNoises = [];
  if (object.noises) {
     if (object.noises.length > 0) {
         for (var i =0; i < object.noises.length; i++) {
           getNoises.push(object.noises[i]);
    }
       return getNoises.join(" ");
       } 
     }
  return "there are no noises";
}


//has word
function hasWord(string, word) {
    if (string.includes(word) === true) {
        return true;
    }
    else return false;
}


//Add Friend
function addFriend(name, object) {
    object.friends.push(name);
    return object;
}

// Is Friend


function isFriend(name, object){
  if (Array.isArray(object.friends)) {  
    for(var i = 0; i < object.friends.length; i++) {
              if(object.friends[i] === name) {
                return true;
            }
        } 
    }              
  return false;
}


//Non Friends
// function nonFriends(name, list){
//   var allFriends = [];
// //   console.log(allFriends);
//   for (var i = 0; i < list.length; i++) {
//     allFriends.push(list[i].name);
//   }for (var j = 0; j < allFriends.length; j++) {
// //     var notFriends = [];
//     if (allFriends[j] === list[j].friends) {
//       allFriends.splice(allFriends[j] , 1);
      
//     }return allFriends;
//   }
// }    
function nonFriends(name, list){
    var nameList = [];
    var result = [];
    var current = null;
    for(var i=0; i<list.length; i++){
        if(name === list[i].name){
            current = list[i];
        }else{
            nameList.push(list[i].name);
        }
    }

    if(current === null){
        return nameList;
    }

    for(var i=0; i<nameList.length; i++){
        if(current.friends.indexOf(nameList[i]) == -1){
            result.push(nameList[i]);
        }
    }

    return result;

}
    

//Update object
function updateObject(object, key, value) {
    object[key] = value;
    return object;
  }
 

//Remove Properties
function removeProperties(object, array) {
  for (var i = 0; i < array.length; i++) {
    delete object[array[i]]
  }return object;
}


function dedup(array) {
  var noDupe = Array.from(new Set(array));
  return noDupe;
}