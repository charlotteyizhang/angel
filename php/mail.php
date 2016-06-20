
<?php
  
  //Email information
	$admin_email = $_POST['mail'];
	$comment = $_POST['comment'];
  // $admin_email = "charlotte.yi.zhang@gmail.com";
  // $another_email = "tanshihui.10@gmail.com"
  $email = "s1520365@sms.ed.ac.uk";
  $subject = "Auto-Confirmation";
  // $comment = "The money is in our server, please feel assured to give the cash";
  // $comment_BORROW = "You are using Angel Money service, if you did not transfer the money please cancel the payment";
  //send email
  mail($admin_email, "$subject", $comment, "From:" . $email);
  // mail($another_email, "$subject", $comment_BORROW, "From:" . $email);
  


  //Email response
  echo "Thank you for contacting us!";
  
?>