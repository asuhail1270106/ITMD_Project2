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

$(document).ready(function(){
	
	$(".menu-button").click(function(){
        $(".sidebar-menu").removeClass("hide-menu");
        $(".sidebar-menu").addClass("show-menu");
		$(".menu-button").addClass("show-menubutton");
    });
    
    $(".fa-arrow-circle-o-left").click(function(){
		$(".show-menu").addClass("hide-menu");
		$(".menu-button").removeClass("show-menubutton");
	});

});