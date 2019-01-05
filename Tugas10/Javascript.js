var jam=prompt("Silahkan Masukan Jam","jam");
var nama=prompt("Silahkan Masukan Nama Anda","Nama anda");
var password=prompt("Silahkan Masukan Password anda","Password Anda");

    console.log("Selamat Datang ",nama);
    console.log("Password Anda : ",password);
    console.log("Jam yang anda inputkan : ",jam);
     
    if(jam>=6 && jam<=12)
    {
        console.log("Pagi<br/>");
        if(jam>=8.40 && jam<=10.20)
        {
            console.log("Selamat Datang Lagi di Bank Jatim");
        }
    }
    else if(jam>12 && jam<=15)
    {
        console.log("Siang , Selamat Datang Lagi di Bank Jatim");
    }
    else if(jam>15 && jam<=18)
    {
        console.log("Sore ,Selamat Datang Lagi di Bank Jatim");
    }
    alert("Semua Data Yang Anda Inputkan Tertampung pada Console!!");
    var konfirm=confirm("Apakah anda ingin memasukan jam lagi!");
    if(konfirm==true){
        document.location.href="index.html";
    }
    else{
        console.log("Pengisian Jam telah berakhir");
    }

