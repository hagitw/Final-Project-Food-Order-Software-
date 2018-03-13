using Final_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;
using System.Web.Mail;

namespace Final_Project.Controllers.api
{
    public class ConnectUsController : ApiController
    {
        ApplicationDbContext DB = new ApplicationDbContext();
        [HttpGet]
        public IEnumerable<ConnectUs> Get()
        {
            return DB.Connects;
        }
    }
}
