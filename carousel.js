var istanbulPhotos = ["bluemosque", "galatatower", "grandbazaar",
					"hagiasophia", "topkapipalace"]
var whichPicture = 0;

function setPhoto() {
	var picture = istanbulPhotos[whichPicture];
	$current = $("img");
	$image = '<img src = "' + picture + '.jpg" style = "height:600px; width:0;align:right"/>';
	$("#photo-carousel img").animate({marginLeft: "0", width:0});
	$("#photo-carousel").append($image);
	$("#photo-carousel img").animate({width: "800px"}, function() {
		$current.remove();
	});
	
	$("#photo-selector div").removeClass("selected");
	$("#photo-selector div").eq(whichPicture).addClass("selected");
	

	
}

function nextPhoto() {
	if(whichPicture+1 == istanbulPhotos.length) {
		whichPicture = 0;
	} else {
		whichPicture ++;
	}
	setPhoto();
}

function previousPhoto() {
	if(whichPicture==0) {
		whichPicture = istanbulPhotos.length-1;
	}else {
		whichPicture --;
	}
	setPhoto();
}

$("#backward").on("click", previousPhoto);
$("#forward").on("click", nextPhoto);

	
$(document).ready(function() {
	$image = '<img src = "bluemosque.jpg" style = "height: 600px; max-width:100%; position:relative"/>'
	$("#photo-carousel").append($image);
	$("#photo-selector div:first").addClass("selected");
	
	$("#photo-carousel").on({
		"mouseover": function() {
			$("#forward, #backward").css("visibility", "visible")},
		"mouseleave": function() {
			$("#forward, #backward").css("visibility", "hidden")}
	});
	setInterval(nextPhoto, 3000);
});