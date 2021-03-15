function comaprePassword(pass1, pass2){
    if (pass1 == pass2) {
    return true
} else {
    return false
    }
}

password1 = prompt('Enter your new password.')
password2 = prompt('Enter your new password.')
result = comparePassword(password1, password2)
    if (result == true) {
    console.log('The passwords are the same.')
} else {
    console.log('The passwords are not the same.')
}
