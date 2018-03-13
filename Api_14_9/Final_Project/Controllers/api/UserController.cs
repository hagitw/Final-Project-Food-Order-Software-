using Final_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Final_Project.Controllers.api
{
    public class UserController : ApiController
    {
        ApplicationDbContext DB = new ApplicationDbContext();

        [HttpPost]
        public IHttpActionResult CreateUser(User User)//get or create user id and get order id
        {
            if (User == null) { return BadRequest(); }
            var UserExsist = DB.Users.FirstOrDefault(user => user.Email == User.Email & user.FirstName == User.FirstName);
            if (UserExsist != null)
            {
                Order CustomerOrder = CreateOrder(UserExsist);
                return Ok(new { id = CustomerOrder.CustomerId, OrderId = CustomerOrder.Id , Permission=UserExsist.Permission});
            }
            DB.Users.Add(User);
            DB.SaveChanges();
            Order LastOrder = CreateOrder(User);
            return Ok(new { id = LastOrder.CustomerId, OrderId = LastOrder.Id , Permission = User.Permission });
        }
        private Order CreateOrder(User user) 
        {
            Order NewOrder = new Order();
            NewOrder.CustomerId = (user.Id);// create order
            DB.Orders.Add(NewOrder);
            DB.SaveChanges();

            List<Order> orders = DB.Orders.Where(u => u.CustomerId == user.Id).ToList(); //find to order
            Order LastOrder = orders.Last();            
            return LastOrder;
        } 
        [HttpGet]
        public IEnumerable<User> GetUser()
        {
            return DB.Users;
        }

        [HttpDelete]
        public IHttpActionResult GetUser(long id)
        {
            User user = DB.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }
            DB.Users.Remove(user);
            DB.SaveChanges();
            return Ok(user);
        }     
    }
}

