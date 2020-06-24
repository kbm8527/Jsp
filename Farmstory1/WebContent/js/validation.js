	
	$(function(){
    		
    	var form = $('.register > form');
    	
    	//form의 전송버튼(submit)를 클릭하면
    	form.submit(function(){
    		
    		//이이디 검증이 안됐을 때
    		if(isUidOk == false){
    			alert('아이디를 확인하세요.');
    			return false;
    		}
    		
    		//비밀번호 검증이 안됐을 때 
    		if(!isPassOk){
    			alert('비밀번호를 확인하세요.');
    			return false;
    		}
    		//이름
    		if(!isNameOk){
    			alert('이름을 확인하세요.');
    			return false;
    		}
    		//별명
    		if(!isNickOk){
    			alert('별명을 확인하세요.');
    			return false;
    			
    		}
    		
    		//이메일
    		if(!isEmailOk){
    			alert('이메일을 확인하세요.');
    			return false;
    		}
    		
    		//휴대폰
    		if(!isHpOk){
    			alert('휴대폰번호를 확인하세요.');
    			return false;
    		}
    		
    		
    	
    		//최종 모든 검증이 통과 된 후 서버로 데이터 전송
    		return true;
    	});
    		
    	});
    