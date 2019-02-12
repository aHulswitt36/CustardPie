using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustardPieDal.Models;
using Microsoft.EntityFrameworkCore;

namespace CustardPieDal
{
    public class BandDal : IBandDal
    {
        private readonly CustardPieDbContext _context;

        public BandDal(CustardPieDbContext context){
            _context = context;
        }

        public async Task<int> Delete(int id)
        {
            var band = await _context.Bands.AsNoTracking().SingleOrDefaultAsync(s => s.Id == id);
            var songs = await _context.Songs.AsNoTracking().Where(s => s.BandId == id).ToListAsync();
            _context.Bands.Remove(band);
            _context.Songs.RemoveRange(songs);
            return await _context.SaveChangesAsync();
        }

        public async Task<Band> Get(int id)
        {
            var band = await _context.Bands.AsNoTracking().Include(s => s.Songs).SingleOrDefaultAsync(b => b.Id == id);
            return band;
        }

        public async Task<IEnumerable<Band>> GetAll()
        {
            var bands = await _context.Bands.Include(s => s.Songs).AsNoTracking().ToListAsync();
            return bands;
        }

        public async Task<int> Insert(Band entity)
        {
            var inserted = await _context.Bands.AddAsync(entity);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> Update(Band entity)
        {
            var band = await _context.Bands.AsNoTracking().SingleOrDefaultAsync(b => b.Id == entity.Id);
            band.Name = entity.Name;

            return await _context.SaveChangesAsync();
        }
    }
}