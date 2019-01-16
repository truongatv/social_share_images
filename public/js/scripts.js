$(function(){
	$('#post-comment').hide();
	$('#btncomment').on('click', function(event){
		console.log("test");
		event.preventDefault();

		$('#post-comment').show();
	})
});