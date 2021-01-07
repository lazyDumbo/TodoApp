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
    $("#description").val('')
    if(description.trim()==null || description.trim()==""){
            alert("Add a description")
            return;
    }
    var category=$("#category").val();
    $("#category").val('')
    if(category==null || category==""){
            alert("Choose a category")
            return ;
    }
    var date=$("#date").val();
    $("#date").val('')
    if(date==null || date==""){
            alert("Choose a date")
            return;
    }
    //Making ajax request to add todo item
    $.post("/todo/add",{"description":description,
"category":category,
"due_date":date
},function(todo){
    //Adding new todo item to home page
    $("#todoapp").append(`<tr>
    <td colspan="2" class="todo">
        
     <input type="checkbox" name="${todo._id}" id="${todo._id}" >
        <strong >${todo.description}</strong>
        <strong class="due_date"> <i class="fa fa-calendar" aria-hidden="true"></i> ${ todo.due_date }</strong>
    </td>
    <td colspan="2" class="todo">
             <button class="category"><strong>${ todo.category}</strong></button>
                        
    </td>
</tr> `)
}) 
})










//Mark todos as done or note done
//Make sure u dont change order of elements in html code depends on it
$('input[type="checkbox"]').click(function() {
    if ($(this).is(':checked')) {
      $(this).next().addClass("checked")
      $.post("/todo/mark",{"id":$(this).attr("id"),"done":true})
    }
    else{
        $(this).next().removeClass("checked")
        $.post("/todo/mark",{"id":$(this).attr("id"),"done":false})
    }
  });
  function pausecomp(millis)
  {
      var date = new Date();
      var curDate = null;
      do { curDate = new Date(); }
      while(curDate-date < millis);
  }  









$('#deleteTask').click(function(){
    var todo=$('.checked').parent().parent();
    var id=new Array();
    
    
    $('.checked').each(function(check){
        id.push($(this).prev().attr("id"))

     console.log(id);
    })
    
    
     pausecomp(1000);
     console.log(id);
        $.post("todo/delete",{'id':id},function(){
            console.log("deleted");
    },'json')
    todo.remove();
    
    
})  

