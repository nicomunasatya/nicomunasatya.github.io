<html>
	<head>
		<title>Keluaran Form</title>
		<link rel="stylesheet" type="text/css" href="register.php">
	</head>
	<style>
		/*CSS untuk body di register.php*/
		body{
			background-color:#1aa3ff;
			font-size:20;
			font-family:verdana;
		}
		/*CSS untuk body register.php*/
		body.bodi{
			background-color:#1aa3ff;
			font-size:20;
			font-family:verdana;
		}
		/*CSS untuk header 3 yang berisi judul Data Pendaftar*/
		h3{
			border:2px;
			border-radius:5px;
			background-color:#000066;
			padding:20px;
			color:white;
			text-align:center;
		}
		/*CSS untuk paragraf yang berisi Data Pendaftar*/
		p{
			border:2px;
			background-color:#f2f2f2;
			border-radius:5px;
			width:50%;
			height:50%;
		}
	</style>
	<body class="bodi">
		<h3>DATA PENDAFTAR</h3>
		<p>
		<?php
			echo "&nbsp;&nbsp;"."Nama : ".$_GET['nama']."</br>";
			echo "&nbsp;&nbsp;"."Password : ".$_GET['password']."</br>";
			echo "&nbsp;&nbsp;"."Jenis Kelamin : ".$_GET['jenis_kelamin']."</br>";
			echo "&nbsp;&nbsp;"."Keahlian : ".$_GET['keahlian']."</br>";
			echo "&nbsp;&nbsp;"."Tempat Lahir : ".$_GET['tempat_lahir']."</br>";
			echo "&nbsp;&nbsp;"."Deskripsi : ".$_GET['deskripsi']."</br>";		
		?>
		</p>
	</body>
</html>