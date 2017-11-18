function emptyFields() {
    var x = document.forms["login"]["username"].value;
    var y = document.forms["login"]["password"].value;
    if (x == "") {
        alert("Username required");
        return false;
    }
    if (y == "") {
        alert("Password required");
        return false;
    }
}