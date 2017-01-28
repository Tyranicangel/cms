angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('Dates',function(){
  return{
    getDate:function(str1)
    {
      if(!str1)
      {
        return "";
      }
      else
      {
        var dt1=str1.substring(8,10);
        var mon1=str1.substring(5,7);
        var yr1=str1.substring(0,4);
        return dt1+'/'+mon1+'/'+yr1;
      }
    }
  }
})
.factory('Commas',function(){
  return {
    getcomma:function(nums){
      if(nums)
      {
        
        nums=nums+'';
        var splite = nums.split(".");
          nums = splite[0];
        if(nums)
        {
        var num1=nums.toString();
        if(num1.length>7)
        {
          numstart=num1.substr(0,num1.length-7);
          numstart=numstart+',';
          num=num1.substr(-7);
        }
        else
        {
          num=num1;
          numstart="";
        }
        if(num.length>4)
        {
          num1=num.substr(0,num.length-3);
          if(num1.length%2==0)
          {
            var num2 = num1.match(/(.{1,2})/g);
            num2.push(num.substr(-3));
            fin=num2.join();
          }
          else
          {
            var num2=num1.substr(1);
            var num3 = num2.match(/(.{1,2})/g);
            num3.push(num.substr(-3));
            fin=num3.join();
            fin=num.substr(0,1)+','+fin;
          }
        }
        else
        {
          fin=num;
        }
        if(!splite[1])
        {
          splite[1]='00';
        }
        return numstart+fin+"."+splite[1];
        }
        else
        {
          return " ";
        }
      }
      else
      {
        return '0.00';
      }
    }
  }
});
