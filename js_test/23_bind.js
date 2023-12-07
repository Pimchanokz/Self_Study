const user = {
    data: [
        {name: "T. Woods", age: 37},
        {name: "P. Mickelson", age: 43},
    ],
    showFirstUser: function(){
        console.warn(this.data[0].name) //this here
    }

    
}

// user.showFirstUser()
const showFirstUser = user.showFirstUser.bind(user) //ให้ this refer to user
showFirstUser()