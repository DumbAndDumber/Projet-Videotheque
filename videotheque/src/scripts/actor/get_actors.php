<?php
	include("../parameters.php");

	$actors = explode(",", $_GET["actors"]);
	$actorsList = array();

	foreach ($actors as $key => $actor) {
		$name = explode(" ", $actor);
		$thisActorResult = getActorByFullName($name[0], $name[1]);
		$actorsList[] = $thisActorResult;
	}

	function getActorsByName($lLastname){
		global $arrestDbUrl;
		$getActorsContent = file_get_contents($arrestDbUrl . "vid_actor/lastname/" . $lLastname);
		return json_decode($getActorsContent);
	}

	function getActorByFullName($lFirstname, $lLastname){
		$getActorByFullName = getActorsByName($lLastname);
		foreach ($getActorByFullName as $keyByFullName => $actorByFullName) {
			if($actorByFullName->firstname == $lFirstname){
				return $actorByFullName;
				break;
			}
		}
	}

	print_r(json_encode($actorsList));
?>