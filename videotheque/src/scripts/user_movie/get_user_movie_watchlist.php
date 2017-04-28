<?php
	include("../parameters.php");

	$id_user = $_GET["id_user"];

	$result = file_get_contents($arrestDbUrl . "vid_user_movie/id_user/" . $id_user);
	print_r($result);
?>