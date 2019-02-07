using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CustardPieDal.Models;
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
        public async Task<IActionResult> Get(int id) {
            return new OkObjectResult(await _scheduleDal.GetSchedule(id));
        }

        //[ResponseType(typeof(IEnumerable<Schedule>))]
        [HttpGet]
        public async Task<IActionResult> Get() => new OkObjectResult(await _scheduleDal.GetSchedules());
       

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Schedule schedule){
            if(schedule == null)
                return BadRequest();

            var inserted = await _scheduleDal.InsertSchedule(schedule);
            return Ok(new { message = inserted > 0 ? "Successfully created schedule item" : "Something went wrong when creating schedule"});
        }

        [HttpPut]
        public async Task<IActionResult> Put(int id, [FromBody] Schedule value){
            if(value == null)
                return BadRequest();

            var updated = await _scheduleDal.UpdateSchedule(value);
            return Ok(new {message = updated > 0 ? "Successfully updated schedule item" : "Something went wrong when updating schedule item"});
        }

        [HttpDelete("{id}")]
        public async Task<bool> Delete(int id){
            var deleted = await _scheduleDal.DeleteSchedule(id);
            if(deleted == 0)
                return false;
            return true;
            //return deleted > 0;
        }
    }
}