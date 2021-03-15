let password = prompt("New password is:")
let again = prompt("Please reenter password:)
function Compare(passwrod, again) {
    var answer = password.localeCompare(again)
    return answer
    }
let finalPassword = Compare(password, again)
if (finalPassword == "")
    console.log("The passwords are the same.")
else
    console.log("The password does not match.")