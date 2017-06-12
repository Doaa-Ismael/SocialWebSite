$(document).ready ( function () {
	$(".Center .status button ").click(function (){

	var post = "<div></div>";
	$(".status").after(post) ;
	var div = $(".Center div:first").next() ; 
	div.addClass("just-text posts shadow radu");
	div.append("<img  class=posts-pics src=pics/pic-profile.png> <span class=names>John Doe</span> <span class=time >1 min </span><hr> ");
	var text = $("input[name]").val();
	div .append ("<p class=posts-p>" + text + " </p>");
	div.append ("<div></div>")
	var div1 = $(div).children('div') ;
	div1 .append ("<button class=like-comm> <i class=fa fa-thumbs-up > </i>Like</button> <button class=like-comm><i class=fa fa-comment> </i>Comment </button>");
	$("input[name]").val("");

});
});