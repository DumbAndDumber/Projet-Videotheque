<?php
	include("../parameters.php");

	$id_serie = $_GET["id_serie"];
	$id_user = $_GET["id_user"];

	$rate = $_GET["rate"];

	include("get_user_serie_id.php");

	if (isset($id_user_serie)) {
		$url = $arrestDbUrl . "vid_user_serie/" . $id_user_serie;

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
	}
?>