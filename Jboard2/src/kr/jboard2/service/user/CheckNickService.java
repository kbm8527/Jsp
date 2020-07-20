package kr.jboard2.service.user;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;

import kr.jboard2.config.DBConfig;
import kr.jboard2.config.SQL;
import kr.jboard2.controller.CommonService;

public class CheckNickService implements CommonService{

	@Override
	public String requestProc(HttpServletRequest req, HttpServletResponse resp) throws Exception {

		String nick	= req.getParameter("nick");

		Connection conn = DBConfig.getConnection();
		PreparedStatement psmt =  conn.prepareStatement(SQL.SELECT_CHECK_NICK);
		psmt.setString(1, nick);
		
		
	  	ResultSet rs =	psmt.executeQuery();
	  	
	  	int result = 0;
	  	
	  		if(rs.next()){
	  			result = rs.getInt(1);
	  		
	  	}
	  	
	  	rs.close();
	  	psmt.close();
	  	conn.close();
	  	
	  	//Json 생성

	 	JsonObject json = new JsonObject();
	  	json.addProperty("result", result);
	  	
	  	//Json 출력
	  	//out.print(json);
		
	  	return "json:"+json.toString();
	} 

}
