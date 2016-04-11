$(function(){
  $("#loginform").dialog({
    autoOpen: true,
    show:{
      effect:"blind",
      duration:0
    },
    hide:{
      effect:"explode",
      duration:1000
    }
  });
  $("#enter").click(function() {
    $("#loginform").dialog("open");
  });
});


function join_change(){
document.getElementsByTagName("span")[0].innerHTML="Join!!";
document.getElementsByTagName("form")[0].action="?join";
document.getElementById("butt").innerHTML="<input type=submit value='join'>";
}
function file_upload(){
document.getElementsByTagName("form")[1].action="?upload";
document.getElementsByTagName("form")[1].enctype="multipart/form-data";
document.getElementById("file").type='file';
document.getElementById("write").value='upload';
document.getElementById("uploadbut").type='hidden';

}
