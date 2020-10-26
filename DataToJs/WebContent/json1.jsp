<%@ page contentType="application/json;charset=UTF-8" pageEncoding="UTF-8"%>
<%
	//json " 앞에 이스케이프 처리  (\")
	String json = "{\"uid\":\"a101\",\"name\":\"김유신\",\"hp\":\"010-1234-1111\",\"pos\":\"사원\"}";

	out.print(json);

%>