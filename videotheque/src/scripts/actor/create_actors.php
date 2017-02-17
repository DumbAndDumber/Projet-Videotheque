<?php
	include("../parameters.php");

	$actors = explode(",", $_GET["actors"]);
	$actorsList = array();
	$addActorUrl = $arrestDbUrl . "vid_actor";
	$addActorMovieUrl = $arrestDbUrl . "vid_movie_actor";
	$addActorSerieUrl = $arrestDbUrl . "vid_serie_actor";
	
	if(isset($_GET["id_movie"])){
		$id_movie = $_GET["id_movie"];
	}
	if(isset($_GET["id_serie"])){
		$id_serie = $_GET["id_serie"];
	}

	foreach ($actors as $key => $actor) {
		$name = explode(" ", $actor);
		$thisActorResult = getActorsByName($name[1]);

		if(isset($thisActorResult->error)){
			addActor($name[0], $name[1]);
		}
		else{
			$actorFullName = getActorByFullName($name[0], $name[1]);
			if($actorFullName == null){
				addActor($name[0], $name[1]);
			}
		}

		if($_GET["type"] == "movie"){
			addActorMovie($id_movie, $actorFullName->id_actor);
		}
		elseif ($_GET["type"] == "serie"){
			addActorSerie($id_serie, $actorFullName->id_actor);
		}
	}

	function addActor($lFirstname, $lLastname){
		$data = array(
			"firstname" => $lFirstname,
			"lastname" => $lLastname
		);
		$options = array(
		    'http' => array(
		        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
		        'method'  => 'POST',
		        'content' => http_build_query($data)
		    )
		);

		$addActorContext = stream_context_create($options);
		global $addActorUrl;
		$addActorResult = file_get_contents($addActorUrl, false, $addActorContext);
	}

	function getActorsByName($lLastname){
		global $arrestDbUrl;
		$getActorsContent = file_get_contents($arrestDbUrl . "vid_actor/lastname/" . $lLastname);
		return json_decode($getActorsContent);
	}

	function getActorByFullName($lFirstname, $lLastname){
		$getActorByFullName = getActorsByName($lLastname);
		$actorExists = false;
		foreach ($getActorByFullName as $keyByFullName => $actorByFullName) {
			if($actorByFullName->firstname == $lFirstname){
				return $actorByFullName;
				$actorExists = true;
				break;
			}
		}
		if(!$actorExists){
			return null;
		}
	}

	function addActorMovie($lIdMovie, $lIdActor){
		$data = array(
			"id_movie" => $lIdMovie,
			"id_actor" => $lIdActor
		);
		$options = array(
		    'http' => array(
		        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
		        'method'  => 'POST',
		        'content' => http_build_query($data)
		    )
		);

		$addActorMovieContext = stream_context_create($options);
		global $addActorMovieUrl;
		$addActorResult = file_get_contents($addActorMovieUrl, false, $addActorMovieContext);
	}

	function addActorSerie($lIdSerie, $lIdActor){

	}
?>