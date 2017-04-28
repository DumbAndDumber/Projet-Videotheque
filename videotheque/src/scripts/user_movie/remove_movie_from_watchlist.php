<?php
	include("../parameters.php");

	$id_movie = $_GET["id_movie"];
	$id_user = $_GET["id_user"];

	include("get_user_movie_id.php");

	$url = $arrestDbUrl . "vid_user_movie/" . $id_user_movie;

	$options = array(
	    'http' => array(
	        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
	        'method'  => 'DELETE'
	    )
	);
	$context  = stream_context_create($options);
	$result = file_get_contents($url, false, $context);

	print_r($result);
?>