<?php
if($_SERVER['REQUEST_METHOD']=='POST')
{
    $name=$_POST['name'];
	$email=$_POST['email'];
	$mobile=$_POST['mobile'];
    $date=$_POST['date'];
	$gender=$_POST['gender'];
	$pass=$_POST['password'];
	
	$servername="localhost";
	$username="root";
	$password="";
	$database="project";
	
	$conn=mysqli_connect($servername, $username, $password, $database);
	if($conn)
	{
		echo "Successfully connected to the database!"."<br>";
		// $sql2="CREATE TABLE indexdata(`SName` VARCHAR(30),`Email Id` VARCHAR(50),`Mobile No` bigint(13),`Date` DATE, `Gender` CHAR(1),`Password` VARCHAR(50), PRIMARY KEY (`Email Id`));";
        $sql2="INSERT INTO indexdata(`SName`,`Email Id`,`Mobile No`,`Date`,`Gender`,`Password`) VALUES ('$name','$email','$mobile','$date','$gender','$pass')";
		//$sql1="DELETE FROM `storage` WHERE 0";
		$result=mysqli_query($conn, $sql2);
		if($result)
		{
			header("Location: sign.html");
		}
		else
		{
			echo "Failed to insert the record!"."<br>";
		}
		
	}
}
?>