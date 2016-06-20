<?php
$target_dir = "img/";
// $target_dir = "upload/";
// $filename = isset($_POST['filename'])? $_POST['filename'] : null;
// echo "lala".$filename;
// $target_file = $target_dir . basename($filename);
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        // echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}


// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        // echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
        echo "http://playground.eca.ed.ac.uk/~s1520365/angel/img/".basename( $_FILES["fileToUpload"]["name"]);
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}





////////----------https://apius.faceplusplus.com/v2/detection/detect?url=FILE_URL&api_secret=UI3TXmiUf3wk1PvIh92uTGTSbxmvnRyr&api_key=41358f1d9ebc20273f2471a5a84c8777&attribute=glass,pose,gender,age,race,smiling


////////----------https://apius.faceplusplus.com/v2/recognition/verify?api_secret=UI3TXmiUf3wk1PvIh92uTGTSbxmvnRyr&face_id=FACE_ID&api_key=41358f1d9ebc20273f2471a5a84c8777&person_name=ShiHuiTan


?>