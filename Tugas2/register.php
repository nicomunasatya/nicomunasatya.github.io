<html>
	<head>
		<title>Keluaran Form</title>
	</head>
	<style>
		body{
			background-color:#1aa3ff;
			font-size:25;
			font-family:times new roman;
		}
		h3{
			border:2px solid black;
			padding:20px;
		}
		p{
			border:2px solid black;
			width:50%;
			height:40%;
		}
	</style>
	<body>
		<h3>Data Pendaftar</h3>
		<p>
		<?php
			echo "Nama : ".$_GET['nama']."</br>";
			echo "Password : ".$_GET['password']."</br>";
			echo "Jenis Kelamin : ".$_GET['jenis_kelamin']."</br>";
			echo "Keahlian : ".$_GET['keahlian']."</br>";
			echo "Tempat Lahir : ".$_GET['tempat_lahir']."</br>";
			echo "Deskripsi : ".$_GET['deskripsi']."</br>";		
		?>
		</p>
	</body>
</html>