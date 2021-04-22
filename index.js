$(document).ready(function () {
  
  $("#index-body").fadeIn(700);
  
  $('#main-table').DataTable();


  /*var saverowintable; // ----в разработке

  /* Выделение строки цветом и сохранения ее айди */
  /*$('#main-table-div > table > tbody > tr').click(function(){
    if(saverowintable == null){   // проверка на первое выделение
      $('#main-table-div > table > tbody > tr').removeClass();
      $(this).addClass('bg-primary');
      $(this).addClass('text-white');
      saverowintable = $(this);
    }
    else if($(this).attr("class") != saverowintable.attr("class") ){  // проверка на повторное нажатие
      $('#main-table-div > table > tbody > tr').removeClass();
      $(this).addClass('bg-primary');
      $(this).addClass('text-white');
      saverowintable = $(this); //---- в разработке
    }
    else{
      $(this).removeClass();
      saverowintable = null;
    }
   
    
  });*/

  






  /* exit event */
    $("#modal-sign-out-exit-btm").click(function (e) { 
      $("#index-body").fadeOut(700,function(){
                      
        window.location.href = "loginpage.html";

      });
      
    });




  /*Modal open/close other event/function*/
    /*Modal Sign out */
      $('#sign-out-btm').click(function() {
        $('#modal-sign-out').fadeIn();
        return false;
      });	

      $('#modal-sign-out-close-btm').click(function() {
        $(this).parents('#modal-sign-out').fadeOut();
        return false;
      });        
  


    // Закрытие по клавише Esc.
        /*$(document).keydown(function(e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                $('.popup-fade').fadeOut();
            }
        });*/

        // Клик по фону, но не по окну.
        /*$('.popup-fade').click(function(e) {
            if ($(e.target).closest('.popup').length == 0) {
                $(this).fadeOut();					
            }
        });	*/


    /***************/
    /*Modal Details request */
      $('#details-request-btm').click(function() {
        $('#modal-details-request').fadeIn();
        return false;
      });	

      $('#modal-details-close-btm').click(function() {
        $(this).parents('#modal-details-request').fadeOut();
        return false;
      }); 
    /***************/
    /*Modal Create request */
    $('#create-request-btm').click(function() {
      $('#modal-create-request').fadeIn();
      return false;
    });	

    $('#modal-create-close-btm').click(function() {
      $(this).parents('#modal-create-request').fadeOut();
      return false;
    });
    /*Modal Close request */
    $('#create-request-btm').click(function() {
      $('#modal-create-request').fadeIn();
      return false;
    });	

    $('#modal-create-close-btm').click(function() {
      $(this).parents('#modal-create-request').fadeOut();
      return false;
    });  

  /********************************************/










});


function TableSortResize(){
  let i = 0;
  while(i < 8){

    $("#sort-tr > #"+ i).width($("#tmain-tr > #" + i).width());
    i++;
  }


}