<?php
function linkHash($name){
  return md5($name."H3l10 +rub1y4 = hehe * W0RLD");
}
function dbconnect(){
  header("Content-Type: text/html; charset=UTF-8");
  session_start();
  $mysql_hostname="localhost";
  $mysql_user="hack01";
  $mysql_password="hack!@#";
  $mysql_database="hack01";
  $db=mysql_connect($mysql_hostname,$mysql_user,$mysql_password) or die("db connection error");
  mysql_select_db($mysql_database,$db) or die("db connection error2");
  mysql_query("set names utf8",$db);
}


function login_chk(){
  SESSION_START();
  $id = $_SESSION['site_id'];
  if(!$id) exit ("<script>location.href='./';</script>");
}

?>
