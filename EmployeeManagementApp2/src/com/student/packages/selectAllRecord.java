package com.student.packages;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class selectAllRecord {

    public static void main(String[] args) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydatabase", "root", "Sp940@*&");
            Statement st = con.createStatement();
            String q="select * from employee1";
            ResultSet set=st.executeQuery(q);
            while(set.next()) {
            	int eid=set.getInt(1);
            	String ename=set.getString(2);
            	String dept=set.getString(3);
            	double salary=set.getDouble(4);
            	System.out.println("Eid  :"+eid);	
            	System.out.println("Ename :"+ename);	
            	System.out.println("Department :"+dept);	
            	System.out.println("salary :"+salary);	
            	
            }
           
            
            		
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
