using System.Threading.Tasks;
using CustardPieDal;
using CustardPieDal.Models;
using Microsoft.AspNetCore.Mvc;

namespace CustardPieAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BandController : ControllerBase
    {
        private readonly IBandDal _bandDal;

        public BandController(IBandDal bandDal){
            _bandDal = bandDal;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id){
            return new OkObjectResult(await _bandDal.Get(id));
        }

        [HttpGet]
        public async Task<IActionResult> GetTask() => new OkObjectResult(await _bandDal.GetAll());

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Band band){
            if(band == null)
                return BadRequest();
            var inserted = await _bandDal.Insert(band);
            return new OkObjectResult(inserted);
        }

        [HttpPut]
        public async Task<IActionResult> Put(int id, [FromBody] Band band){
            if(band == null)
                return BadRequest();
            band.Id = id;
            var updated = await _bandDal.Update(band);
            return new OkObjectResult(updated);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id){
            var deleted = await _bandDal.Delete(id);
            if(deleted == 0)
                return new OkObjectResult(false);
            return new OkObjectResult(true); 
        }

    }
}