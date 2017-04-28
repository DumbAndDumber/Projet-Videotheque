<?php
	$content = file_get_contents($arrestDbUrl . "vid_user_movie/id_user/" . $id_user);

	foreach (json_decode($content) as $key => $user_movie) {
		if ($user_movie->id_movie == $id_movie) {
			$id_user_movie = $user_movie->id;
			break;
		}
	}
?>