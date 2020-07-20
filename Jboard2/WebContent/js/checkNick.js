		var regNick    = /^[a-z가-힣0-9]{2,5}$/;    // 별명 검사식

		// 폼 검증에 사용할 상태 변수
    	var isNickOk = false;

		//최종 점검을 위한 상태변수 선언

			var isNickOk = false;


			$(document).ready(function(){
	
				var alreadyCheck = false;

    	// 별명 중복체크

	$('input[name=nick]').blur(function(){
	
		if(alreadyCheck){
			alreadyCheck= false;
			return false;
		}
	
	
	
		var tag = $(this);
		var nick = $(this).val();
		var json = {"nick": nick}; 

	    				if(regNick.test(nick) == false){
	    					alert('별명은 영어 소문자 , 한글, 숫자(조합)로 최소 2자 이상이어야 합니다.');
	    					tag.focus();
	    					alreadyCheck = true;
	    					return false;
	    				}
    		$.ajax({
    			url:'/Jboard2/user/checkNick.do?nick='+nick,
    			type:'get',
    			dataType:'json',
    			// result:1
    			success: function(data){
    				
    				if(data.result == 1){
    					$('.resultNick').css('color','red').text('이미 사용 중인 별명 입니다.');
    					isNickOk = false;
    				}else{
    					$('.resultNick').css('color','green').text('사용 할 수 있는 별명 입니다.');
    					isNickOk = true;
    				}
    				
    			}
    		});
    			
    		});
    	});
    