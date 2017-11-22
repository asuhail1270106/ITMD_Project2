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

function add_row(add_drop){
  var table = document.getElementById(add_drop);
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  #cell 1
  var cell1 = row.insertCell(0);
  var element1 = document.createElement("input");
  element1.type = "checkbox";
  element1.name="chkbox[]";
  cell1.appendChild(element1);
  #cell 2
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var element2 = document.createElement("input");
  element2.type = "text";
  element2.name = "txtbox[]";
  cell3.appendChild(element2);
  #cell 3
  var cell4 = row.insertCell(3);
  var element2 = document.createElement("input");
  element3.type = "text";
  element3.name = "txtbox[]";
  element3.name = "txtbox[]";
  cell4.appendChild(element3);
}

function delete_row(add_drop) {
try {
  var table = document.getElementById(add_drop);
  var rowCount = table.rows.length;
for(var i=0; i<rowCount; i++) {
  var row = table.rows[i];
  var chkbox = row.cells[0].childNodes[0];
if(null != chkbox && true == chkbox.checked) {
  table.deleteRow(i);
  rowCount--;
  i--;
    }
  }
}catch(e) {
    alert(e);
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
