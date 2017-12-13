<?
//These are variables, just like JS variables
$user = 'root'; //user name
$pass = 'root'; //user name
$host = 'localhost'; //host we're using (apache inside of MAMP)
$db = 'a3_copperInfo'; //database we're connecting to

// 1. Create a connection to the database
$conn = mysql_connect($host, $user, $pass, $db);
mysqli_set_charset($conn, 'utf8');

//2. test the connection
if (!$conn) {
  echo 'something broke, your connection will not work';
  exit;
}

//If everything worked, we'll see this
//echo 'connected, yo!';


$myQuery = "SELECT * FROM mainmodel"; //This is a simple SQL query
$result = mysqli_query($conn, $myQuery); //Result holds the result set
$rows = array(); //We'll push each row into an array

/* while ($row = mysqli_fetch_assoc($result)) {
  $rows[] = $row; //Push each row from the result (the DB rows) into this array
} */

// Let's see what we get!
//var_dump($rows);

if (isset($_GET['carModel'])) {
  $car = $_GET['carModel'];

  $myQuery = "SELECT * FROM mainmodel WHERE model = '$car'";
  $result = mysqli_query($conn, $myQuery);

  $row = mysqli_fetch_assoc($result);

  var_dump($row);

  echo json_encode($row);
}


?>
