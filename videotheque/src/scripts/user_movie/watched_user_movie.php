<?php
	include("../parameters.php");

	$id_movie = $_GET["id_movie"];
	$id_user = $_GET["id_user"];

	$rate = $_GET["rate"];

	include("get_user_movie_id.php");

	$url = $arrestDbUrl . "vid_user_movie/" . $id_user_movie;

	$data = array(
		"is_seen" => 1,
		"rate" => $rate
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

	print_r($result);
?>