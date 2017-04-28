<?php
	include("../parameters.php");

	$imdb_id = $_GET["imdb_id"];

	$content = file_get_contents($omdbApiUrl . "?i=" . $imdb_id);
	$episode = json_decode($content);

	$content = file_get_contents($arrestDbUrl . "vid_episode/imdb_id/" . $imdb_id);
	$id_episode = json_decode($content)[0]->id;

	if(json_decode($content)[0]->duration == null) {
		$duration = str_replace(" min", "", $episode->Runtime);

		$data = array(
			"release_date" => $duration
		);
		$options = array(
		    'http' => array(
		        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
		        'method'  => 'PUT',
		        'content' => http_build_query($data)
		    )
		);
		$context  = stream_context_create($options);
		$result = file_get_contents($url, false, $context);
	}

	$content = file_get_contents($arrestDbUrl . "vid_episode/imdb_id/" . $imdb_id);

	print_r(json_encode(json_decode($content)));
?>