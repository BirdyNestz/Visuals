var song = document.getElementById("song")
var buttonClicked = true;

$(".content-area").on("click", function(){
console.log("clicked on play")

if (buttonClicked){
song.play();
$(".btn-play").click(function(){
    $(".blob").show()
    $(".blob").fadeIn("fast");
    $(".btn-pause").show();
  });
  $(".btn-pause").click(function(){
    $(".play").show()
    $(".blob").fadeIn("fast");
  });
buttonClicked = false;
}else{
    song.pause();
    console.log("button clicked")
    buttonClicked = true;
    console.log("button clicked")
}
})