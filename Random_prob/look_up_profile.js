const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    
    let a = 0;
    for ( let i = 0; i < contacts.length; i++ ){
      if ( contacts[i].firstName == name ){
        a = 1;
        if ( contacts[i].hasOwnProperty(prop) ){     // "contacts[i].hasOwnProperty(prop)" gives either True or False value
          return contacts[i][prop];
        }
        return "No such property";
      }
    }
    if(a==0) return "No such contact";
    
  }
  
  lookUpProfile("Akira", "likes");