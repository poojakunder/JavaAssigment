package com.student.packages;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class InsertRecord {

	public static void main(String[] args) 
	{
		try{
			Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydatabase", "root", "Sp940@*&");
			Statement st=con.createStatement();
			int i=st.executeUpdate("insert into employee1 values(1001,'Pooja','IT',13500.00)");
			int j=st.executeUpdate("insert into employee1 values(1002,'Pari','IT1',135001.00)");
			System.out.println(i + j+" New Record has been inserted successfully");
		}
		catch(Exception e)
		{
			e.printStackTrace();
} 
} 
} 
