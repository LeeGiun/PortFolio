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
          width: "50%"
        }, 1500);
        barProgress.eq(4).find(".ui-progressbar-value").css({
          "background": "#DDDDDDD"
        });

        barProgress.eq(5).animate({
          width: "80%"
        }, 1500);
        barProgress.eq(5).find(".ui-progressbar-value").css({
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
    document.querySelector('#CodeBtn9'),
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

const TeamSwiper = document.querySelector('.TEAM_Swiper')
let CodeClick = 0

CodeTit1.addEventListener('click', function () {
  if (CodeClick === 0) {
    CodeTxt1.style.height = '0px'
    CodeImg1.style.height = '0px'
    CodeTxt1.style.opacity = '0'
    CodeImg1.style.opacity = '0'
    TeamSwiper.style.opacity = '0'
    CodeClick = 1
  } else if (CodeClick === 1) {
    CodeTxt1.style.height = '800px'
    CodeImg1.style.height = '800px'
    CodeTxt1.style.opacity = '1'
    CodeImg1.style.opacity = '1'
    TeamSwiper.style.opacity = '1'
    CodeClick = 0
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

const SubSwiper = document.querySelector('.SUB_Swiper')
let CodeClick2 = 0

CodeTit2.addEventListener('click', function () {
  if (CodeClick2 === 0) {
    CodeTxt2.style.height = '0px'
    CodeImg2.style.height = '0px'
    CodeTxt2.style.opacity = '0'
    CodeImg2.style.opacity = '0'
    SubSwiper.style.opacity = '0'
    CodeClick2 = 1
  } else if (CodeClick2 === 1) {
    CodeTxt2.style.height = '800px'
    CodeImg2.style.height = '800px'
    CodeTxt2.style.opacity = '1'
    CodeImg2.style.opacity = '1'
    SubSwiper.style.opacity = '1'
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

const FillterSwiper = document.querySelector('.FILLTER_Swiper')
let CodeClick3 = 0

CodeTit3.addEventListener('click', function () {
  if (CodeClick3 === 0) {
    CodeTxt3.style.height = '0px'
    CodeImg3.style.height = '0px'
    CodeTxt3.style.opacity = '0'
    CodeImg3.style.opacity = '0'
    FillterSwiper.style.opacity = '0'
    CodeClick3 = 1
  } else if (CodeClick3 === 1) {
    CodeTxt3.style.height = '800px'
    CodeImg3.style.height = '800px'
    CodeTxt3.style.opacity = '1'
    CodeImg3.style.opacity = '1'
    FillterSwiper.style.opacity = '1'
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

const ReviewSwiper = document.querySelector('.REVIEW_Swiper')
let CodeClick4 = 0

CodeTit4.addEventListener('click', function () {
  if (CodeClick4 === 0) {
    CodeTxt4.style.height = '0px'
    CodeImg4.style.height = '0px'
    CodeTxt4.style.opacity = '0'
    CodeImg4.style.opacity = '0'
    ReviewSwiper.style.opacity = '0'
    CodeClick4 = 1
  } else if (CodeClick4 === 1) {
    CodeTxt4.style.height = '800px'
    CodeImg4.style.height = '800px'
    CodeTxt4.style.opacity = '1'
    CodeImg4.style.opacity = '1'
    ReviewSwiper.style.opacity = '1'
    CodeClick4 = 0
  }
})









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
  document.querySelector('.Tab4'),
  document.querySelector('.Tab5'),
]

const CodeTabMenuLi = document.querySelectorAll('.CodeReview_TabMenu li')

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