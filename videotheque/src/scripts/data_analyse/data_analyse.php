<?php
	include("../parameters.php");

	$db = new PDO('mysql:host=localhost;dbname=' . $dbName, $dbUsername, $dbPassword);

	function dbQuery($querySQL) {
		global $db;

		return $db->query($querySQL);
	}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Videotheque - Data Analyse</title>
	<meta charset="UTF-8">

	<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.js"></script> 
	<script type="text/javascript" src="assets/tablesorter/jquery.tablesorter.js"></script>
	<link rel="stylesheet" type="text/css" href="assets/tablesorter/themes/blue/style.css">	 
</head>
<body>
	<h1>Utilisateurs</h1>
	<?php include("user.php"); ?>

	<h1>Films</h1>
	<?php include("movie.php"); ?>

	<h1>Utilisateurs - Films</h1>
	<?php include("user_movie.php"); ?>
</body>
</html>