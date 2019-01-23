using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using CustardPieDal.Models;
using System;
using CustardPieDal;

namespace CustardPieAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScheduleController : ControllerBase
    {
        private readonly IScheduleDal _scheduleDal;

        public ScheduleController(IScheduleDal scheduleDal){
            _scheduleDal = scheduleDal;
        }

        [HttpGet ("{id}")]
        public Schedule Get(int id) {
            return _scheduleDal.GetSchedule(id);
        }

        [HttpGet]
        public IEnumerable<Schedule> Get() => _scheduleDal.GetSchedules();
       

        [HttpPost]
        public IActionResult Post([FromBody] Schedule schedule){
            if(schedule == null)
                return BadRequest();

            var inserted = _scheduleDal.InsertSchedule(schedule);
            return Ok(new { message = inserted > 0 ? "Successfully created schedule item" : "Something went wrong when creating schedule"});
        }

        [HttpPut]
        public IActionResult Put(int id, [FromBody] Schedule value){
            if(value == null)
                return BadRequest();

            var updated = _scheduleDal.UpdateSchedule(value);
            return Ok(new {message = updated > 0 ? "Successfully updated schedule item" : "Something went wrong when updating schedule item"});
        }

        [HttpDelete("{id}")]
        public bool Delete(int id){
            var deleted = _scheduleDal.DeleteSchedule(id);
            if(deleted == 0)
                return false;
            return true;
            //return deleted > 0;
        }
    }
}