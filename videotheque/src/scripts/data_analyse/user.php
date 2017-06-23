<?php
	$inscriptions = dbQuery("
		SELECT extract(year_month from inscription_date) as month, count(id_user) as inscriptions 
		FROM `vid_user`
		GROUP BY month
		ORDER BY month
	");
?>

<h3>Inscriptions par mois</h3>
<table id="user_inscriptions-mois" class="tablesorter" border="0" cellpadding="0" cellspacing="1">
	<thead>
		<tr>
			<th>
				Mois
			</th>
			<th>
				Inscriptions
			</th>
		</tr>
	</thead>
	<tbody>
		<?php
			while ($data = $inscriptions->fetch()) {
				?>
					<tr>
						<td>
							<?php echo $data["month"]; ?>
						</td>
						<td>
							<?php echo $data["inscriptions"]; ?>
						</td>
					</tr>
				<?php
			}
		?>
	</tbody>
</table>

<script>
	$(document).ready(function() {
		$("#user_inscriptions-mois").tablesorter();
	});
</script>