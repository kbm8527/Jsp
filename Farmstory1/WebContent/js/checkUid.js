		// 정규표현식
		var regId    = /^[a-z]+[a-z0-9]{2,19}$/;    // 아이디 검사식
    	var regPw    = /^[a-z0-9_-]{6,18}$/;         // 비밀번호 검사식
    	var regName  = /^[가-힣]{2,5}$/;              // 이름 유효성 검사 2~4자 사이
    	
    	//최종 점검을 위한 상태변수 선언
    	
    	var isUidOk = false;
    	
    	
    	$(document).ready(function(){
    		
    		var alreadyCheck = false;
    		
    		
    			$('input[name=uid]').blur(function(){
    				
    				if(alreadyCheck){
    					alreadyCheck= false;
    					return false;
    				}
    				
    				
    				
    				var tag = $(this);
    				var uid = $(this).val();
    				var json = {"uid": uid}; 
    		
    				
    				//아이디가 숫자이면
    				if(regId.test(uid) == false){
    					alert('아이디는 영어 소문자,숫자 조합으로 최소 4자 이상이어야 합니다.');
    					return false;
    				}
    	
    				//모든 검증이 통과되고 통신시작
    				$.ajax({
    					url:'/Farmstory1/user/proc/checkUid.jsp',
    					type: 'get',
    					data: json,
    					dataType: 'json',
    					success: function(data){
    						
    						
    						if(data.result == 1){
    							$('.resultId').css('color','red').text('이미 사용 중인 아이디 입니다.');
    							tag.focus();
    						}else{
    							$('.resultId').css('color','green').text('사용 하실 수 있는 아이디 입니다.');
    							isUidOk = true;
    						}
    						
    						
    						
    					}
    					
    					
    				});
    				
    			});
    		
    	});