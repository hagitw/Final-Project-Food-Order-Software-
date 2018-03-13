using Final_Project.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Final_Project.Controllers.api
{
  
    public class ChefController : ApiController
    {
        ApplicationDbContext DB = new ApplicationDbContext();
        [HttpGet]
        public IEnumerable<Chef> Get()// הצגת כל השפים
        {
            return DB.Chefs;
        }
        [HttpPost]
        public IHttpActionResult CreateChaf(Chef NewChef)//הוספת שף חדש 
        {
            if (NewChef ==null) { return BadRequest(); }
           DB.Chefs.Add(NewChef);
            DB.SaveChanges();
            return CreatedAtRoute("DefaultApi", new { id = NewChef.Id }, NewChef);
        }
        [HttpPut]
        public IHttpActionResult UpdateChef(long id,Chef EditChef)//עידכון שף חדש 
        {
            if (EditChef==null) { return BadRequest(); }
            Chef Chef = DB.Chefs.Find(id);
            if (Chef == null) { return NotFound(); }
            Chef.Name = EditChef.Name; Chef.Description = EditChef.Description;
            DB.SaveChanges();
            return StatusCode(HttpStatusCode.NoContent);
        }
        [HttpDelete]
        public IHttpActionResult DeleteChef(long id)//הסרת שף 
        {
            Chef Chef = DB.Chefs.Find(id);
            if (Chef == null)
            {
                return NotFound();
            }
            DB.Chefs.Remove(Chef);
            DB.SaveChanges();
            return Ok(Chef);
        }
    }
}
