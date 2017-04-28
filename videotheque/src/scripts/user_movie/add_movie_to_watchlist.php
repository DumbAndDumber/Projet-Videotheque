<?php
	include("../parameters.php");

	$id_movie = $_GET["id_movie"];
	$id_user = $_GET["id_user"];

	$url = $arrestDbUrl . "vid_user_movie";

	$data = array(
		"id_movie" => $id_movie,
		"id_user" => $id_user
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

	print_r($result);
?>