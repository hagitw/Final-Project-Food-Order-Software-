using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Final_Project.Models
{
    public class OrderDetails
    {
        public long Id { get; set; }
        public long CustomerId { get; set; }
        public long OrderId { get; set; }
        public long DishId { get; set; }
        //public int Amount { get; set; }
        public int Count { get; set; }
        public string Time { get; set; }
        public string Date { get; set; }
       
    }
}