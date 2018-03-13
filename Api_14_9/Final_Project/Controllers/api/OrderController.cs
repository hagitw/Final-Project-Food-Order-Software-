using Final_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Final_Project.Controllers.api
{
    public class OrderController : ApiController
    {
        ApplicationDbContext DB = new ApplicationDbContext();
        [HttpGet]
        public IEnumerable<Order> Get()
        {
            return DB.Orders;
        }

        [HttpGet]
        public IHttpActionResult GetCustomerOrder(long customerId)// קבלת פירוט הזמנות שבוצעו ע"י הלקוח
        {
            if (customerId==null) { return BadRequest(); }
            List<Order> CustomerOrders = DB.Orders.Where(x => x.CustomerId == customerId).ToList();
            if (CustomerOrders == null) { return BadRequest(); }
            return Ok(CustomerOrders);
        }
        private bool EmptyOrNull(long id)
        {
            return !EmptyOrNull(id)|| id==0;
        }
        [HttpPost]
        public IHttpActionResult CreateOrder(Order NewOrder)
        {
            if (NewOrder == null) { return BadRequest(); }
            DB.Orders.Add(NewOrder);
            DB.SaveChanges();
            return CreatedAtRoute("DefaultApi", new { id = NewOrder.Id }, NewOrder);
        }
        [HttpPut]
        public IHttpActionResult UpdateOrder(long id, Order EditOrder)
        {
            if (EditOrder == null) { return BadRequest(); }
            Order Order = DB.Orders.Find(id);
            if (Order == null) { return NotFound(); }
            Order.CustomerId = EditOrder.CustomerId;
            Order.OrderDetailsId = EditOrder.OrderDetailsId;
            Order.Price = EditOrder.Price;
            Order.Amount = EditOrder.Amount;
            DB.SaveChanges();
            return StatusCode(HttpStatusCode.NoContent);
        }
        [HttpDelete]
        public IHttpActionResult DeleteOrder(long id)
        {
            Order Order = DB.Orders.Find(id);
            if (Order == null)
            {
                return NotFound();
            }
            DB.Orders.Remove(Order);
            DB.SaveChanges();
            return Ok(Order);
        }
    }
}
