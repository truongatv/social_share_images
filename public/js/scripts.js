$(function(){
	$('#post-comment').hide();
	$('#btncomment').on('click', function(event){
		console.log("test");
		event.preventDefault();

		$('#post-comment').show();
	})
});

$('#btn-like').on('click', function(event) {
	event.preventDefault();
	console.log('test');
	var imgId = $(this).data('id');

	$.post('/images/'+ imgId + '/like').done(function(data) {
		$('.likes-count').text(data.likes);
	})
})