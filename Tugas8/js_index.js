alert("Selamat datang");
var jam=prompt("text","isi jam");
var nama=prompt("text","isi nama");
var nim=prompt("text","isi nim");

document.writeln("Selamat Datang ",nama,"<br/>");
document.writeln(nim,"<br/>Jam yang anda inputkan : ");
document.writeln(jam,"<br/>");
        
if(jam>=6 && jam<=12)
{
    document.write("Pagi<br/>");
    if(jam>=8.40 && jam<=10.20)
    {
        document.write("Kuliah pemrograman berbasis WEB");
    }
}
else if(jam>12 && jam<=15)
{
    document.write("Siang");
}
else if(jam>15 && jam<=18)
{
    document.write("Sore");
}

var konfirm=confirm("Apakah anda ingin memasukan jam lagi!");
if(konfirm==true){
    document.location.href="index.html";
}
else{
    document.write("<br/>Pengisian Jam telah berakhir");
}