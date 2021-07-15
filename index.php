<!DOCTYPE html>
<html>
<head>
	<title>Rutinitas</title>
	<link href="css/bootstrap.css" rel="stylesheet"/>
	<script type="text/javascript" src="aksi_daftar.js"></script>

	<style type="text/css">
		* {
			box-sizing: border-box;
		}

		.daftar {
			display: inline-block;
			cursor: default;
			margin-left: 30px;
		}

		.utama {
			width: 75%;
		}

		.wadah {
			display: flex;
		}

		.ikon {
			width: 25%;
		}

		@media (max-width: 768px) {
			.wadah {
				display: block;
			}

			.ikon {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.utama {
				width: 100%;
			}
		}
	</style>
</head>
<body>
	<div class="wadah">
		<div class="utama vh-100 p-4">
			<h1 class="fw-bold border-bottom">Rutinitas</h1>
			<div class="m-5">
				<h4>Menunggu dilakukan</h4>
				<div>
					<ul class="list-group w-75">
						<?php
							$kegiatan=array(
								'memancing', 
								'memasak', 
								'mencuci', 
								'menjemur', 
								'menulis', 
								'membaca');
							foreach ($kegiatan as $key => $value) {
								$GLOBALS['kegiatan'] = $value;
								include 'kegiatan_aktif.php';
							}
						?>
						<button class="btn btn-primary w-100 fw-bold fs-4">+</button>
					</ul>
				</div>
				<br>
				<br>
				<br>
				<h4>Sudah dilakukan</h4>
				<div>
					<ul id="selesai" class="list-group w-75"></ul>
				</div>
			</div>
		</div>
		<div class="ikon vh-100 px-3" style="padding: 25vh 0">
			<img class="img-thumbnail" src="img/icon_utama.svg"/>
		</div>
	</div>
</body>
</html>