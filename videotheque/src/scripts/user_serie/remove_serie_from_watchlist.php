<?php
	include("../parameters.php");

	$id_serie = $_GET["id_serie"];
	$id_user = $_GET["id_user"];

	include("get_user_serie_id.php");

	if (isset($id_user_serie)) {
		$url = $arrestDbUrl . "vid_user_serie/" . $id_user_serie;

		$options = array(
		    'http' => array(
		        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
		        'method'  => 'DELETE'
		    )
		);
		$context  = stream_context_create($options);
		$result = file_get_contents($url, false, $context);

		print_r($result);
	}
?>