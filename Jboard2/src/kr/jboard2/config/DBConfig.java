package kr.jboard2.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConfig {

	//DB 정보 - 배포용
	//public static final String HOST="jdbc:mysql://kbmorca.com:3306/kbm";
	//public static final String USER="kbm";
	//public static final String PASS="1234";
	
	
	
	//DB 정보 - 개발용
	public static final String HOST="jdbc:mysql://192.168.50.82:3306/kbm";
	public static final String USER="kbm";
	public static final String PASS="1234";
	
	public static  Connection getConnection() throws Exception {
		
		//1단계
		
		Class.forName("com.mysql.jdbc.Driver");
		//2단계
	
		Connection conn =  DriverManager.getConnection(HOST,USER,PASS);
		
		return conn;
	  
	}
	
	
	
}
