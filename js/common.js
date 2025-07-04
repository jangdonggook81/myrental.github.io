/* mobile include 관련 */
function adjustScrollingHeight() {
    var topHeight = document.querySelector('.modal_search .top').offsetHeight;
    var middleHeight = document.querySelector('.modal_search .middle').offsetHeight;
    var bottomHeight = window.innerHeight - topHeight - middleHeight; // 계산된 높이
    document.querySelector('.modal_search .list_scrolling').style.height = (bottomHeight - 120) + 'px';
}
$(function() {
    adjustScrollingHeight();
    window.onload = adjustScrollingHeight;
    window.onresize = adjustScrollingHeight;
});
$(function() {
    /* header footer load */
    $("#header").load("./include/header.html", function(response, status, xhr) {
        if (status == "error") {
            //console.error("Error loading external HTML:", xhr.status, xhr.statusText);
        }

        /* 2025.06.29 */
        console.log("실행되고있나요????????")

        setTimeout(function() {

            const swiperContainer = document.querySelector('.top_header_banner .main_swiper');
            const slides = swiperContainer.querySelectorAll('.swiper-slide');
            // 슬라이드 요소가 1개이상일때 실행
            if (slides.length > 1) {
                console.log("헤더모션실행")
                const top_header_banner = new Swiper('.top_header_banner .main_swiper', {
                    direction: "vertical",
                    loop: true,
                    slidesPerView: 1,
                    autoplay: {
                        delay: 6000, //5초마다 자동롤링 ( 1000 1초 ,  2000 2초 )
                        disableOnInteraction: false, // 상호작용 후에도 autoplay 유지
                    },
                });
            }
        }, 500)

       
        /* //2025.06.29 */
    });
    $("#footer").load("./include/footer.html", function(response, status, xhr) {
        if (status == "error") {
            //console.error("Error loading external HTML:", xhr.status, xhr.statusText);
        }
    });
    $("#navi").load("./include/navi.html", function(response, status, xhr) {
        if (status == "error") {
            //console.error("Error loading external HTML:", xhr.status, xhr.statusText);
        }
    });
    $("#sideNavi").load("./include/sideNavi.html", function(response, status, xhr) {
        if (status == "error") {
            //console.error("Error loading external HTML:", xhr.status, xhr.statusText);
        }
    });
    $("#floating").load("./include/floating.html", function(response, status, xhr) {
        if (status == "error") {
            //console.error("Error loading external HTML:", xhr.status, xhr.statusText);
        }
    });
}) //$ end
/* 햄버거메뉴클릭 */
$(function() {
    //사이드 메뉴 열기
    $(document).on('click', '.navi .btn_ham', function(e) {
        e.preventDefault();
        $('.side_navi').css('display', 'block');
        $('body').addClass('no_scroll_moving');
    });
    //사이드 메뉴 닫기
    $(document).on('click', '.side_navi .btn_close', function(e) {
        e.preventDefault();
        $('.side_navi').css('display', 'none');
        $('body').removeClass('no_scroll_moving');
    });
});
/* 플로팅 관련 */

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.floating .btn_top').addClass('visible');
        } else {
            $('.floating .btn_top').removeClass('visible');
        }
    });
    $(document).on('click', '.floating .btn_top', function() {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    });
    $(document).on('click', '.floating .btn', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        if ($('.floating').hasClass('switch')) {
            $('.floating').removeClass('switch');
            $('body').removeClass('no_scroll_moving');
        } else {
            $('.floating').addClass('switch');
            $('body').addClass('no_scroll_moving');
        }
    });
});

/* 검색관련 */
$(function() {
    function inp_checker() {
        var inputValue = $('.inp_search_case .inp_txt').val();
        if (inputValue) {
            //console.log('값이 있습니다: ' + inputValue);
            $('.inp_search_case').addClass('focused');
        } else {
            //console.log('값이 없습니다.');
            $('.inp_search_case').removeClass('focused');
        }
    }
    $('.inp_search_case .inp_txt').on('focus', function() {
        $(this).parent().addClass('focused');
    }).on('blur', function() {
        inp_checker();
    });
    inp_checker();
});

/* swiper 관련 */
$(function() {
    const home_top_visual = new Swiper('.top_visual .main_swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10, /* 2025.06.29 추가 */
        autoplay: {
            delay: 5000, //5초마다 자동롤링 ( 1000 1초 ,  2000 2초 )
        },
        pagination: {
            el: '.top_visual .swiper-pagination',
            type: 'fraction',
        },
    });
    /* 2025.06.29 추가 */
    const slide_view_1_banner = new Swiper('.slide_view_1_banner .main_swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10, 
        autoplay: {
            delay: 5000, //5초마다 자동롤링 ( 1000 1초 ,  2000 2초 )
        },
        pagination: {
            el: '.slide_view_1_banner .swiper-pagination',
            type: 'fraction',
        },
    });
    /* //2025.06.29 추가 */
    // 이달의신상 이미지 롤링추가
    const md_pick_visual = new Swiper('.md_pick_visual .main_swiper', {
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 5000, //5초마다 자동롤링 ( 1000 1초 ,  2000 2초 )
        },
        pagination: {
            el: '.md_pick_visual .swiper-pagination',
            type: 'fraction',
        },
    });

    const home_months_pick = new Swiper('.months_pick .main_swiper_2', {
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 5000, //5초마다 자동롤링 ( 1000 1초 ,  2000 2초 )
        },
        pagination: {
            el: '.months_pick .swiper-pagination',
            type: 'fraction',
        },
    });
    /* 2025.06.29 퍼블테스트를 위한 코드로서  개발적용시 주석처리 : 라이브 적용시 메인의 BEST 상품 스크립트와 충돌 */
    const home_best_products = new Swiper('.product_object .products_swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        pagination: {
          el: '.product_object .products_swiper .pagination_case .swiper-pagination'
        },
    });
    /* //2025.06.29 */

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
        loop: true,
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
});
/* 마이렌탈 상담신청 */
$(function() {
    $('.option_select').on('change', function(e) {
        e.preventDefault();
        $(this).addClass('active');
    });
    $(document).on('click', '.ques', function(e) {
        var checkBox = $(this).find('.checkCase input[type="checkbox"]');
        checkBox.prop('checked', !checkBox.prop('checked'));
    });
});
/* 상품상세페이지 (상세설명 ,공통정보, 요약정보) */
$(function() {
    $(document).on('click', '.productPageDetail .middle .tab_case ul li a', function(e) {
        var index = $(this).parent().index();
        $('.productPageDetail .middle .tab_case ul li').find('a').removeClass('active');
        $('.productPageDetail .middle .tab_case ul li').eq(index).find('a').addClass('active');
        $('.productPageDetail .middle .tabs').css('display', 'none');
        $('.productPageDetail .middle .tabs').eq(index).css('display', 'block');
    });
});
/* 맴버쉽관련 */
$(function() {
    function inp_checker2() {
        var inputValue = $('.phone_cert .inp_case .cert_filed').val();
        if (inputValue) {
            //console.log('값이 있습니다: ' + inputValue);
            $('.phone_cert .inp_case .cert_filed').parent().addClass('focus');
        } else {
            //console.log('값이 없습니다.');
            $('.phone_cert .inp_case .cert_filed').parent().removeClass('focus');
        }
    }
    $('.phone_cert .inp_case .cert_filed').on('focus', function() {
        $(this).parent().addClass('focus');
    }).on('blur', function() {
        inp_checker2();
    });
});
/* 모달팝업관련 */
function ModalPopup(selector, zindex) {
    let _this = this;
    this.pop_index = 0; // 팝업몇개
    this.index = zindex;
    this.$sel = $(selector);
    this.$sel.find(".close").click(function() {
        _this.close();
    });
}
ModalPopup.prototype.open = function() {
    $("body").addClass("modal-open");
    $(this.$sel).css({
        "display": "block",
        "z-index": this.index + 1
    });
    this.modal_bg_make();
}
ModalPopup.prototype.close = function() {
    $("body").removeClass("modal-open");
    $(this.$sel).css({
        "display": "none"
    });
    $(".modal-bg-" + (this.index - 1)).remove();
}
ModalPopup.prototype.modal_bg_make = function() {
    let _this = this;
    $("body").append('<div class="modal-bg modal-bg-' + this.index + '" style="z-index:' + this.index + '"><div>');
    this.index += 1;
}
// 레이어 외부 클릭 닫기
$(document).mouseup(function(e) {
    let LayerPopup = $(".pop_inner");
    let clicked = $(e.target);
    if (LayerPopup.has(e.target).length === 0) {
        clicked.find('.close').click();
    }
});
/* 필터관련 */
function filter_area_click() {
    if ($(".filter_area").hasClass('active')) {
        $(".floating").hide();
    } else {
        $(".floating").show();
    }
}
$(function() {
    $(document).on('click', '.filter_area .middle a', function(e) {
        let currentIndex = $(this).index();
        //console.log(currentIndex);
        $(".filter_area .boxs").css("display", "none");
        $(".filter_area .boxs").eq(currentIndex).css("display", "block");
        $(".filter_area").addClass('active');
        filter_area_click();
    });
    $(document).on('click', '.filter_area .close', function(e) {
        $(".filter_area").removeClass('active');
        filter_area_click();
    });
});

/* 2025.06.29 리뷰세부화면 */
$(function(){
    // Swiper 초기화 - 슬라이드가 하나 이상일 때만 활성화
    const swiperWrapper = document.querySelector('.rdp-product-section .swiper-wrapper');
    const slides = swiperWrapper.querySelectorAll('.rdp-product-section .swiper-slide');

    let productSwiper = null;

    if (slides.length > 1) {
        productSwiper = new Swiper('.pop-product-swiper', {
            loop: true,
            pagination: {
                el: '.rdp-product-section .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.pop-product-swiper .swiper-button-next', // 다음 버튼
                prevEl: '.pop-product-swiper .swiper-button-prev', // 이전 버튼
            },
            effect: 'slide',
            speed: 500,
            touchRatio: 1,
            touchAngle: 20,
            grabCursor: true,
        });
    } else {
        // 슬라이드가 1개면 페이지네이션 숨기기
        const pagination = document.querySelector('.rdp-product-section .swiper-pagination');
        if (pagination) {
            pagination.style.display = 'none';
        }

        // 자동재생 및 터치 기능 비활성화
        const swiperContainer = document.querySelector('.pop-product-swiper');
        swiperContainer.style.touchAction = 'pan-y';
    }

    // 터치 스크롤 개선
    document.addEventListener('touchstart', function (e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    });
})
/* //2025.06.29 리뷰세부화면 */

/* 2025.06.29 리뷰작성화면관련 */
$(function(){
    // 별점 기능
    const stars = document.querySelectorAll('.star-check');
       
        let currentRating = 0;

        stars.forEach(star => {
            star.addEventListener('click', function() {
                currentRating = parseInt(this.dataset.rating);
                updateStars();
                
            });

            star.addEventListener('mouseover', function() {
                const hoverRating = parseInt(this.dataset.rating);
                highlightStars(hoverRating);
            });
        });

        document.querySelector('.rwa-rating-section__stars').addEventListener('mouseleave', function() {
            highlightStars(currentRating);
        });

        function updateStars() {
            highlightStars(currentRating);
        }

        function highlightStars(rating) {
            stars.forEach((star, index) => {
                if (index < rating) {
                    star.classList.add('active');
                } else {
                    star.classList.remove('active');
                }
            });
        }
})

/* //2025.06.29 리뷰작성화면관련 */