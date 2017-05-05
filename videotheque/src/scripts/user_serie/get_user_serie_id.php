<?php
	$content = file_get_contents($arrestDbUrl . "vid_user_serie/id_user/" . $id_user);

	foreach (json_decode($content) as $key => $user_serie) {
		if (isset($user_serie->id) && $user_serie->id_serie == $id_serie) {
			$id_user_serie = $user_serie->id;
			break;
		}
	}
?>