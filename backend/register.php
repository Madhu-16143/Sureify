<?php
   $conn = mysqli_connect('127.0.0.1', 'root', '');
   if(! $conn ) {
      echo "cannot connect Gnani";
   }
   if(!mysqli_select_db($conn,'mysql')){
	echo "database not selected";
   }
//    C:\xampp\htdocs\sureify\Sureify\frontend\first-application
   $address= "http://localhost:3000/first-application";
   $username = $_POST['username'];
   $email = $_POST['email'];
   $password = $_POST['password'];
   $res=new \stdClass;
   $res->status=false;
   $sql = "INSERT INTO first_application_login VALUES ('$username','$email','$password')";
   $result=mysqli_query($conn,$sql);
   if(!$result){
      http_response_code(404);
      die(mysqli_error($conn));
   }
   else{
      $res=new \stdClass;
      $res->status=true;  
   } 
   echo json_encode($res);

?>