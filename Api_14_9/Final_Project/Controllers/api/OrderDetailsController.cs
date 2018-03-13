using Final_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Final_Project.Controllers.api
{
    public class OrderDetailsController : ApiController
    {
        ApplicationDbContext DB = new ApplicationDbContext();

        [HttpGet]
        public IEnumerable<OrderDetails> Get()
        {
            return DB.OrdersDetails;
        }
        [HttpPost]
        public IHttpActionResult CreateOrdersDetails(OrderDetails OrderDetails)
        {
            if (OrderDetails == null) { return BadRequest(); }
            DateTime Date = new DateTime();

            OrderDetails.Time = DateTime.Now.Hour + ":" + DateTime.Now.Minute;
            OrderDetails.Date = DateTime.Now.Day + "/" + DateTime.Now.Month+"/" + DateTime.Now.Year;

            DB.OrdersDetails.Add(OrderDetails);
            DB.SaveChanges();
            return CreatedAtRoute("DefaultApi", new { id = OrderDetails.Id }, OrderDetails);
        }
        [HttpGet]
        public IHttpActionResult GetOrderDetails(long orderId)// קבלת פירוט הזמנה לקוח
        {

            if (orderId == null) { return BadRequest(); }
          //  IEnumerable<Order> OrderLists = DB.Orders;
            List<OrderDetails> OrderDetail = DB.OrdersDetails.Where(x => x.OrderId == orderId).ToList();


            return Ok(OrderDetail);
        }

        [HttpPut]
        public IHttpActionResult UpdateOrder(long id, OrderDetails OrderDetails)
        {
            if (OrderDetails == null) { return BadRequest(); }
            OrderDetails OrderD = DB.OrdersDetails.Find(id);
            if (OrderD == null) { return NotFound(); }
            OrderD.CustomerId = OrderDetails.CustomerId;
            OrderD.OrderId = OrderDetails.OrderId;
            OrderD.DishId = OrderDetails.DishId;      
            OrderD.Count = OrderDetails.Count;
            DB.SaveChanges();
            return StatusCode(HttpStatusCode.NoContent);
        }
        [HttpDelete]
        public IHttpActionResult DeleteOrderDetails(long Orderid,long Dishid)
        {
            OrderDetails OrderD = DB.OrdersDetails.FirstOrDefault(x=>x.DishId== Dishid&&x.OrderId== Orderid);
            if (OrderD == null)
            {
                return NotFound();
            }
            DB.OrdersDetails.Remove(OrderD);
            DB.SaveChanges();
            return Ok(OrderD);
        }
    }
}
