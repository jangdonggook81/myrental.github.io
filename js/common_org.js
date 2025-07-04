/* 
  mobile
  include 관련

*/

function adjustScrollingHeight() {
  var topHeight = document.querySelector('.modal_search .top').offsetHeight;
  var middleHeight = document.querySelector('.modal_search .middle').offsetHeight;
  var bottomHeight = window.innerHeight - topHeight - middleHeight; // 계산된 높이
  document.querySelector('.modal_search .list_scrolling').style.height = (bottomHeight-120) + 'px';
}
$(function () {

    adjustScrollingHeight()
    window.onload = adjustScrollingHeight;
    window.onresize = adjustScrollingHeight;
    
});


$(function () {

  /* header footer load */

$("#header").load("./include/header.html", function (response, status, xhr) {

  if (status == "error") {

    console.error("Error loading external HTML:", xhr.status, xhr.statusText);

  }

});

$("#footer").load("./include/footer.html", function (response, status, xhr) {

 if (status == "error") {

   console.error("Error loading external HTML:", xhr.status, xhr.statusText);

  }

});





  $("#navi").load("./include/navi.html", function (response, status, xhr) {

    if (status == "error") {

      console.error("Error loading external HTML:", xhr.status, xhr.statusText);

    }

  });

  $("#sideNavi").load("./include/sideNavi.html", function (response, status, xhr) {

    if (status == "error") {

      console.error("Error loading external HTML:", xhr.status, xhr.statusText);

    }

  });

  $("#floating").load("./include/floating.html", function (response, status, xhr) {

    if (status == "error") {

      console.error("Error loading external HTML:", xhr.status, xhr.statusText);

    }

  });

})//$ end



/* 

  햄버거메뉴클릭

*/

$(function () {

  //사이드 메뉴 열기

  $(document).on('click', '.navi .btn_ham', function (e) {

    e.preventDefault();

    $('.side_navi').css('display', 'block')

    $('body').addClass('no_scroll_moving')

  })

  //사이드 메뉴 닫기

  $(document).on('click', '.side_navi .btn_close', function (e) {

    e.preventDefault();

    $('.side_navi').css('display', 'none')

    $('body').removeClass('no_scroll_moving')

  })

})



/* 

    플로팅 관련

*/

$(function () {

  $(window).scroll(function () {

    if ($(this).scrollTop() > 50) {

      $('.floating .btn_top').addClass('visible');

    } else {

      $('.floating .btn_top').removeClass('visible');

    }

  });

  $(document).on('click', '.floating .btn_top', function () {

    $('html, body').animate({ scrollTop: 0 }, 'fast');

  })

  $(document).on('click', '.floating .btn', function (event) {



    event.preventDefault();

    $(this).toggleClass('active');

    if ($('.floating').hasClass('switch')) {

      $('.floating').removeClass('switch');

      $('body').removeClass('no_scroll_moving')

    } else {

      $('.floating').addClass('switch');

      $('body').addClass('no_scroll_moving')

    }



  })

})





/* 

  검색관련 

*/

$(function () {

  function inp_checker() {

    var inputValue = $('.inp_search_case .inp_txt').val();

    if (inputValue) {

      console.log('값이 있습니다: ' + inputValue);

      $('.inp_search_case').addClass('focused');

    } else {

      console.log('값이 없습니다.');

      $('.inp_search_case').removeClass('focused');

    }

  }







  $('.inp_search_case .inp_txt').on('focus', function () {

    $(this).parent().addClass('focused');

    //inp_checker()

  }).on('blur', function () {

    // $(this).parent().removeClass('focused');

    inp_checker()

  });

})





/* 

    swiper 관련

*/

$(function () {

  const home_top_visual = new Swiper('.top_visual .main_swiper', {

    loop: true,

    slidesPerView: 1,

    autoplay: {

      delay: 5000, //5초마다 자동롤링 ( 1000 1초 ,  2000 2초 )

    },

    pagination: {

      el: '.top_visual .swiper-pagination',

      type: 'fraction',

    },

  });


 const home_best_products_2 = new Swiper('#products_swiper_2', {

   loop: true,

   slidesPerView: 1,

   spaceBetween: 0,

   observer: true,

   observeParents: true,

   pagination: {

     el: '#products_swiper_2 .pagination_case .swiper-pagination'

   },

 });


  const home_md_swiper_01 = new Swiper('.md_swiper_case .md_swiper', {

    loop: false,

    freeMode: true,

    slidesPerView: 1.6,

    spaceBetween: 10,

    observer: true,

    observeParents: true,

  });

  const home_new_products = new Swiper('.new_product_swiper .new_pro_swiper', {

    loop: true,

    slidesPerView: 1.8,

    spaceBetween: 16,

    centeredSlides: true,

    observer: true,

    observeParents: true,

    navigation: {

      nextEl: '.new_product_swiper .swiper-button-next',

      prevEl: '.new_product_swiper .swiper-button-prev',

    }

  });

  const home_user_review_swiper_01 = new Swiper('.user_review_swiper_case .md_swiper', {

    loop: false,

    freeMode: true,

    slidesPerView: 2.1,

    spaceBetween: 10,

    observer: true,

    observeParents: true,

  });



})

/* 마이렌탈 상담신청 */

$(function () {

  $('.option_select').on('change', function (e) {

    e.preventDefault();

    $(this).addClass('active')

  });

  $(document).on('click', '.ques', function (e) {
    
    var checkBox = $(this).find('.checkCase input[type="checkbox"]');

    checkBox.prop('checked', !checkBox.prop('checked'));

  });

})





/* 상품상세페이지 (상세설명 ,공통정보, 요약정보) */



$(function () {

  $(document).on('click', '.productPageDetail .middle .tab_case ul li a', function (e) {

    var index = $(this).parent().index();

    $('.productPageDetail .middle .tab_case ul li').find('a').removeClass('active')

    $('.productPageDetail .middle .tab_case ul li').eq(index).find('a').addClass('active')

    $('.productPageDetail .middle .tabs').css('display', 'none')

    $('.productPageDetail .middle .tabs').eq(index).css('display', 'block')

  })



})





/* 

  맴버쉽관련

*/

$(function () {

  function inp_checker2() {

    var inputValue = $('.phone_cert .inp_case .cert_filed').val();

    if (inputValue) {

      console.log('값이 있습니다: ' + inputValue);

      $('.phone_cert .inp_case .cert_filed').parent().addClass('focus');

    } else {

      console.log('값이 없습니다.');

      $('.phone_cert .inp_case .cert_filed').parent().removeClass('focus');

    }

  }







  $('.phone_cert .inp_case .cert_filed').on('focus', function () {

    $(this).parent().addClass('focus');

  }).on('blur', function () {

    inp_checker2()

  });

})










/* 모달팝업관련 */

function ModalPopup(selector,zindex){

  let _this = this;

  this.pop_index = 0; // 팝업몇개

  this.index = zindex;

  this.$sel = $(selector);

  this.$sel.find(".close").click(function(){

    _this.close();

  })

}

ModalPopup.prototype.open = function(){

  $("body").addClass("modal-open")

  $(this.$sel).css({"display":"block" , "z-index" : this.index  + 1});

  this.modal_bg_make();

}

ModalPopup.prototype.close = function(){

  $("body").removeClass("modal-open")

  $(this.$sel).css({"display":"none"});

  

  //console.log(".modal-bg-"+(this.index-1))

  $(".modal-bg-"+(this.index-1)).remove();



}

ModalPopup.prototype.modal_bg_make = function(){  

  let _this = this;   

  $("body").append('<div class="modal-bg modal-bg-'+this.index+'" style="z-index:'+ this.index +'"><div>')

  this.index+=1;

}



// 레이어 외부 클릭 닫기

$(document).mouseup(function (e){

  let LayerPopup = $(".pop_inner");

  let clicked = $(e.target);

  if(LayerPopup.has(e.target).length === 0){

    clicked.find('.close').click();

  }

});









/* 

  필터관련

*/
function filter_area_click(){
  

  if($(".filter_area").hasClass('active')){
    
    $(".floating").hide();
  }else{
    
    $(".floating").show();
  }
}

$(function(){

  $(document).on('click', '.filter_area .middle a', function (e) {

    let currentIndex = $(this).index();

    console.log(currentIndex)

    $(".filter_area .boxs").css("display","none");

    $(".filter_area .boxs").eq(currentIndex).css("display","block");

    $(this).addClass('active').siblings().removeClass('active')

  })

})