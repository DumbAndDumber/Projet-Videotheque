<?php
	$moviesByYear = dbQuery("
		SELECT extract(year from release_date) as year, count(id) as movies
		FROM vid_movie
		WHERE extract(year from release_date) != 0
		GROUP BY year
		ORDER BY movies DESC, year DESC
		LIMIT 10
	");
?>

<h3>Films par année de sortie</h3>
<table id="movie_movie-year" class="tablesorter" border="0" cellpadding="0" cellspacing="1">
	<thead>
		<tr>
			<th>
				Année
			</th>
			<th>
				Films
			</th>
		</tr>
	</thead>
	<tbody>
		<?php
			while ($data = $moviesByYear->fetch()) {
				?>
					<tr>
						<td>
							<?php echo $data["year"]; ?>
						</td>
						<td>
							<?php echo $data["movies"]; ?>
						</td>
					</tr>
				<?php
			}
		?>
	</tbody>
</table>

<script>
	$(document).ready(function() {
		$("#movie_movie-year").tablesorter();
	});
</script>