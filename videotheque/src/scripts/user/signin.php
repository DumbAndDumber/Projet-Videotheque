<?php
	include("../parameters.php");

	$username = $_GET["username"];
	$passowrd = $_GET["password"];
	$email = $_GET["email"];
	$lastname = $_GET["lastname"];
	$firstname = $_GET["firstname"];
	$cp = $_GET["cp"];
	$address = $_GET["address"];
	$country = $_GET["country"];
	$phone = $_GET["phone"];

	$url = $arrestDbUrl . "vid_user";

	$data = array(
		"username" => $_GET["username"],
		"password" => $_GET["password"],
		"email" => $_GET["email"],
		"lastname" => $_GET["lastname"],
		"firstname" => $_GET["firstname"],
		"cp" => $_GET["cp"],
		"address" => $_GET["address"],
		"country" => $_GET["country"],
		"phone" => $_GET["phone"]
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

	if (isset(json_decode($result)->error)) {
		echo "Username or email is already used.";
	}
	else {
		print_r($result);
	}
?>