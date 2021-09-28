<p class=”welcome”>Welcome, <b><?php echo $_SESSION[‘name’]; ?></b></p>


<script type=”text/javascript”>
// jQuery Document
$(document).ready(function(){
//If the user wants to logout
$(“#exit”).click(function(){
var exit = confirm(“Are you sure you want to logout?”);
if(exit==true){window.location = ‘index.php?logout=true’;} 
});
});
</script>


if(isset($_GET[‘logout’])){
//Simple exit message
$logout_message = “<div class=’msgln’><span class=’left-info’>User <b class=’user-name-left’>”. $_SESSION[‘name’] .”</b> has left the chat session.</span><br></div>”;
file_put_contents(“log.html”, $logout_message, FILE_APPEND | LOCK_EX);
session_destroy();
header(“Location: index.php”); //Redirect the user
}