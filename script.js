console.log("js loaded");

var passwordlength = 10
var lowerletters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']




$("#generate").on("click", function () {
    console.log("we got click")


    var password = ""


    for (let i = 0; i < passwordlength; i++) {
        const randomLetter = lowerletters[Math.floor(Math.random() * lowerletters.length)];

        password += randomLetter
    }

    console.log("this is our passpwrd varialbleee", password)
    $("#password").empty()
    $("#password").text(password)

})
