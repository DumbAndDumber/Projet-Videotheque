<?php
	include("../parameters.php");

	$email = $_GET["email"];

	$content = file_get_contents($arrestDbUrl . "vid_user/email/" . $email);

	print_r(json_encode(json_decode($content)));
?>