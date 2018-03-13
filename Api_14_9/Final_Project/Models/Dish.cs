using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Final_Project.Models
{
    public class Dish
    {      
        public long Id { get; set; }
        public long chefId { get; set; }
        public string category { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public double Price { get; set; }

    }
}