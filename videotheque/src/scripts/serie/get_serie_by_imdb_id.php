<?php
	include("../parameters.php");

	$imdb_id = $_GET["imdb_id"];

	$content = file_get_contents($omdbApiUrl . "i=" . $imdb_id);
	$serie = json_decode($content);

	$content = file_get_contents($arrestDbUrl . "vid_serie/imdb_id/" . $imdb_id);
	$id_serie = json_decode($content)[0]->id;

	if (!isset($serie->Error)) {
		$_GET["actors"] = str_replace(', ', ',', $serie->Actors);
		$_GET["type"] = "series";
		$_GET["id"] = $id_serie;

		$url = $arrestDbUrl . "vid_serie/" . $id_serie;

		if(json_decode($content)[0]->release_date == null){
		
			$date_parts = explode(" ", $serie->Released);
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
				"name" => $serie->Title,
				"release_date" => $release_date,
				"description" => $serie->Plot,
				"cover" => $serie->Poster,
				"seasons" => $serie->totalSeasons
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

			$_GET["id_serie"] = $id_serie;
			include("../actor/create_actors.php");
		}

		$content = file_get_contents($arrestDbUrl . "vid_serie/imdb_id/" . $imdb_id);
		$content = json_decode($content, true)[0];

		$content["actors"] = str_replace(', ', ',', $serie->Actors);

		print_r(json_encode($content));
	}
	else {
		http_response_code(404);
		print_r(json_encode($serie));
	}
?>