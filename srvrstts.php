<?php
  $json = file_get_contents("https://eu.mc-api.net/v3/server/info/simacig.aternos.me");
  $json_a = json_decode($json, true);
  echo $json_a['description']['text'];
?>
