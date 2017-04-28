<?php
	include("../parameters.php");

	$search = str_replace(" ", "+", $_GET["search"]);
	$page = $_GET["page"];

	$content = file_get_contents($omdbApiUrl . "?s=" . $search . "&page=" . $page . "&type=series");
	$series = json_decode($content)->Search;

	$url = $arrestDbUrl . "vid_serie";

	foreach ($series as $key => $serie) {
		$data = array(
			"name" => $serie->Title,
			"cover" => $serie->Poster,
			"imdb_id" => $serie->imdbID
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

	print_r($content);
?>