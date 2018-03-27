//javascript cookbook code for adding tr via JS
/*
var values = new Array(3);
  values[0] = [123.45, "apple", true];
  values[1] = [65, "banana", false];
  values[2] = [1034.99, "cherry", false];

  var mixed = document.getElementById("kitItems");
  var tbody = document.createElement("tbody");

  for (var i = 0 ; i < values.length; i++) {
     var tr = document.createElement("tr");

     // for each inner array cell
     // create td then text, append
     for (var j = 0; j < values[i].length; j++) {
       var td = document.createElement("td");
       var txt = document.createTextNode(values[i][j]);
       td.appendChild(txt);
       tr.appendChild(td);
     }


     posting.done(function(data) {

       var kit = data;
       debugger
       var mixed = document.getElementById("kitItems");
       var tbody = document.createElement("tbody");
       var tr = document.createElement("tr");
       var td = document.createElement("td");
       var txt = document.createTextNode(`${kit['name']}`);
       td.appendChild(txt);
       tr.appendChild(td);
       tbody.appendChild(tr);
       mixed.appendChild(tbody);
     })








     // append row to table
     // IE7 requires append row to tbody, append tbody to table
     tbody.appendChild(tr);
     mixed.appendChild(tbody);
   }
*/
