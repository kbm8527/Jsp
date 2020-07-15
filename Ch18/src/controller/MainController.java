package controller;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Properties;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.CommonService;
import model.GreetingService;
import model.HelloService;
import model.WelcomeService;

public class MainController extends HttpServlet {
	
	//������ ���̵� ��ȣ
	private static final long serialVersionUID = 1L;
	
	private Map<String, Object> instances = new HashMap<>();

	@Override
	public void init(ServletConfig config) throws ServletException {
		
		// ������Ƽ ���� ��� ���ϱ�
		ServletContext sc = config.getServletContext();
		String path = sc.getRealPath("/WEB-INF")+"/urlMapping.properties";
		
		Properties prop = new Properties();
		
		try {
			// ������Ƽ ���ϰ� �Է� ��Ʈ�� ����
			FileInputStream fis = new FileInputStream(path);
			
			// �Է� ��Ʈ������ ������Ƽ ���� �о prop ��ü�� key-map ������ ����
			prop.load(fis);
			
			// �Է� ��Ʈ�� ����
			fis.close();
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		
		// prop ��ü�� ������ ���� Model ��ü�� Map�� ����
		Iterator iter = prop.keySet().iterator();
		
		while(iter.hasNext()) {
			String k = iter.next().toString();
			String v = prop.getProperty(k);
			
			try {
				
			Class obj = Class.forName(v);
			Object instance = obj.newInstance();
			
			instances.put(k, instance);
			
			}catch(Exception e) {
				e.printStackTrace();
				
			}
			
		}
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		requestProc(req, resp);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		requestProc(req, resp);
	}
	
	private void requestProc(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String path = req.getContextPath();
		String uri = req.getRequestURI();
		
		String action = uri.substring(path.length());
		
		CommonService instance = (CommonService)instances.get(action);
		String result = instance.requestProc(req, resp);
		
		//redirect�� �����ϴ°��̸�
		if(result.startsWith("redirect:")) {
			//�����̷�Ʈ
			String redirectURL = result.substring(9);
			resp.sendRedirect("redirectURL");
		}else {
			//view ������
			RequestDispatcher dispatcher = req.getRequestDispatcher(result);
			dispatcher.forward(req, resp);
		}
		
		
	}
}