<?php
// Get the form data
$name = 'Anonymous'
$comment = $_POST['comment'];
$id = $_POST['id']

// Open the CSV file for writing
$file = fopen('comments.csv', 'a');
$date = date("d/m/Y - h:ia")
// Append the form data to the CSV file
fputcsv($file, array($name, $comment, $date,$id));

// Close the CSV file
fclose($file);
?>