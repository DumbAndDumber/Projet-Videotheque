<?php
	include("../parameters.php");

	$id_user = $_GET["id_user"];

	if (isset($_GET["id_user"])) {
		$result = file_get_contents($arrestDbUrl . "vid_user_serie/id_user/" . $id_user);
		print_r($result);

		if (isset(json_decode($result)->error)) {
			http_response_code(404);
		}
	}
?>