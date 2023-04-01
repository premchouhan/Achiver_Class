<?php
if($_SERVER['REQUEST_METHOD']=='POST')
{
	$email=$_POST['myEmail'];
	$pass=$_POST['myPassword'];
	$servername="localhost";
	$username="root";
	$password="";
	$database="project";
	
	$conn=mysqli_connect($servername, $username, $password, $database);
	if($conn)
	{
        $sql="SELECT * FROM `indexdata` WHERE `Email Id`='$email' AND `Password`='$pass'";
		$result=mysqli_query($conn, $sql);
        $numrows=mysqli_num_rows($result);
		if($numrows)
		{
			header("Location: front.html");
		}
		else
		{
			echo "Invalid Login Credentials!"."<br>";
		}
		
	}
}
?>