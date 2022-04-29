// JavaScript Document

// JavaScript Document


$(function(){
	$('.main .visual_baner').slick({
		//slick 셋팅에서 자동실행 설정값을 확인 시 기본값이 false이기 떄문에 true로 적용함.
			//슬라이드에 마우스를 올리면 멈추게 되어있음
			//pauseOnHover:false를 사용하여 마우스 호버상태에서도 슬라이드가 돌아가도록 적용
			swipe:true, //마우스나 손으로 좌우 이동 가능
			autoplay:true,//자동실행
			pauseOnHover:false,		//마우스 호버시 계속 실행
			autoplaySpeed:5000,		//다음장까지 넘어가는 속도
			speed:1000,		//애니메이션 속도
			arrows:true,	//좌우 화살표
			//페이지 버튼
			fade:true, //배너 이미지가 사라지면서(투명해지면서) 다음 이미지가 나타나는 효과	
			//vertical:true  //세로 방향 슬라이드
		
		});
		
			$('.main2 .visual_baner2').slick({
		//slick 셋팅에서 자동실행 설정값을 확인 시 기본값이 false이기 떄문에 true로 적용함.
			//슬라이드에 마우스를 올리면 멈추게 되어있음
			//pauseOnHover:false를 사용하여 마우스 호버상태에서도 슬라이드가 돌아가도록 적용
			swipe:true, //마우스나 손으로 좌우 이동 가능
			autoplay:true,//자동실행
			pauseOnHover:false,		//마우스 호버시 계속 실행
			autoplaySpeed:5000,		//다음장까지 넘어가는 속도
			speed:1000,		//애니메이션 속도
			arrows:false,	//좌우 화살표
			dots:true,
			//페이지 버튼
			fade:true, //배너 이미지가 사라지면서(투명해지면서) 다음 이미지가 나타나는 효과	
			//vertical:true  //세로 방향 슬라이드
		
		});
				
	$('.R_box .visual').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay:true,
  pauseOnHover:false,	
  autoplaySpeed: 4000, 
  dots:false,
  arrows:false,	
    responsive: [
    {
      breakpoint: 1511,
      settings: {
        slidesToShow: 4,
      }
    },
	
	{
      breakpoint: 1231,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 549,
      settings: {
        slidesToShow: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
		 
});
	

	$('.R_box .visual .visual1').hover(
	function(){$('.R_box .visual .visual1 img').attr({src:'img/recommend_1-2.jpg'})},
	function(){$('.R_box .visual .visual1 img').attr({src:'img/recommend_1.jpg'})}
	);
	
	$('.R_box .visual .visual2').hover(
	function(){$('.R_box .visual .visual2 img').attr({src:'img/recommend_2-3.jpg'})},
	function(){$('.R_box .visual .visual2 img').attr({src:'img/recommend_2.jpg'})}
	);
	
	$('.R_box .visual .visual3').hover(
	function(){$('.R_box .visual .visual3 img').attr({src:'img/recommend_3-2.jpg'})},
	function(){$('.R_box .visual .visual3 img').attr({src:'img/recommend_3.jpg'})}
	);
	
	$('.R_box .visual .visual4').hover(
	function(){$('.R_box .visual .visual4 img').attr({src:'img/recommend_4-2.jpg'})},
	function(){$('.R_box .visual .visual4 img').attr({src:'img/recommend_4.jpg'})}
	);
	
	$('.R_box .visual .visual5').hover(
	function(){$('.R_box .visual .visual5 img').attr({src:'img/recommend_5-2.jpg'})},
	function(){$('.R_box .visual .visual5 img').attr({src:'img/recommend_5.jpg'})}
	);
	
	$('.R_box .visual .visual6').hover(
	function(){$('.R_box .visual .visual6 img').attr({src:'img/recommend_6-2.jpg'})},
	function(){$('.R_box .visual .visual6 img').attr({src:'img/recommend_6.jpg'})}
	);
	
	$('.R_box .visual .visual7').hover(
	function(){$('.R_box .visual .visual7 img').attr({src:'img/recommend_7-2.jpg'})},
	function(){$('.R_box .visual .visual7 img').attr({src:'img/recommend_7.jpg'})}
	);
	
	$('.R_box .visual .visual8').hover(
	function(){$('.R_box .visual .visual8 img').attr({src:'img/recommend_8-2.jpg'})},
	function(){$('.R_box .visual .visual8 img').attr({src:'img/recommend_8.jpg'})}
	);
	
	$('.collect_box article').mouseover(function(){
		$(this).removeClass();
		$(this).addClass('on');
	});
	
	$('.collect_box article').mouseout(function(){
		$(this).removeClass();
	});

		$('.m-gnb').hide();	//m-gnb실행 시 닫히게 하기= (display:none)
		$('.btn_menu').click(function(){
			//toggleClass는 click이벤트 안에서 add, remove를 번갈아 실행해줌
			$(this).toggleClass('on');
			
			$('.black').toggleClass('on');
			
			//아래의 식은 모든 li를 가리킴.
			if( $('.m-gnb').is(":visible") ){	//m-gnb가 보이는가? (true)
				$('.m-gnb').stop().slideUp();	//위로 올려서 보이지 않게 하라
				$('.m-gnb>li .sub').stop().slideUp();		//위로 올려서 보이지 않게 하라
			}else{
				$('.m-gnb').stop().slideDown();//m-gnb가 보이는가? (false)	아래로 내려서 보이도록 하라
				}
			});
			
		$('.m-gnb>li>a').removeClass('underline');
		
		});
		
		$(window).resize(function(){
			if(window.innerWidth > 1023){
				$('.m-gnb').hide();
				$('.m-gnb>li .sub').hide();
				$('.btn_menu').removeClass('on');
				}
	
		
});