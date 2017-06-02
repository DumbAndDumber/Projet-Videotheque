<?php
	include("../parameters.php");

	$id_user = $_GET["id_user"];

	if (isset($_GET["id_user"])) {
		$result = json_decode(file_get_contents($arrestDbUrl . "vid_user_movie/id_user/" . $id_user));

		if (isset($result->error)) {
			http_response_code(404);
		}
		else {
			foreach ($result as $key => &$user_movie) {
				$user_movie = (array)$user_movie;
				$user_movie["movie"] = json_decode(file_get_contents($arrestDbUrl . "vid_movie/" . $user_movie["id_movie"]));
			}
		}
		print_r(json_encode($result));
	}
	else {
		http_response_code(404);
	}
?>