<?php
	include("../parameters.php");

	$imdb_id = $_GET["imdb_id"];
	$id_serie = $_GET["id_serie"];
	$season = $_GET["season"];

	$content = file_get_contents($omdbApiUrl . "?i=" . $imdb_id . "&season=" . $season);

	if ($content == null) {
		http_response_code(404);
		echo http_response_code();
	}
	else if (isset(json_decode($content)->Error)) {
		http_response_code(404);
		print_r($content);
	}
	else {
		$episodes = json_decode($content)->Episodes;

		$url = $arrestDbUrl . "vid_episode";
		$episodesList = array();

		foreach ($episodes as $key => $episode) {
			$data = array(
				"name" => $episode->Title,
				"season" => $season,
				"number" => $episode->Episode,
				"release_date" => $episode->Released,
				"imdb_id" => $episode->imdbID,
				"id_serie" => $id_serie
			);
			$options = array(
			    'http' => array(
			        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
			        'method'  => 'POST',
			        'content' => http_build_query($data)
			    )
			);
			$context  = stream_context_create($options);
			$result = file_get_contents($url, false, $context);

			$content = file_get_contents($arrestDbUrl . "vid_episode/imdb_id/" . $episode->imdbID);
			$episodesList[] = json_decode($content);
		}
	
		print_r(json_encode($episodesList));
	}
?>