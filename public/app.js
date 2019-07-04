$.getJSon("/articles",function(data){
for (var i = 0; i < data.lenght; i++) {
    $("#articles").append("<p data-id='" + data[i]._id+ "'>" + data[i].title + "<br/>" + data[i].link + "</p>");
}
});