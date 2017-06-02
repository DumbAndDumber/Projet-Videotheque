<?php
	include("../parameters.php");

	$search = str_replace(" ", "+", $_GET["search"]);
	$page = $_GET["page"];

	$content = file_get_contents($omdbApiUrl . "s=" . $search . "&page=" . $page . "&type=movie");

	if (!isset(json_decode($content)->Error)) {
		$movies = json_decode($content)->Search;

		$url = $arrestDbUrl . "vid_movie";

		foreach ($movies as $key => $movie) {
			$data = array(
				"name" => $movie->Title,
				"cover" => $movie->Poster,
				"imdb_id" => $movie->imdbID
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
		}
	}
	else {
		http_response_code(404);
	}

	print_r($content);
?>