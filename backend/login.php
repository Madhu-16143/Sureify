<?php
$conn = mysqli_connect('sql12.freemysqlhosting.net', 'sql12363677', 'fSlmiUXFHc');
if (!$conn) {
   echo "cannot connect Gnani";
}
if (!mysqli_select_db($conn, 'sql12363677')) {
   echo "database not selected";
}
$address = "sql12.freemysqlhosting.net:3306/first-application";



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