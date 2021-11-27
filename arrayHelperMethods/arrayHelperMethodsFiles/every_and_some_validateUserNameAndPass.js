function Field(value) {
    this.value = value;
}

Field.prototype.validate = function () {
    return this.value.length > 0;
}

var username = new Field('natethegreat');
var password = new Field('pass123');
var birthDay = new Field('10/10/10');

var fields = [username, password, birthDay];

var formIsValid = fields.every(function(field) {
    return field.validate();
})

// console.log(username.validate() && password.validate());

if (formIsValid) {
    // Allow user to submit
    console.log('form is valid');
} else {
    // Give the user an error
    console.log('form is not valid')
}
