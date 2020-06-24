
<%@page import="kr.co.farmstory1.config.SQL"%>
<%@page import="kr.co.farmstory1.config.DBConfig"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%	
	request.setCharacterEncoding("UTF-8");
	String seq = request.getParameter("seq");
	String parent = request.getParameter("parent");	
	
	Connection conn = DBConfig.getConnection();
	
	PreparedStatement psmtComment = conn.prepareStatement(SQL.DELETE_COMMENT);
	psmtComment.setString(1, seq);
	
	psmtComment.executeUpdate();
	
	
	psmtComment.close();
	conn.close();
	
	
	response.sendRedirect("/Farmstory1/board/view.jsp?seq="+parent);
	
	

	
%>