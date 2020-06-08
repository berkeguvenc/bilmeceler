angular.module('starter.services', [])

.factory('basliklar', function() {


  return {
    all: function() {
      return chats;
    },
  
    get: function(baslikID) {
      
      return baslikID;
    }
  };
});
