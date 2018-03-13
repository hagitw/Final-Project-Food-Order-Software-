using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Final_Project.Models
{
    public class User
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string Permission { get; set; }
        public string Email { get; set; }

    }
}