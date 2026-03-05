var parames={
"type1":"paramer1","type2":"paramer2"};
$.ajax({
url:'bodyWeightindex.html',
type:'post',
dataType:'html',
data:parames,
error: function(){alert('error');},
success:function(data){
$("#exampleFrame-bodyweight").html(data);
}
});