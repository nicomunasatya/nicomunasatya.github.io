
function loadDoc(url, fungsi) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      fungsi(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function news(xhttp) {
  document.getElementById("news").innerHTML =
  xhttp.responseText;
}
function announcement(xhttp){
  document.getElementById("announcement").innerHTML =
  xhttp.responseText;
}
function procurement(xhttp) {
  document.getElementById("procurement").innerHTML =
  xhttp.responseText;
}

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
    var table="<tr><th></th><th>Buy</th><th>Sell</th></tr>";
    var x = xmlDoc.getElementsByTagName("bank");
    for (i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("buy")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("harga1")[0].childNodes[0].nodeValue +
      "</td><td>"+
      x[i].getElementsByTagName("harga2")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("rate").innerHTML = table;
  }
  $(document).ready(function(){
      $("a").click(function(){
        $("#rate").fadeToggle(1000);
      });
  });
  