<?php
$conn = mysqli_connect('127.0.0.1', 'root', '');
if (!$conn) {
   echo "cannot connect Gnani";
}
if (!mysqli_select_db($conn, 'mysql')) {
   echo "database not selected";
}
$address = "http://localhost:3000/first-application";



$username = $pass = "";
$username = $_POST['username'];
$pass = $_POST['password'];
$sql = "SELECT * FROM first_application_login where username='$username' ";
//$result = mysqli_query($pwd, $conn);
$result = $conn->query($sql);
if (!$result) {
   echo "DB Error, could not query the database\n";
   die(mysqli_error($conn));
   exit;
}
$response=new \stdClass;
$response->status=false;
$response->data=[];
// $status = false;
while ($row = mysqli_fetch_assoc($result)) {


   if (strcasecmp($pass, $row['password']) != 0) {

      //   include"log.html";
      // echo json_encode($status);
   } 
   else {
      // session_start();
      $response=new \stdClass;
      $response->status = true;
      $dat=new \stdClass;
      $dat->name=$row['username'];
      $dat->email=$row['gmail'];
      $response->data=$dat;
      // $_SESSION["user"]=$row['username'];
      // return $status
      // require"alog.php";
   }
}
echo json_encode($response);