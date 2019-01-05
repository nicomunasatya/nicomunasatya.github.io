
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("nama").innerHTML = myObj.name+"<br>"+myObj.age+"<br>";
  }
};
xmlhttp.open("GET", "json.txt", true);
xmlhttp.send();
var myJSON = '{ "name":"Nico Munasatya", "age":20, "atm":"BCA" }';
var myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;
document.getElementById("demo1").innerHTML = myObj.age;
document.getElementById("demo2").innerHTML = myObj.atm;



