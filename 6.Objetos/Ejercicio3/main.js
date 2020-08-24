const user1 = {}
    user1.name = "Susana";
    user1.age = "34"
    user1.prof = "periodista"
    user1.showBio = function(){
        return "Mi nonbre es " + this.name + ", " + "tengo " + this.age + " años y soy " + this.prof;
    }

console.log(user1.showBio());