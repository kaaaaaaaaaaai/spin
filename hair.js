
(function() {
		document.open();
		document.write(domain_string + article_id + frame_width);
		document.close();

	baseUrl = article_id+ ".html";
	$.ajax({
		url: baseUrl,
		type: "GET",
		dataType: "",
		success: function(data) {


			// find contents of divs
			//var relatedData = $('.ArticleList').html(data);
			console.log($(data).find('.ArticleList').html());
			$('#relatedLink').append($(data).find('.ArticleList').parent().html());
		},
		error: function(status) {
			console.log("request error:"+url);
		}
	});
})();
