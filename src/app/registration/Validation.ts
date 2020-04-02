import { FormGroup } from '@angular/forms';

export function customValidator(group: FormGroup) {
    console.log("inside custom V")
    let password = group.value.password
    let confirmPassword = group.value.confirmpassword
    console.log(password)
    console.log(confirmPassword)
    let mobilenum = group.value.mobileNumber
    if (password == confirmPassword && mobilenum.toString().length == 10)
        return null
    else
        return { 'custom': true }

    // mobile number


}
