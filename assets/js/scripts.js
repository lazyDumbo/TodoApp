//Addding fadein and fadeout on input and select buttons
$("input,select").focus(function(e){
    e.preventDefault();
    var id=this.getAttribute("id");
    $(`label[for="${id}"]`).parent().css({backgroundColor:"lightgrey",transition:'all 0.5s'})
    $(`#${id}`).css({backgroundColor:"lightgrey",transition:'all 0.5s'})
})
$("input,select").focusout(function(e){
    e.preventDefault();
    var id=this.getAttribute("id");
    $(`label[for="${id}"]`).parent().css({backgroundColor:"white",transition:'all 0.5s'})
    $(`#${id}`).css({backgroundColor:"white",transition:'all 0.5s'})
})
//