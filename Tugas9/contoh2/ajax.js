function loadXML(file) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", file, true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Judul</th><th>Pengarang</th><th>Tahun</th><th>Harga</th></tr>";
  var x = xmlDoc.getElementsByTagName("buku");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("judul")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("pengarang")[0].childNodes[0].nodeValue +
    "</td><td>"+
    x[i].getElementsByTagName("tahun")[0].childNodes[0].nodeValue +
    "</td><td>"+
    x[i].getElementsByTagName("harga")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}
$(document).ready(function(){
    $("a").click(function(){
      $("#demo").fadeToggle(1000);
    });
});
