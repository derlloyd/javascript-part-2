function Person(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.emails = []
}

function Email(address, type) {
    this.address = address,
    this.type = chooseType(type)
}

function chooseType(a) {
    switch (a) {
            case "work":
                return "work";
            case "home":
                return "home";
            default:
                return "other"
        }
}

Person.prototype = {
    addEmail: function(a, t) {
        var emailEntry = new Email(a, t)
        this.emails.push(emailEntry);
    }
}

var personA = new Person("Derek", "Lloyd")

personA.addEmail("me@you.com", "home")
personA.addEmail("work@work.ca", "work")

console.log(personA)

