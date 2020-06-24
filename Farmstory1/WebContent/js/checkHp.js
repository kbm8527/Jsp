		// 정규표현식
		
    	var regHp = /^\d{3}-\d{3,4}-\d{4}$/;


    
    	//최종 점검을 위한 상태변수 선언
    	
    	var isHpOk = false;
    	
    	
    	$(document).ready(function(){
    		
    		var alreadyCheck = false;
    		
    		
    			$('input[name=hp]').blur(function(){
    				
    				if(alreadyCheck){
    					alreadyCheck= false;
    					return false;
    				}
    				
    				
    				
    				var tag = $(this);
    				var hp = $(this).val();
    				var json = {"hp": hp}; 
    		
    				 if(regHp.test(hp) == false){
    					alert('전화번호 형식이 잘못되었습니다.');
    					tag.focus();
    					alreadyCheck = true;
    					return false;
    				}
    				 
    				//모든 검증이 통과되고 통신시작
    				$.ajax({
    					url:'/Farmstory1/user/proc/checkHp.jsp',
    					type: 'get',
    					data: json,
    					dataType: 'json',
    					success: function(data){
    						
    						
    						if(data.result == 1){
    							$('.resultHp').css('color','red').text('이미 사용 중인 번호 입니다.');
    							tag.focus();
    						}else{
    							$('.resultHp').css('color','green').text('사용 하실 수 있는 번호 입니다.');
    							isNickOk = true;
    						}
    						
    						
    					}
    					
    					
    				});
    				
    			});
    		
    	});