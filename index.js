$(document).ready(function () {
  $(".phone").mouseenter(function () {
    $(".phn").css({
      color: "orange",
    });
  });
  $(".phone-tab").mouseleave(function () {
    $(".phn").css({
      color: "black",
    });
  });
  $(".lap").mouseenter(function () {
    $(".lpt").css({
      color: "orange",
    });
  });
  $(".lap").mouseleave(function () {
    $(".lpt").css({
      color: "black",
    });
  });
  $(".phone-tab").mouseenter(function () {
    $(".phone").slideDown();
  });
  $(".phone-tab").mouseleave(function () {
    $(".phone").slideUp();
  });
  $(".ipad").mouseenter(function () {
    $(".tab").slideDown();
  });
  $(".ipad").mouseleave(function () {
    $(".tab").slideUp();
  });
  $(".laptop").mouseenter(function () {
    $(".lap").slideDown();
  });
  $(".laptop").mouseleave(function () {
    $(".lap").slideUp();
  });


  

  $(".purple").click(function () {
    var imagepurple = "./img/iphone-14-pro-purple.jpg";
    $(".iphone14promax").css("background-image", "url(" + imagepurple + ")");
    $(".color-title").text("Color : Purple");
  });
  $(".white").click(function () {
    var imagewhite = "./img/iphone-14-pro-white.jpg";
    $(".iphone14promax").css("background-image", "url(" + imagewhite + ")");
    $(".color-title").text("Color : White");
  });
  $(".golden").click(function () {
    var imagegold = "./img/iphone-14-pro-gold.jpg";
    $(".iphone14promax").css("background-image", "url(" + imagegold + ")");
    $(".color-title").text("Color : Golden");
  });
  $(".faq-topic-1").click(function () {
    $(".faq-para-1").slideToggle("slow");
  });
  $(".faq-topic-2").click(function () {
    $(".faq-para-2").slideToggle("slow");
  });
  $(".faq-topic-3").click(function () {
    $(".faq-para-3").slideToggle("slow");
  });
  $(".faq-topic-4").click(function () {
    $(".faq-para-4").slideToggle("slow");
  });
});
