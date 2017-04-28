<?php
	include("../parameters.php");

	$imdb_id = $_GET["imdb_id"];

	$content = file_get_contents($omdbApiUrl . "?i=" . $imdb_id);
	$movie = json_decode($content);

	$content = file_get_contents($arrestDbUrl . "vid_movie/imdb_id/" . $imdb_id);
	$id_movie = json_decode($content)[0]->id;

	$_GET["actors"] = str_replace(', ', ',', $movie->Actors);
	$_GET["type"] = "movie";
	$_GET["id"] = $id_movie;

	$url = $arrestDbUrl . "vid_movie/" . $id_movie;

	if(json_decode($content)[0]->release_date == null){
	
		$date_parts = explode(" ", $movie->Released);
		$month_values = array(
			'Jan' => '01',
			'Feb' => '02',
			'Mar' => '03',
			'Apr' => '04',
			'May' => '05',
			'Jun' => '06',
			'Jul' => '07',
			'Aug' => '08',
			'Sep' => '09',
			'Oct' => '10',
			'Nov' => '11',
			'Dec' => '12'
		);
		$release_date = $date_parts[2] . "-" . $month_values[$date_parts[1]] . "-" . $date_parts[0];

		$data = array(
			"name" => $movie->Title,
			"release_date" => $release_date,
			"description" => $movie->Plot,
			"cover" => $movie->Poster,
			"duration" => str_replace(" min", "", $movie->Runtime)
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

		$_GET["id_movie"] = $id_movie;
		include("../actor/create_actors.php");
	}

	$content = file_get_contents($arrestDbUrl . "vid_movie/imdb_id/" . $imdb_id);
	$content = json_decode($content, true)[0];

	$content["actors"] = str_replace(', ', ',', $movie->Actors);

	print_r(json_encode($content));
?>