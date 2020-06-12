<%@page import="kr.co.jboard1.config.SQL"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@page import="kr.co.jboard1.config.DBConfig"%>
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
	
	
	response.sendRedirect("/Jboard1/view.jsp?seq="+parent);
	
	

	
%>