$(function () {
    var toplamLi = $("#gallery .resim").length;
    var veriSay = 6;
    var sayfaSayisi = toplamLi / veriSay;
    if (sayfaSayisi > parseInt(sayfaSayisi)) {
      sayfaSayisi++;
    }
  
    $("#gallery .resim:gt(" + (veriSay - 1) + ")").hide();
  
    for (var i = 1; i <= sayfaSayisi; i++) {
      $(".pagination").append("<li><a href='#'>" + i + "</a></li>");
  
    }
    $(".pagination a:first").removeClass();
    $(".pagination li:first").addClass("active");
  
    $(".pagination li").click(function () {
  
      $("#gallery .resim").hide();
      var index = $(this).index();
      $(".pagination li").removeClass();
      $(".pagination li:eq(" + index + ")").removeClass();
      $(".pagination li:eq(" + index + ")").addClass("active");
      var syf = index + 1;
      var s = veriSay * syf;
      for (var i = s - veriSay; i < s; i++) {
  
        $("#gallery .resim:eq(" + i + ")").show();
      }
  
    });
  });