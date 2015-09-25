﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Server : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string inputValue = string.Empty;

        if (Request.HttpMethod.ToUpper().Equals("GET"))
        {
            //注意使用Request时，其会从QueryString,Form,ServerVariable中遍历一遍，
            //如果发现符合要求的数据，那么久会停止向后搜索，

            //username = Request.["username"];
            //age = Request.["age"]; 
            inputValue = Request.QueryString["inputValue"];
        }
        else {
            inputValue = Request.Form["inputValue"];
        }

        Response.Clear();

        Response.Write("输入值: '" + inputValue + 
            "'<br/>时间：‘" + DateTime.Now.ToString() + "'");

        Response.End();

    }
}