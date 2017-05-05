<?php
	include("../parameters.php");

	$id_serie = $_GET["id_serie"];
	$id_user = $_GET["id_user"];

	if (isset($_GET["id_serie"]) && isset($_GET["id_user"])) {
		include("get_user_serie_id.php");

		if (isset($id_user_serie)) {
			$result = file_get_contents($arrestDbUrl . "vid_user_serie/" . $id_user_serie);
			print_r($result);
		}
		else {
			http_response_code(404);
			echo http_response_code();
		}
	}
?>