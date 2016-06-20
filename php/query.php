<?php include ("connect.php");
//query from the user database by checking the face
$mysql = getConnect();
$username = $_POST['username'];

$stmt = $mysql->stmt_init();

$query = "SELECT password, question, answer, rbs_user_id FROM angelusers WHERE username= ?";

if($stmt->prepare($query)){
	$stmt->bind_param("s", $username);
	$stmt->execute();
    $stmt->bind_result($password, $question, $answer, $rbs_user_id);
     /* store result */
        $stmt->store_result();
    if($stmt->num_rows > 0){
        while($stmt->fetch()){
        	$row['username'] = $username;
            $row['password'] = $password;
            $row['question'] = $question;
            $row['answer'] = $answer;
            $row['rbs_user_id'] = $rbs_user_id;
            $row_set[] = $row;
        }
    }else{
        echo "-1";
    }
    $stmt->close();
}else{
    echo "Error: " . $mysql . "<br>" . mysqli_error($mysql);
}
$mysql->close();
if($row_set)
{echo json_encode($row_set);}//format the array into json data
?>