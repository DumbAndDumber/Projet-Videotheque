<?php
	$bestContributors = dbQuery("
		SELECT u.username, count(um.id) as rates 
		FROM vid_user u
		INNER JOIN vid_user_movie um
		ON u.id_user = um.id_user
		WHERE um.rate IS NOT NULL
		GROUP BY u.id_user
		ORDER BY rates DESC
		LIMIT 10
	");

	$mostWatchedMovies = dbQuery("
		SELECT m.name, count(m.id) as watched 
		FROM vid_user u
		INNER JOIN vid_user_movie um
		ON u.id_user = um.id_user
		INNER JOIN vid_movie m
		ON um.id_movie = m.id
		GROUP BY m.id
		ORDER BY watched DESC
		LIMIT 10
	");

	$topRatedMovies = dbQuery("
		SELECT m.name, avg(um.rate) as average 
		FROM vid_user_movie um
		INNER JOIN vid_movie m
		ON um.id_movie = m.id
		GROUP BY m.id
		ORDER BY average DESC
		LIMIT 10
	");
?>

<h3>Nombre de films notés par utilisateur</h3>
<table id="user-movie_rated-movies" class="tablesorter" border="0" cellpadding="0" cellspacing="1">
	<thead>
		<tr>
			<th>
				Utilisateur
			</th>
			<th>
				Films notés
			</th>
		</tr>
	</thead>
	<tbody>
		<?php
			while ($data = $bestContributors->fetch()) {
				?>
					<tr>
						<td>
							<?php echo $data["username"]; ?>
						</td>
						<td>
							<?php echo $data["rates"]; ?>
						</td>
					</tr>
				<?php
			}
		?>
	</tbody>
</table>

<h3>Films les plus vus</h3>
<table id="user-movie_most-watched" class="tablesorter" border="0" cellpadding="0" cellspacing="1">
	<thead>
		<tr>
			<th>
				Film
			</th>
			<th>
				Nombre de vues
			</th>
		</tr>
	</thead>
	<tbody>
		<?php
			while ($data = $mostWatchedMovies->fetch()) {
				?>
					<tr>
						<td>
							<?php echo $data["name"]; ?>
						</td>
						<td>
							<?php echo $data["watched"]; ?>
						</td>
					</tr>
				<?php
			}
		?>
	</tbody>
</table>

<h3>Films les mieux notés</h3>
<table id="user-movie_top-rated" class="tablesorter" border="0" cellpadding="0" cellspacing="1">
	<thead>
		<tr>
			<th>
				Film
			</th>
			<th>
				Note moyenne
			</th>
		</tr>
	</thead>
	<tbody>
		<?php
			while ($data = $topRatedMovies->fetch()) {
				?>
					<tr>
						<td>
							<?php echo $data["name"]; ?>
						</td>
						<td>
							<?php echo $data["average"]; ?>
						</td>
					</tr>
				<?php
			}
		?>
	</tbody>
</table>

<script>
	$(document).ready(function() {
		$("#user-movie_rated-movies").tablesorter();
		$("#user-movie_most-watched").tablesorter();
		$("#user-movie_top-rated").tablesorter();
	});
</script>