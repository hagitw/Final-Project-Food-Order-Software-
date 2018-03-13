using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Final_Project.Models
{
    public class Order
    {
        public long Id { get; set; }
        public long CustomerId { get; set; }
        public int OrderDetailsId { get; set; }
        public int Amount { get; set; }
        public double Price { get; set; }
    }
}