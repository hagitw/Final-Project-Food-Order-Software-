using Final_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Helpers;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;


namespace Final_Project.Controllers.api
{
    public class SandMailController : ApiController
    {
        ApplicationDbContext DB = new ApplicationDbContext();

        [HttpPut]
        public IHttpActionResult CreateConnect(ConnectUs ConnectUs)
       {
            if (ConnectUs == null)
            { return BadRequest(); }
            DB.Connects.Add(ConnectUs);
            DB.SaveChanges();

            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls;
            MailMessage mail = new MailMessage();
            SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

            mail.From = new MailAddress("Management@gmail.com");      
            mail.To.Add("testmailaaa11@gmail.com");
            mail.Subject = ConnectUs.Subject;
            mail.Body = ConnectUs.Massage +"Customer Email- To Riplay Back :  " + ConnectUs.Email;

            SmtpServer.Port = 587;
            SmtpServer.Credentials = new System.Net.NetworkCredential("testmailaaa11@gmail.com", "TEST123456");          
            SmtpServer.EnableSsl = true;
            SmtpServer.Send(mail);              
            return Ok();       
        }           
            
    }
}
