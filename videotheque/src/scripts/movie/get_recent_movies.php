<?php
	include("../parameters.php");

	$content = file_get_contents($arrestDbUrl . "vid_movie/?limit=10&by=release_date&order=desc");

	print_r($content);
?>