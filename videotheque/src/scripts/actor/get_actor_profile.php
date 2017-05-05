<?php
	include("../parameters.php");

	$content = file_get_contents($arrestDbUrl . "vid_actor/id_actor/" . $_GET["id_actor"]);

	if (isset(json_decode($content)->error)) {
		http_response_code(404);
	}

	print_r(json_encode(json_decode($content)));
?>