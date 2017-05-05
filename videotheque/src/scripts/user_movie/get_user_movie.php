<?php
	include("../parameters.php");

	$id_movie = $_GET["id_movie"];
	$id_user = $_GET["id_user"];

	if (isset($_GET["id_movie"]) && isset($_GET["id_user"])) {
		include("get_user_movie_id.php");

		if (isset($id_user_movie)) {
			$result = file_get_contents($arrestDbUrl . "vid_user_movie/" . $id_user_movie);
			print_r($result);
		}
		else {
			http_response_code(404);
			echo http_response_code();
		}
	}
?>