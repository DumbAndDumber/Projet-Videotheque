<?php
	include("../parameters.php");

	$id = $_GET["id"];

	if (isset($_GET["id"])) {
		$content = file_get_contents($arrestDbUrl . "vid_user/id_user/" . $id);

		if (isset(json_decode($content)->error)) {
			http_response_code(404);
		}
		
		print_r(json_encode(json_decode($content)));
	}
?>