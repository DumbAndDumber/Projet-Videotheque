<?php
	include("../parameters.php");

	$email = $_GET["email"];

	if (isset($_GET["email"])) {
		$content = file_get_contents($arrestDbUrl . "vid_user/email/" . $email);

		if (isset(json_decode($content)->error)) {
			http_response_code(404);
		}
		
		print_r(json_encode(json_decode($content)));
	}
?>