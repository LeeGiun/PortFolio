document.addEventListener('DOMContentLoaded', function() {



/* 인트로 페이지 타이핑효과 */
  const typed = new Typed('.visualMain h1', {
    strings: ['The First Step for Front-End Developers. . . . . . !', '프론트엔드 개발자의 첫걸음을 위한 저의 포트폴리오 방문을 환영합니다!'],
    typeSpeed: 100,
    loop: false,
  });


// Connect Section flower Shower Event
  $(document).ready(function(){  
    function reAction(){
      $("#startButton").trigger("click");
      setTimeout(function(){
        $("#stopButton").trigger("click");
      }, 999999);
    }
  
    // reAction 함수 실행 여부를 추적하는 변수
    let reActionExecuted = false;
  
    // 스크롤 이벤트 핸들러
    $(window).scroll(function() {
      // 스크롤 위치가 2500 이상이고 reAction 함수가 아직 실행되지 않았으면
      if ($(window).scrollTop() >= 3300 && !reActionExecuted) {
        // reAction 함수 실행
        reAction();
        // reAction 함수 실행 여부를 true로 설정
        reActionExecuted = true;
      } else if ($(window).scrollTop() < 3300) {
        // 스크롤 위치가 2500 미만이면 #stopButton 클릭
        $("#stopButton").trigger("click");
        // reAction 함수 실행 여부를 false로 설정
        reActionExecuted = false;
      }
    });
  });



/* Scroll 3600 이상일 경우
Scroll 에서 Top전환 */
  const ScrollTop = document.querySelector('.Scroll_Top')
  const Scroll = document.querySelector('.Scroll')

  document.addEventListener("scroll", function () {
    if (window.scrollY >= 3300) {
      ScrollTop.style.opacity = '1'
      ScrollTop.style.zIndex = '99'
      Scroll.style.opacity = '0'
    } else {
      ScrollTop.style.opacity = '0'
      ScrollTop.style.zIndex = '-1'
      Scroll.style.opacity = '1'
    }
  })



  $(function() {
    const ScrollTopA = $('.Scroll_Top a')
  
    ScrollTopA.click(function(event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeOutQuint');
    })
  })
  


/* Scroll 누를경우 한단계씩 내려가기 */
  $(function() {
    const Scroll = $('.Scroll')
    const sections = $('section')
  
    let index = 0
  
    Scroll.click(function() {
      index++
      if (index >= sections.length) {
        index = 0
      }
      const top = sections.eq(index).offset().top
      $('html, body').stop().animate({ scrollTop: top }, 1500, 'easeOutQuint')
    })
  })


  $(function() {
    const TOP = $('.logo h1')

    TOP.click(function() {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeOutQuint');
    })
  })




/* 헤더 픽스 고정 */
  const HeaderFixed = document.querySelector('.header')





  document.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      HeaderFixed.classList.add("hd_fix")
    } else {
      HeaderFixed.classList.remove("hd_fix")
    }
  })



/* 스크롤 메뉴로 이동 효과 */
$(function() {
  const ScrollBtn = $('.header_menu li')
  const page = $('section')

  let index = 0;
  let top = 0;

  ScrollBtn.click(function() {
    index = $(this).index()
    top = page.eq(index).offset().top
    
    $('html, body').stop().animate({
      scrollTop: top
    }, 1500, 'easeOutQuint')
  })
})




const headerMenuLI = document.querySelectorAll('.header_menu li');
const headerAnimation = document.querySelector('.header_animation');
const LogoColor = document.querySelector('.logo h1')

headerMenuLI.forEach((li, index) => {
  li.addEventListener('mouseover', function() {
    if (index === 0) {
      headerAnimation.style.left = '348px';
      headerAnimation.style.width = '150px';
      headerAnimation.style.height = '60px';
      headerAnimation.style.top = '7px';
      LogoColor.style.color = '#fff'
    } else if (index === 1) {
      headerAnimation.style.left = '505px';
      headerAnimation.style.width = '240px';
      headerAnimation.style.height = '60px';
      headerAnimation.style.top = '7px';
      LogoColor.style.color = '#fff'
    } else if (index === 2) {
      headerAnimation.style.left = '750px';
      headerAnimation.style.width = '230px';
      headerAnimation.style.height = '60px';
      headerAnimation.style.top = '7px';
      LogoColor.style.color = '#fff'
    } else if (index === 3) {
      headerAnimation.style.left = '985px';
      headerAnimation.style.width = '270px';
      headerAnimation.style.height = '60px';
      headerAnimation.style.top = '7px';
      LogoColor.style.color = '#fff'
    } else if (index === 4) {
      headerAnimation.style.left = '1260px';
      headerAnimation.style.width = '130px';
      headerAnimation.style.height = '60px';
      headerAnimation.style.top = '7px';
      LogoColor.style.color = '#fff'
    }
  });
});

headerMenuLI.forEach((li, index) => {
  li.addEventListener('mouseout', function() {
    headerAnimation.style.left = '-25px';
    headerAnimation.style.width = '150px';
    headerAnimation.style.height = '80px';
    headerAnimation.style.top = '-5px';
    LogoColor.style.color = 'orange'
    LogoColor.style.textShadow = '1px 1px 3px orangered'
  });
});











  const SkillsContent = [
    document.querySelector('.Language_HTML'),
    document.querySelector('.Language_CSS'),
    document.querySelector('.Language_JS'),
    document.querySelector('.Framework_Library_jQuery'),
    document.querySelector('.Framework_Library_React'),
    document.querySelector('.Framework_Library_ParceLnSass'),
    document.querySelector('.Framework_Library_JSX'),
    document.querySelector('.Framework_Library_Bootstrap'),
    document.querySelector('.Editor_Tool_VScode'),
    document.querySelector('.Editor_Tool_Git_Hub'),
    document.querySelector('.Editor_Tool_Git'),
    document.querySelector('.Editor_Tool_XD')
  ]



  const SkillsContent_H4 = [
    document.querySelector('.Language_HTML h4'),
    document.querySelector('.Language_CSS h4'),
    document.querySelector('.Language_JS h4'),
    document.querySelector('.Framework_Library_jQuery h4'),
    document.querySelector('.Framework_Library_React h4'),
    document.querySelector('.Framework_Library_ParceLnSass h4'),
    document.querySelector('.Framework_Library_JSX h4'),
    document.querySelector('.Framework_Library_Bootstrap h4'),
    document.querySelector('.Editor_Tool_VScode h4'),
    document.querySelector('.Editor_Tool_Git_Hub h4'),
    document.querySelector('.Editor_Tool_Git h4'),
    document.querySelector('.Editor_Tool_XD h4'),
  ]


  const SkillsTxt = [
    document.querySelector('.HTML_txt'),
    document.querySelector('.CSS_txt'),
    document.querySelector('.JS_txt'),
    document.querySelector('.jQuery_txt'),
    document.querySelector('.React_txt'),
    document.querySelector('.Sass_txt'),
    document.querySelector('.JSX_txt'),
    document.querySelector('.Bootstrap_txt'),
    document.querySelector('.VScode_txt'),
    document.querySelector('.GitHub_txt'),
    document.querySelector('.Git_txt'),
    document.querySelector('.XD_txt')
  ]


  SkillsTxt.forEach((over, i) => {
    over.addEventListener('mouseover', function() {
      SkillsContent_H4[0].style.opacity = '0'
      SkillsTxt[0].style.opacity = '1'
    })
  })

  SkillsTxt.forEach((Txt, index) => {
    Txt.addEventListener('mouseover', function() {
      // SkillsTxt[index].style.width = '0%'
      SkillsTxt[index].style.opacity = '0'
      // SkillsContent_H4[index].style.right = '0px'
      SkillsContent_H4[index].style.opacity = '1'
    })

  })

  SkillsContent.forEach((Content, index) => {
    Content.addEventListener('mouseleave', function() {
      // SkillsTxt[index].style.width = '80%'
      SkillsTxt[index].style.opacity = '1'
      // SkillsContent_H4[index].style.right = '-670px'
      SkillsContent_H4[index].style.opacity = '0'
    })
  })






  /* 퍼센트 게이지 채우기 */

  jQuery(document).ready(function () {

    let barProgress = jQuery(".progressbar");

    jQuery(window).scroll(function () {
      let scrollPos = jQuery(window).scrollTop();
      if (scrollPos >= 1600) {
        barProgress.eq(0).animate({
          width: "80%"
        }, 1500);
        barProgress.eq(0).find(".ui-progressbar-value").css({
          "background": "#CC66CC"
        });

        barProgress.eq(1).animate({
          width: "80%"
        }, 1500);
        barProgress.eq(1).find(".ui-progressbar-value").css({
          "background": "#FFCC66"
        });

        barProgress.eq(2).animate({
          width: "70%"
        }, 1500);
        barProgress.eq(2).find(".ui-progressbar-value").css({
          "background": "#DDDDDDD"
        });

        barProgress.eq(3).animate({
          width: "70%"
        }, 1500);
        barProgress.eq(3).find(".ui-progressbar-value").css({
          "background": "#DDDDDDD"
        });

        barProgress.eq(4).animate({
          width: "80%"
        }, 1500);
        barProgress.eq(4).find(".ui-progressbar-value").css({
          "background": "#DDDDDDD"
        });

        barProgress.eq(5).animate({
          width: "50%"
        }, 1500);
        barProgress.eq(5).find(".ui-progressbar-value").css({
          "background": "#DDDDDDD"
        });

        barProgress.eq(6).animate({
          width: "70%"
        }, 1500);
        barProgress.eq(6).find(".ui-progressbar-value").css({
          "background": "#DDDDDDD"
        });

        barProgress.eq(7).animate({
          width: "60%"
        }, 1500);
        barProgress.eq(7).find(".ui-progressbar-value").css({
          "background": "#DDDDDDD"
        });
      }
    });
  });


  /* 코드리뷰영역 - 메뉴 클릭시 팝업창 오픈 */
  const PageCloseAll = [
    document.querySelector('.CodeReview_Page1 .CodeReview_Page_Close'),
    document.querySelector('.CodeReview_Page2 .CodeReview_Page_Close'),
    document.querySelector('.CodeReview_Page3 .CodeReview_Page_Close'),
    document.querySelector('.CodeReview_Page4 .CodeReview_Page_Close')
  ];
  
  const CodeReviewPageAll = [
    document.querySelector('.CodeReview_Page1'),
    document.querySelector('.CodeReview_Page2'),
    document.querySelector('.CodeReview_Page3'),
    document.querySelector('.CodeReview_Page4')
  ];
  
  const CodeBtnAll = [
    document.querySelector('#CodeBtn2'),
    document.querySelector('#CodeBtn6'),
    document.querySelector('#CodeBtn10'),
    document.querySelector('#CodeBtn13')
  ];
  
  CodeBtnAll.forEach((button, index) => {
    button.addEventListener('click', function() {
      CodeReviewPageAll[index].style.display = 'flex';
      PageCloseAll[index].style.display = 'block';
    });
  });
  
  PageCloseAll.forEach((pageClose, index) => {
    pageClose.addEventListener('click', function() {
      CodeReviewPageAll[index].style.display = 'none';
      PageCloseAll[index].style.display = 'none';
    });
  });




  


/* 팀프로젝트 페이지 탭메뉴 */
  const TeamPageBtnAll = [
    document.getElementById('TeamPageBtn1'),
    document.getElementById('TeamPageBtn2'),
    document.getElementById('TeamPageBtn3')
  ];

  const TeamPage = [
    document.querySelector('.TeamMain'),
    document.querySelector('.TeamSub'),
    document.querySelector('.TeamDetail')
  ];
  
  TeamPageBtnAll.forEach((Team, index) => {
    Team.addEventListener('click', function() {
      TeamPage.forEach((Page, i) => {
        if (index === i) {
          Page.style.display = 'block';
        } else {
          Page.style.display = 'none';
        }
      });
    });
  });




  /* 팀프로젝트 사용스킬 펼치기/접기 */

  const CodeTabMenuLi = document.querySelectorAll('.CodeReview_TabMenu li') 

  const useSkillClose = [
    document.querySelector('.Tab1 .useSkill_close'),
    document.querySelector('.Tab2 .useSkill_close'),
    document.querySelector('.Tab3 .useSkill_close'),
    document.querySelector('.Tab4 .useSkill_close'),
  ]
  const useSkillOpen = [
    document.querySelector('.Tab1 .useSkill_open'),
    document.querySelector('.Tab2 .useSkill_open'),
    document.querySelector('.Tab3 .useSkill_open'),
    document.querySelector('.Tab4 .useSkill_open'),
  ]

  const useSkill = [
    document.querySelector('.Tab1 .useSkill'),
    document.querySelector('.Tab2 .useSkill'),
    document.querySelector('.Tab3 .useSkill'),
    document.querySelector('.Tab4 .useSkill'),
  ]



  useSkillClose.forEach((close, index) => {
    close.addEventListener('click', function() {
      useSkill.forEach((Box, i) => {
        Box.style.bottom = '-200px'
        Box.style.opacity = '0'
        Box.style.zIndex = '1'
        useSkillOpen[i].style.opacity = '1'
        useSkillOpen[i].style.bottom = '14px'
        useSkillOpen[i].style.zIndex = '2'
      })
    })
  })

  useSkillOpen.forEach((open, index) => {
    open.addEventListener('click', function() {
      useSkill.forEach((Box2, j) => {
        Box2.style.bottom = '14px'
        Box2.style.opacity = '1'
        Box2.style.zIndex = '2'
        useSkillOpen[j].style.opacity = '0'
        useSkillOpen[j].style.bottom = '200px'
        useSkillOpen[j].style.zIndex = '1'
      })
    })
  })

  CodeTabMenuLi.forEach((liClick, index) => {
    liClick.addEventListener('click', function() {
      useSkill.forEach((Box3, p) => {
        Box3.style.bottom = '13px'
        Box3.style.opacity = '1'
        Box3.style.zIndex = '2'
      })
    })
  })
  



  const ArrowHoverSpan = document.querySelectorAll('.code_content span');

  ArrowHoverSpan.forEach((span) => {
    span.addEventListener('mouseover', () => {
      if (span.querySelector('.fa-caret-up')) {
        span.style.color = 'orangered';
        span.querySelector('.fa-caret-up').style.color = 'orangered';
      } else if (span.querySelector('.fa-caret-down')) {
        span.style.color = 'cornflowerblue';
        span.querySelector('.fa-caret-down').style.color = 'cornflowerblue';
      }
    });
  
    span.addEventListener('mouseleave', () => {
      span.style.color = '#000';
      if (span.querySelector('.fa-caret-up')) {
        span.querySelector('.fa-caret-up').style.color = '#000';
      } else if (span.querySelector('.fa-caret-down')) {
        span.querySelector('.fa-caret-down').style.color = '#000';
      }
    });
  });




  // 
  // Team_swiper
  // 

function TeamSWP() {
  let swiper = new Swiper(".TeamSwiper1", {
    pagination: {
      el: ".TeamSwiper1 .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".TeamSwiper1 .swiper-button-next",
      prevEl: ".TeamSwiper1 .swiper-button-prev",
    },
  });
}

TeamSWP();


const CodeImg1 = document.querySelector('.code_content_img_Ranking1')
const CodeTxt1 = document.querySelector('.code_content_txt_Ranking1')

const CodeTit1 = document.querySelector('.tit_Ranking h1')
const CodeTit1_Span = document.querySelector('.tit_Ranking h1 span')

const TeamSwiper = document.querySelector('.TEAM_Swiper')
let CodeClick1 = 0

CodeTit1.addEventListener('click', function () {
  if (CodeClick1 === 0) {
    CodeTxt1.style.height = '0px'
    CodeImg1.style.height = '0px'
    CodeTxt1.style.opacity = '0'
    CodeImg1.style.opacity = '0'
    TeamSwiper.style.opacity = '0'
    CodeTit1_Span.innerHTML = `펼쳐보기<i class="fas fa-caret-down"></i>`;
    CodeTit1_Span.style.color = '#000'
    CodeClick1 = 1
  } else if (CodeClick1 === 1) {
    CodeTxt1.style.height = '800px'
    CodeImg1.style.height = '800px'
    CodeTxt1.style.opacity = '1'
    CodeImg1.style.opacity = '1'
    TeamSwiper.style.opacity = '1'
    CodeTit1_Span.innerHTML = `접어두기<i class="fas fa-caret-up"></i>`;
    CodeTit1_Span.style.color = '#000'
    CodeClick1 = 0
  }
})


// =====================================


function SubSWP() {
  let swiper = new Swiper(".SubSwiper1", {
    pagination: {
      el: ".SubSwiper1 .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".SubSwiper1 .swiper-button-next",
      prevEl: ".SubSwiper1 .swiper-button-prev",
    },
  });
}

SubSWP();

const CodeImg2 = document.querySelector('.code_content_img_SubItem1')
const CodeTxt2 = document.querySelector('.code_content_txt_SubItem1')

const CodeTit2 = document.querySelector('.tit_SubItem h1')
const CodeTit2_Span = document.querySelector('.tit_SubItem h1 span')

const SubSwiper = document.querySelector('.SUB_Swiper')
let CodeClick2 = 0

CodeTit2.addEventListener('click', function () {
  if (CodeClick2 === 0) {
    CodeTxt2.style.height = '0px'
    CodeImg2.style.height = '0px'
    CodeTxt2.style.opacity = '0'
    CodeImg2.style.opacity = '0'
    SubSwiper.style.opacity = '0'
    CodeTit2_Span.innerHTML = `펼쳐보기<i class="fas fa-caret-down"></i>`;
    CodeTit2_Span.style.color = '#000'
    CodeClick2 = 1
  } else if (CodeClick2 === 1) {
    CodeTxt2.style.height = '800px'
    CodeImg2.style.height = '800px'
    CodeTxt2.style.opacity = '1'
    CodeImg2.style.opacity = '1'
    SubSwiper.style.opacity = '1'
    CodeTit2_Span.innerHTML = `접어두기<i class="fas fa-caret-up"></i>`;
    CodeTit2_Span.style.color = '#000'
    CodeClick2 = 0
  }
})




// ====================================


function FillterSWP() {
  let swiper = new Swiper(".FillterSwiper1", {
    pagination: {
      el: ".FillterSwiper1 .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".FillterSwiper1 .swiper-button-next",
      prevEl: ".FillterSwiper1 .swiper-button-prev",
    },
  });
}

FillterSWP();


// =====================================


const CodeImg3 = document.querySelector('.code_content_img_Fillter1')
const CodeTxt3 = document.querySelector('.code_content_txt_Fillter1')

const CodeTit3 = document.querySelector('.tit_Fillter h1')
const CodeTit3_Span = document.querySelector('.tit_Fillter h1 span')

const FillterSwiper = document.querySelector('.FILLTER_Swiper')
let CodeClick3 = 0

CodeTit3.addEventListener('click', function () {
  if (CodeClick3 === 0) {
    CodeTxt3.style.height = '0px'
    CodeImg3.style.height = '0px'
    CodeTxt3.style.opacity = '0'
    CodeImg3.style.opacity = '0'
    FillterSwiper.style.opacity = '0'
    CodeTit3_Span.innerHTML = `펼쳐보기<i class="fas fa-caret-down"></i>`;
    CodeTit3_Span.style.color = '#000'
    CodeClick3 = 1
  } else if (CodeClick3 === 1) {
    CodeTxt3.style.height = '800px'
    CodeImg3.style.height = '800px'
    CodeTxt3.style.opacity = '1'
    CodeImg3.style.opacity = '1'
    FillterSwiper.style.opacity = '1'
    CodeTit3_Span.innerHTML = `접어두기<i class="fas fa-caret-up"></i>`;
    CodeTit3_Span.style.color = '#000'
    CodeClick3 = 0
  }
})



// =====================================


function ReviewSWP() {
  let swiper = new Swiper(".ReviewSwiper1", {
    pagination: {
      el: ".ReviewSwiper1 .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".ReviewSwiper1 .swiper-button-next",
      prevEl: ".ReviewSwiper1 .swiper-button-prev",
    },
  });
}

ReviewSWP();


const CodeImg4 = document.querySelector('.code_content_img_Review1')
const CodeTxt4 = document.querySelector('.code_content_txt_Review1')

const CodeTit4 = document.querySelector('.tit_Review h1')
const CodeTit4_Span = document.querySelector('.tit_Review h1 span')

const ReviewSwiper = document.querySelector('.REVIEW_Swiper')
let CodeClick4 = 0

CodeTit4.addEventListener('click', function () {
  if (CodeClick4 === 0) {
    CodeTxt4.style.height = '0px'
    CodeImg4.style.height = '0px'
    CodeTxt4.style.opacity = '0'
    CodeImg4.style.opacity = '0'
    ReviewSwiper.style.opacity = '0'
    CodeTit4_Span.innerHTML = `펼쳐보기<i class="fas fa-caret-down"></i>`;
    CodeTit4_Span.style.color = '#000'
    CodeClick4 = 1
  } else if (CodeClick4 === 1) {
    CodeTxt4.style.height = '800px'
    CodeImg4.style.height = '800px'
    CodeTxt4.style.opacity = '1'
    CodeImg4.style.opacity = '1'
    ReviewSwiper.style.opacity = '1'
    CodeTit4_Span.innerHTML = `접어두기<i class="fas fa-caret-up"></i>`;
    CodeTit4_Span.style.color = '#000'
    CodeClick4 = 0
  }
})


// ================================================
// ================================================
/* 로그인 컨텐츠 1 */
function LoginSWP1() {
  let swiper = new Swiper(".LoginSwiper1", {
    pagination: {
      el: ".LoginSwiper1 .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".LoginSwiper1 .swiper-button-next",
      prevEl: ".LoginSwiper1 .swiper-button-prev",
    },
  });
}

LoginSWP1();


const CodeImg5 = document.querySelector('.code_content_img_Login1')
const CodeTxt5 = document.querySelector('.code_content_txt_Login1')

const CodeTit5 = document.querySelector('.tit_Login1 h1')
const CodeTit5_Span = document.querySelector('.tit_Login1 h1 span')

const LoginSwiper1 = document.querySelector('.LOGIN_Swiper1')
let CodeClick5 = 0

CodeTit5.addEventListener('click', function () {
  if (CodeClick5 === 0) {
    CodeTxt5.style.height = '0px'
    CodeImg5.style.height = '0px'
    CodeTxt5.style.opacity = '0'
    CodeImg5.style.opacity = '0'
    LoginSwiper1.style.opacity = '0'
    CodeTit5_Span.innerHTML = `펼쳐보기<i class="fas fa-caret-down"></i>`;
    CodeTit5_Span.style.color = '#000'
    CodeClick5 = 1
  } else if (CodeClick5 === 1) {
    CodeTxt5.style.height = '800px'
    CodeImg5.style.height = '800px'
    CodeTxt5.style.opacity = '1'
    CodeImg5.style.opacity = '1'
    LoginSwiper1.style.opacity = '1'
    CodeTit5_Span.innerHTML = `접어두기<i class="fas fa-caret-up"></i>`;
    CodeTit5_Span.style.color = '#000'
    CodeClick5 = 0
  }
})





// =======================================
/* 로그인컨텐츠 2 */

function LoginSWP2() {
  let swiper = new Swiper(".LoginSwiper2", {
    pagination: {
      el: ".LoginSwiper2 .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".LoginSwiper2 .swiper-button-next",
      prevEl: ".LoginSwiper2 .swiper-button-prev",
    },
  });
}

LoginSWP2();


const CodeImg6 = document.querySelector('.code_content_img_Login2')
const CodeTxt6 = document.querySelector('.code_content_txt_Login2')

const CodeTit6 = document.querySelector('.tit_Login2 h1')
const CodeTit6_Span = document.querySelector('.tit_Login2 h1 span')

const LoginSwiper2 = document.querySelector('.LOGIN_Swiper2')
let CodeClick6 = 0

CodeTit6.addEventListener('click', function () {
  if (CodeClick6 === 0) {
    CodeTxt6.style.height = '0px'
    CodeImg6.style.height = '0px'
    CodeTxt6.style.opacity = '0'
    CodeImg6.style.opacity = '0'
    LoginSwiper2.style.opacity = '0'
    CodeTit6_Span.innerHTML = `펼쳐보기<i class="fas fa-caret-down"></i>`;
    CodeTit6_Span.style.color = '#000'
    CodeClick6 = 1
  } else if (CodeClick6 === 1) {
    CodeTxt6.style.height = '800px'
    CodeImg6.style.height = '800px'
    CodeTxt6.style.opacity = '1'
    CodeImg6.style.opacity = '1'
    LoginSwiper2.style.opacity = '1'
    CodeTit6_Span.innerHTML = `접어두기<i class="fas fa-caret-up"></i>`;
    CodeTit6_Span.style.color = '#000'
    CodeClick6 = 0
  }
})


// =======================================
/* 로그인컨텐츠3 */
function LoginSWP3() {
  let swiper = new Swiper(".LoginSwiper3", {
    pagination: {
      el: ".LoginSwiper3 .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".LoginSwiper3 .swiper-button-next",
      prevEl: ".LoginSwiper3 .swiper-button-prev",
    },
  });
}

LoginSWP3();


const CodeImg7 = document.querySelector('.code_content_img_Login3')
const CodeTxt7 = document.querySelector('.code_content_txt_Login3')

const CodeTit7 = document.querySelector('.tit_Login3 h1')
const CodeTit7_Span = document.querySelector('.tit_Login3 h1 span')

const LoginSwiper3 = document.querySelector('.LOGIN_Swiper3')
let CodeClick7 = 0

CodeTit7.addEventListener('click', function () {
  if (CodeClick7 === 0) {
    CodeTxt7.style.height = '0px'
    CodeImg7.style.height = '0px'
    CodeTxt7.style.opacity = '0'
    CodeImg7.style.opacity = '0'
    LoginSwiper3.style.opacity = '0'
    CodeTit7_Span.innerHTML = `펼쳐보기<i class="fas fa-caret-down"></i>`;
    CodeTit7_Span.style.color = '#000'
    CodeClick7 = 1
  } else if (CodeClick7 === 1) {
    CodeTxt7.style.height = '800px'
    CodeImg7.style.height = '800px'
    CodeTxt7.style.opacity = '1'
    CodeImg7.style.opacity = '1'
    LoginSwiper3.style.opacity = '1'
    CodeTit7_Span.innerHTML = `접어두기<i class="fas fa-caret-up"></i>`;
    CodeTit7_Span.style.color = '#000'
    CodeClick7 = 0
  }
})


// =======================================
/* 로그인컨텐츠4 */


function LoginSWP4() {
  let swiper = new Swiper(".LoginSwiper4", {
    pagination: {
      el: ".LoginSwiper4 .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".LoginSwiper4 .swiper-button-next",
      prevEl: ".LoginSwiper4 .swiper-button-prev",
    },
  });
}

LoginSWP4();


const CodeImg8 = document.querySelector('.code_content_img_Login4')
const CodeTxt8 = document.querySelector('.code_content_txt_Login4')

const CodeTit8 = document.querySelector('.tit_Login4 h1')
const CodeTit8_Span = document.querySelector('.tit_Login4 h1 span')

const LoginSwiper4 = document.querySelector('.LOGIN_Swiper4')
let CodeClick8 = 0

CodeTit8.addEventListener('click', function () {
  if (CodeClick8 === 0) {
    CodeTxt8.style.height = '0px'
    CodeImg8.style.height = '0px'
    CodeTxt8.style.opacity = '0'
    CodeImg8.style.opacity = '0'
    LoginSwiper4.style.opacity = '0'
    CodeTit8_Span.innerHTML = `펼쳐보기<i class="fas fa-caret-down"></i>`;
    CodeTit8_Span.style.color = '#000'
    CodeClick8 = 1
  } else if (CodeClick8 === 1) {
    CodeTxt8.style.height = '800px'
    CodeImg8.style.height = '800px'
    CodeTxt8.style.opacity = '1'
    CodeImg8.style.opacity = '1'
    LoginSwiper4.style.opacity = '1'
    CodeTit8_Span.innerHTML = `접어두기<i class="fas fa-caret-up"></i>`;
    CodeTit8_Span.style.color = '#000'
    CodeClick8 = 0
  }
})




// =======================================
/* 로그인컨텐츠5 */


function LoginSWP5() {
  let swiper = new Swiper(".LoginSwiper5", {
    pagination: {
      el: ".LoginSwiper5 .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".LoginSwiper5 .swiper-button-next",
      prevEl: ".LoginSwiper5 .swiper-button-prev",
    },
  });
}

LoginSWP5();


const CodeImg17 = document.querySelector('.code_content_img_Login5')
const CodeTxt17 = document.querySelector('.code_content_txt_Login5')

const CodeTit17 = document.querySelector('.tit_Login5 h1')
const CodeTit17_Span = document.querySelector('.tit_Login5 h1 span')

const LoginSwiper5 = document.querySelector('.LOGIN_Swiper5')
let CodeClick17 = 0

CodeTit17.addEventListener('click', function () {
  if (CodeClick17 === 0) {
    CodeTxt17.style.height = '0px'
    CodeImg17.style.height = '0px'
    CodeTxt17.style.opacity = '0'
    CodeImg17.style.opacity = '0'
    LoginSwiper5.style.opacity = '0'
    CodeTit17_Span.innerHTML = `펼쳐보기<i class="fas fa-caret-down"></i>`;
    CodeTit17_Span.style.color = '#000'
    CodeClick17 = 1
  } else if (CodeClick17 === 1) {
    CodeTxt17.style.height = '800px'
    CodeImg17.style.height = '800px'
    CodeTxt17.style.opacity = '1'
    CodeImg17.style.opacity = '1'
    LoginSwiper5.style.opacity = '1'
    CodeTit17_Span.innerHTML = `접어두기<i class="fas fa-caret-up"></i>`;
    CodeTit17_Span.style.color = '#000'
    CodeClick17 = 0
  }
})





// =======================================
/* 로그인컨텐츠6 */


function LoginSWP6() {
  let swiper = new Swiper(".LoginSwiper6", {
    pagination: {
      el: ".LoginSwiper6 .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".LoginSwiper6 .swiper-button-next",
      prevEl: ".LoginSwiper6 .swiper-button-prev",
    },
  });
}

LoginSWP6();


const CodeImg18 = document.querySelector('.code_content_img_Login6')
const CodeTxt18 = document.querySelector('.code_content_txt_Login6')

const CodeTit18 = document.querySelector('.tit_Login6 h1')
const CodeTit18_Span = document.querySelector('.tit_Login6 h1 span')

const LoginSwiper6 = document.querySelector('.LOGIN_Swiper6')
let CodeClick18 = 0

CodeTit18.addEventListener('click', function () {
  if (CodeClick18 === 0) {
    CodeTxt18.style.height = '0px'
    CodeImg18.style.height = '0px'
    CodeTxt18.style.opacity = '0'
    CodeImg18.style.opacity = '0'
    LoginSwiper6.style.opacity = '0'
    CodeTit18_Span.innerHTML = `펼쳐보기<i class="fas fa-caret-down"></i>`;
    CodeTit18_Span.style.color = '#000'
    CodeClick18 = 1
  } else if (CodeClick18 === 1) {
    CodeTxt18.style.height = '800px'
    CodeImg18.style.height = '800px'
    CodeTxt18.style.opacity = '1'
    CodeImg18.style.opacity = '1'
    LoginSwiper6.style.opacity = '1'
    CodeTit18_Span.innerHTML = `접어두기<i class="fas fa-caret-up"></i>`;
    CodeTit18_Span.style.color = '#000'
    CodeClick18 = 0
  }
})










// ================================================
// ================================================
/* 개인프로젝트 컨텐츠 1 */
function SINGLESWP1() {
  let swiper = new Swiper(".SingleSwiper1", {
    pagination: {
      el: ".SingleSwiper1 .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".SingleSwiper1 .swiper-button-next",
      prevEl: ".SingleSwiper1 .swiper-button-prev",
    },
  });
}

SINGLESWP1();


const CodeImg9 = document.querySelector('.code_content_img_Single1')
const CodeTxt9 = document.querySelector('.code_content_txt_Single1')

const CodeTit9 = document.querySelector('.tit_Single1 h1')
const CodeTit9_Span = document.querySelector('.tit_Single1 h1 span')

const SingleSwiper1 = document.querySelector('.SINGLE_Swiper1')
let CodeClick9 = 0

CodeTit9.addEventListener('click', function () {
  if (CodeClick9 === 0) {
    CodeTxt9.style.height = '0px'
    CodeImg9.style.height = '0px'
    CodeTxt9.style.opacity = '0'
    CodeImg9.style.opacity = '0'
    SingleSwiper1.style.opacity = '0'
    CodeTit9_Span.innerHTML = `펼쳐보기<i class="fas fa-caret-down"></i>`;
    CodeTit9_Span.style.color = '#000'
    CodeClick9 = 1
  } else if (CodeClick9 === 1) {
    CodeTxt9.style.height = '800px'
    CodeImg9.style.height = '800px'
    CodeTxt9.style.opacity = '1'
    CodeImg9.style.opacity = '1'
    SingleSwiper1.style.opacity = '1'
    CodeTit9_Span.innerHTML = `접어두기<i class="fas fa-caret-up"></i>`;
    CodeTit9_Span.style.color = '#000'
    CodeClick9 = 0
  }
})




// ================================================
/* 개인프로젝트 컨텐츠 2 */
function SINGLESWP2() {
  let swiper = new Swiper(".SingleSwiper2", {
    pagination: {
      el: ".SingleSwiper2 .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".SingleSwiper2 .swiper-button-next",
      prevEl: ".SingleSwiper2 .swiper-button-prev",
    },
  });
}

SINGLESWP2();


const CodeImg12 = document.querySelector('.code_content_img_Single2')
const CodeTxt12 = document.querySelector('.code_content_txt_Single2')

const CodeTit12 = document.querySelector('.tit_Single2 h1')
const CodeTit12_Span = document.querySelector('.tit_Single2 h1 span')

const SingleSwiper2 = document.querySelector('.SINGLE_Swiper2')
let CodeClick12 = 0

CodeTit12.addEventListener('click', function () {
  if (CodeClick12 === 0) {
    CodeTxt12.style.height = '0px'
    CodeImg12.style.height = '0px'
    CodeTxt12.style.opacity = '0'
    CodeImg12.style.opacity = '0'
    SingleSwiper2.style.opacity = '0'
    CodeTit12_Span.innerHTML = `펼쳐보기<i class="fas fa-caret-down"></i>`;
    CodeTit12_Span.style.color = '#000'
    CodeClick12 = 1
  } else if (CodeClick12 === 1) {
    CodeTxt12.style.height = '800px'
    CodeImg12.style.height = '800px'
    CodeTxt12.style.opacity = '1'
    CodeImg12.style.opacity = '1'
    SingleSwiper2.style.opacity = '1'
    CodeTit12_Span.innerHTML = `접어두기<i class="fas fa-caret-up"></i>`;
    CodeTit12_Span.style.color = '#000'
    CodeClick12 = 0
  }
})






// ================================================
/* 개인프로젝트 컨텐츠 3 */
function SINGLESWP3() {
  let swiper = new Swiper(".SingleSwiper3", {
    pagination: {
      el: ".SingleSwiper3 .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".SingleSwiper3 .swiper-button-next",
      prevEl: ".SingleSwiper3 .swiper-button-prev",
    },
  });
}

SINGLESWP3();


const CodeImg10 = document.querySelector('.code_content_img_Single3')
const CodeTxt10 = document.querySelector('.code_content_txt_Single3')

const CodeTit10 = document.querySelector('.tit_Single3 h1')
const CodeTit10_Span = document.querySelector('.tit_Single3 h1 span')

const SingleSwiper3 = document.querySelector('.SINGLE_Swiper3')
let CodeClick10 = 0

CodeTit10.addEventListener('click', function () {
  if (CodeClick10 === 0) {
    CodeTxt10.style.height = '0px'
    CodeImg10.style.height = '0px'
    CodeTxt10.style.opacity = '0'
    CodeImg10.style.opacity = '0'
    SingleSwiper3.style.opacity = '0'
    CodeTit10_Span.innerHTML = `펼쳐보기<i class="fas fa-caret-down"></i>`;
    CodeTit10_Span.style.color = '#000'
    CodeClick10 = 1
  } else if (CodeClick10 === 1) {
    CodeTxt10.style.height = '800px'
    CodeImg10.style.height = '800px'
    CodeTxt10.style.opacity = '1'
    CodeImg10.style.opacity = '1'
    SingleSwiper3.style.opacity = '1'
    CodeTit10_Span.innerHTML = `접어두기<i class="fas fa-caret-up"></i>`;
    CodeTit10_Span.style.color = '#000'
    CodeClick10 = 0
  }
})







// ================================================
/* 개인프로젝트 컨텐츠 4 */
function SINGLESWP4() {
  let swiper = new Swiper(".SingleSwiper4", {
    pagination: {
      el: ".SingleSwiper4 .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".SingleSwiper4 .swiper-button-next",
      prevEl: ".SingleSwiper4 .swiper-button-prev",
    },
  });
}

SINGLESWP4();


const CodeImg11 = document.querySelector('.code_content_img_Single4')
const CodeTxt11 = document.querySelector('.code_content_txt_Single4')

const CodeTit11 = document.querySelector('.tit_Single4 h1')
const CodeTit11_Span = document.querySelector('.tit_Single4 h1 span')

const SingleSwiper4 = document.querySelector('.SINGLE_Swiper4')
let CodeClick11 = 0

CodeTit11.addEventListener('click', function () {
  if (CodeClick11 === 0) {
    CodeTxt11.style.height = '0px'
    CodeImg11.style.height = '0px'
    CodeTxt11.style.opacity = '0'
    CodeImg11.style.opacity = '0'
    SingleSwiper4.style.opacity = '0'
    CodeTit11_Span.innerHTML = `펼쳐보기<i class="fas fa-caret-down"></i>`;
    CodeTit11_Span.style.color = '#000'
    CodeClick11 = 1
  } else if (CodeClick11 === 1) {
    CodeTxt11.style.height = '800px'
    CodeImg11.style.height = '800px'
    CodeTxt11.style.opacity = '1'
    CodeImg11.style.opacity = '1'
    SingleSwiper4.style.opacity = '1'
    CodeTit11_Span.innerHTML = `접어두기<i class="fas fa-caret-up"></i>`;
    CodeTit11_Span.style.color = '#000'
    CodeClick11 = 0
  }
})













// ================================================
// ================================================
/* 리액트프로젝트 컨텐츠 1 */

function ReactSWP1() {
  let swiper = new Swiper(".ReactSwiper1", {
    pagination: {
      el: ".ReactSwiper1 .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".ReactSwiper1 .swiper-button-next",
      prevEl: ".ReactSwiper1 .swiper-button-prev",
    },
  });
}

ReactSWP1();


const CodeImg13 = document.querySelector('.code_content_img_React1')
const CodeTxt13 = document.querySelector('.code_content_txt_React1')

const CodeTit13 = document.querySelector('.tit_React1 h1')
const CodeTit13_Span = document.querySelector('.tit_React1 h1 span')

const ReactSwiper1 = document.querySelector('.REACT_Swiper1')
let CodeClick13 = 0

CodeTit13.addEventListener('click', function () {
  if (CodeClick13 === 0) {
    CodeTxt13.style.height = '0px'
    CodeImg13.style.height = '0px'
    CodeTxt13.style.opacity = '0'
    CodeImg13.style.opacity = '0'
    ReactSwiper1.style.opacity = '0'
    CodeTit13_Span.innerHTML = `펼쳐보기<i class="fas fa-caret-down"></i>`;
    CodeTit13_Span.style.color = '#000'
    CodeClick13 = 1
  } else if (CodeClick13 === 1) {
    CodeTxt13.style.height = '800px'
    CodeImg13.style.height = '800px'
    CodeTxt13.style.opacity = '1'
    CodeImg13.style.opacity = '1'
    ReactSwiper1.style.opacity = '1'
    CodeTit13_Span.innerHTML = `접어두기<i class="fas fa-caret-up"></i>`;
    CodeTit13_Span.style.color = '#000'
    CodeClick13 = 0
  }
})





// ================================================
/* 리액트프로젝트 컨텐츠 2 */
function ReactSWP2() {
  let swiper = new Swiper(".ReactSwiper2", {
    pagination: {
      el: ".ReactSwiper2 .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".ReactSwiper2 .swiper-button-next",
      prevEl: ".ReactSwiper2 .swiper-button-prev",
    },
  });
}

ReactSWP2();


const CodeImg14 = document.querySelector('.code_content_img_React2')
const CodeTxt14 = document.querySelector('.code_content_txt_React2')

const CodeTit14 = document.querySelector('.tit_React2 h1')
const CodeTit14_Span = document.querySelector('.tit_React2 h1 span')

const ReactSwiper2 = document.querySelector('.REACT_Swiper2')
let CodeClick14 = 0

CodeTit14.addEventListener('click', function () {
  if (CodeClick14 === 0) {
    CodeTxt14.style.height = '0px'
    CodeImg14.style.height = '0px'
    CodeTxt14.style.opacity = '0'
    CodeImg14.style.opacity = '0'
    ReactSwiper2.style.opacity = '0'
    CodeTit14_Span.innerHTML = `펼쳐보기<i class="fas fa-caret-down"></i>`;
    CodeTit14_Span.style.color = '#000'
    CodeClick14 = 1
  } else if (CodeClick14 === 1) {
    CodeTxt14.style.height = '800px'
    CodeImg14.style.height = '800px'
    CodeTxt14.style.opacity = '1'
    CodeImg14.style.opacity = '1'
    ReactSwiper2.style.opacity = '1'
    CodeTit14_Span.innerHTML = `접어두기<i class="fas fa-caret-up"></i>`;
    CodeTit14_Span.style.color = '#000'
    CodeClick14 = 0
  }
})







// ================================================
/* 리액트프로젝트 컨텐츠 3 */


function ReactSWP3() {
  let swiper = new Swiper(".ReactSwiper3", {
    pagination: {
      el: ".ReactSwiper3 .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".ReactSwiper3 .swiper-button-next",
      prevEl: ".ReactSwiper3 .swiper-button-prev",
    },
  });
}

ReactSWP3();


const CodeImg15 = document.querySelector('.code_content_img_React3')
const CodeTxt15 = document.querySelector('.code_content_txt_React3')

const CodeTit15 = document.querySelector('.tit_React3 h1')
const CodeTit15_Span = document.querySelector('.tit_React3 h1 span')

const ReactSwiper3 = document.querySelector('.REACT_Swiper3')
let CodeClick15 = 0

CodeTit15.addEventListener('click', function () {
  if (CodeClick15 === 0) {
    CodeTxt15.style.height = '0px'
    CodeImg15.style.height = '0px'
    CodeTxt15.style.opacity = '0'
    CodeImg15.style.opacity = '0'
    ReactSwiper3.style.opacity = '0'
    CodeTit15_Span.innerHTML = `펼쳐보기<i class="fas fa-caret-down"></i>`;
    CodeTit15_Span.style.color = '#000'
    CodeClick15 = 1
  } else if (CodeClick15 === 1) {
    CodeTxt15.style.height = '800px'
    CodeImg15.style.height = '800px'
    CodeTxt15.style.opacity = '1'
    CodeImg15.style.opacity = '1'
    ReactSwiper3.style.opacity = '1'
    CodeTit15_Span.innerHTML = `접어두기<i class="fas fa-caret-up"></i>`;
    CodeTit15_Span.style.color = '#000'
    CodeClick15 = 0
  }
})







// ================================================
/* 리액트프로젝트 컨텐츠 4 */
function ReactSWP4() {
  let swiper = new Swiper(".ReactSwiper4", {
    pagination: {
      el: ".ReactSwiper4 .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".ReactSwiper4 .swiper-button-next",
      prevEl: ".ReactSwiper4 .swiper-button-prev",
    },
  });
}

ReactSWP4();


const CodeImg16 = document.querySelector('.code_content_img_React4')
const CodeTxt16 = document.querySelector('.code_content_txt_React4')

const CodeTit16 = document.querySelector('.tit_React4 h1')
const CodeTit16_Span = document.querySelector('.tit_React4 h1 span')

const ReactSwiper4 = document.querySelector('.REACT_Swiper4')
let CodeClick16 = 0

CodeTit16.addEventListener('click', function () {
  if (CodeClick16 === 0) {
    CodeTxt16.style.height = '0px'
    CodeImg16.style.height = '0px'
    CodeTxt16.style.opacity = '0'
    CodeImg16.style.opacity = '0'
    ReactSwiper4.style.opacity = '0'
    CodeTit16_Span.innerHTML = `펼쳐보기<i class="fas fa-caret-down"></i>`;
    CodeTit16_Span.style.color = '#000'
    CodeClick16 = 1
  } else if (CodeClick16 === 1) {
    CodeTxt16.style.height = '800px'
    CodeImg16.style.height = '800px'
    CodeTxt16.style.opacity = '1'
    CodeImg16.style.opacity = '1'
    ReactSwiper4.style.opacity = '1'
    CodeTit16_Span.innerHTML = `접어두기<i class="fas fa-caret-up"></i>`;
    CodeTit16_Span.style.color = '#000'
    CodeClick16 = 0
  }
})



const CodeSwiperAll = [
  TeamSwiper, SubSwiper, FillterSwiper, ReviewSwiper,
  LoginSwiper1, LoginSwiper2, LoginSwiper3,
  LoginSwiper4, LoginSwiper5, LoginSwiper6,
  SingleSwiper1, SingleSwiper2, SingleSwiper3, SingleSwiper4,
  ReactSwiper1, ReactSwiper2, ReactSwiper3, ReactSwiper4
  ]

  const CodeTxtAll = [
    CodeTxt1, CodeTxt2, CodeTxt3, CodeTxt4,
    CodeTxt5, CodeTxt6, CodeTxt7, CodeTxt8,
    CodeTxt9, CodeTxt10, CodeTxt11, CodeTxt12,
    CodeTxt13, CodeTxt14, CodeTxt15, CodeTxt16,
    CodeTxt17, CodeTxt18
  ]

  const CodeImgAll = [
    CodeImg1, CodeImg2, CodeImg3, CodeImg4,
    CodeImg5, CodeImg6, CodeImg7, CodeImg8,
    CodeImg9, CodeImg10, CodeImg11, CodeImg12,
    CodeImg13, CodeImg14, CodeImg15, CodeImg16,
    CodeImg17, CodeImg18
  ]
  const CodeSpanAll = [
    CodeTit1_Span, CodeTit2_Span, CodeTit3_Span,
    CodeTit4_Span, CodeTit5_Span, CodeTit6_Span,
    CodeTit7_Span, CodeTit8_Span, CodeTit9_Span,
    CodeTit10_Span, CodeTit11_Span, CodeTit12_Span,
    CodeTit13_Span, CodeTit14_Span, CodeTit15_Span,
    CodeTit16_Span, CodeTit17_Span, CodeTit18_Span,
  ]




  PageCloseAll.forEach((TapOpen, index) => {
    TapOpen.addEventListener('click', () => {
      CodeTxtAll.forEach((element) => {
        element.style.height = '800px';
        element.style.opacity = '1';
      });
      CodeImgAll.forEach((element) => {
        element.style.height = '800px';
        element.style.opacity = '1';
      });
      CodeSwiperAll.forEach((element) => {
        element.style.opacity = '1';
      });
      CodeSpanAll.forEach((element) => {
        element.innerHTML = `접어두기<i class="fas fa-caret-up"></i>`;
        element.style.color = '#000';
      });
      CodeClick1 = 0;
      CodeClick2 = 0;
      CodeClick3 = 0;
      CodeClick4 = 0;
      CodeClick5 = 0;
      CodeClick6 = 0;
      CodeClick7 = 0;
      CodeClick8 = 0;
      CodeClick9 = 0;
      CodeClick10 = 0;
      CodeClick11 = 0;
      CodeClick12 = 0;
      CodeClick13 = 0;
      CodeClick14 = 0;
      CodeClick15 = 0;
      CodeClick16 = 0;
      CodeClick17 = 0;
      CodeClick18 = 0;
    });
  });












  /* 로그인 UI 화면 페이지 탭 메뉴 */
  const LoginPageBtnAll = [
    document.getElementById('LoginPageBtn1'),
    document.getElementById('LoginPageBtn2'),
    document.getElementById('LoginPageBtn3')
  ];

  const LoginPage = [
    document.querySelector('.LoginMain'),
    document.querySelector('.LoginJoin'),
    document.querySelector('.LoginSearch')
  ];
  
  LoginPageBtnAll.forEach((Login, index) => {
    Login.addEventListener('click', function() {
      LoginPage.forEach((Page, i) => {
        if (index === i) {
          Page.style.display = 'block';
        } else {
          Page.style.display = 'none';
        }
      });
    });
  });








  /* 개인프로젝트 UI 화면 페이지 탭 메뉴(Main) */
  const SinglePageBtnAll = [
    document.getElementById('SinglePageBtn1'),
    document.getElementById('SinglePageBtn2'),
    document.getElementById('SinglePageBtn3')
  ];

  const SinglePage_PC = [
    document.querySelector('.SingleMainPC'),
    document.querySelector('.SingleSubPC'),
    document.querySelector('.SingleEventPC')
  ];

  const SinglePageBtnAll_Sub = [
    document.getElementById('SinglePageBtn4'),
    document.getElementById('SinglePageBtn5'),
    document.getElementById('SinglePageBtn6')
  ];

  const SinglePage_Tab = [
    document.querySelector('.SingleMainTab'),
    document.querySelector('.SingleSubTab'),
    document.querySelector('.SingleEventTab')
  ];


  const SinglePageBtnAll_Mobile = [
    document.getElementById('SinglePageBtn7'),
    document.getElementById('SinglePageBtn8'),
    document.getElementById('SinglePageBtn9')
  ];

  const SinglePage_Mobile = [
    document.querySelector('.SingleMainMobile'),
    document.querySelector('.SingleSubMobile'),
    document.querySelector('.SingleEventMobile')
  ];


  
  SinglePageBtnAll.forEach((Single, index) => {
    Single.addEventListener('click', function() {
      SinglePage_PC.forEach((Page, i) => {
        if (index === i) {
          Page.style.display = 'block';
        } else {
          Page.style.display = 'none';
        }
      });
      SinglePage_Tab.forEach((SubPage) => {
        SubPage.style.display = 'none';
      });
      SinglePage_Mobile.forEach((MobilePage) => {
        MobilePage.style.display = 'none';
      });
    });
  });
  
  SinglePageBtnAll_Sub.forEach((Sub, index) => {
    Sub.addEventListener('click', function() {
      SinglePage_Tab.forEach((SubPage, i) => {
        if (index === i) {
          SubPage.style.display = 'block';
        } else {
          SubPage.style.display = 'none';
        }
      });
      SinglePage_PC.forEach((Page) => {
        Page.style.display = 'none';
      });
      SinglePage_Mobile.forEach((MobilePage) => {
        MobilePage.style.display = 'none';
      });
    });
  });
  
  SinglePageBtnAll_Mobile.forEach((Mobile, index) => {
    Mobile.addEventListener('click', function() {
      SinglePage_Mobile.forEach((MobilePage, i) => {
        if (index === i) {
          MobilePage.style.display = 'block';
        } else {
          MobilePage.style.display = 'none';
        }
      });
      SinglePage_Tab.forEach((SubPage) => {
        SubPage.style.display = 'none';
      });
      SinglePage_PC.forEach((Page) => {
        Page.style.display = 'none';
      });
    });
  });












/* 탭 메뉴 누를 경우 각 탭 메뉴만 스타일링 */
const CodeTab = [
  document.querySelector('.Tab1'),
  document.querySelector('.Tab2'),
  document.querySelector('.Tab3'),
  document.querySelector('.Tab4')
]



  CodeTabMenuLi.forEach((el, index) => {
    el.addEventListener('click', function() {
      CodeTabMenuLi.forEach((elLi, i) => {
        if (i === index) {
          elLi.style.border = '2px solid #fff'
          elLi.style.borderBottom = 'none'
          elLi.style.color = '#fff'
          elLi.style.textShadow = '5px 0px 25px #fff'
          elLi.style.height = '100px'
          elLi.style.lineHeight = '100px'
          elLi.style.fontSize = '22px'
          elLi.style.fontWeight = 'bold'
          elLi.style.marginTop = '0px'
        } else {
          elLi.style.border = '2px solid #fff'
          elLi.style.color = '#aaa'
          elLi.style.textShadow = '0px 0px 0px #fff'
          elLi.style.height = '80px'
          elLi.style.lineHeight = '80px'
          elLi.style.fontSize = '14px'
          elLi.style.fontWeight = 'unset'
          elLi.style.marginTop = '20px'
        }
      })
    })
  })

/* 메뉴 LI를 누를경우 각 탭별 변경 */
  CodeTabMenuLi.forEach((Tab, index) => {
    Tab.addEventListener('click', function() {
      CodeTab.forEach((CodeBox, i) => {
        if (i === index) {
          CodeBox.style.display = 'block'
        } else {
          CodeBox.style.display = 'none'
        }
      })
    })
  })








})