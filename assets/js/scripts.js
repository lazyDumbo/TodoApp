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
//Taking input from form , making todos and adding validation
$('#addTask').click(function(e){
    e.preventDefault();
    var description=$("#description").val();
    if(description.trim()==null || description.trim()==""){
            alert("Add a description")
            return;
    }
    var category=$("#category").val();
    console.log(category)
    if(category==null || category==""){
            alert("Choose a category")
            return ;
    }
    var date=$("#date").val();
    if(date==null || date==""){
            alert("Choose a date")
            return;
    }
    

})