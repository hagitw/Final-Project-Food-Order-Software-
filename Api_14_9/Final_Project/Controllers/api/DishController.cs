using Final_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace Final_Project.Controllers.api
{
    public class DishController : ApiController
    {
        ApplicationDbContext DB = new ApplicationDbContext();

        [HttpGet]
        public IEnumerable<Dish> Get()
        {
            return DB.Dishs;
        }

        [HttpGet]
        public IEnumerable<Dish> Get(string category)
        {
            List<Dish> DishList = DB.Dishs.Where(x => x.category == category).ToList();
            return DishList;
        }
    
        [HttpPost]
        public IHttpActionResult CreateDish(Dish NewDish)
        {
            if (NewDish == null) { return BadRequest(); }
            DB.Dishs.Add(NewDish);
            DB.SaveChanges();
            return CreatedAtRoute("DefaultApi", new { id = NewDish.Id }, NewDish);
        }

      

        [HttpPut]
        public IHttpActionResult UpdateDish(long id, Dish EditDish)
        {
            if (EditDish == null) { return BadRequest(); }
            Dish Dish = DB.Dishs.Find(id);
            if (Dish == null) { return NotFound(); }
            Dish.Name = EditDish.Name;
            Dish.chefId = EditDish.chefId;
            Dish.Description = EditDish.Description;
            Dish.Url = EditDish.Url;
            Dish.Price = EditDish.Price;
            Dish.category = EditDish.category;
            DB.SaveChanges();
            return StatusCode(HttpStatusCode.NoContent);
        }
        [HttpDelete]
        public IHttpActionResult DeleteDish(long id)
        {
            Dish Dish = DB.Dishs.Find(id);
            if (Dish == null)
            {
                return NotFound();
            }
            DB.Dishs.Remove(Dish);
            DB.SaveChanges();
            return Ok(Dish);
        }
    }
}
