using CustardPieDal.Models;
using Microsoft.EntityFrameworkCore;

namespace CustardPieDal
{
    public class CustardPieDbContext : DbContext
    {
        public DbSet<Band> Bands {get;set;}
        public DbSet<Member> Members{get;set;}
        public DbSet<Photo> Photos{get;set;}
        public DbSet<Schedule> Schedule{get;set;}
        public DbSet<Song> Songs{get;set;}

        protected override void OnConfiguring(DbContextOptionsBuilder builder) 
            => builder.UseNpgsql("Host=localhost;Database=CustardPie;Username=aarron;Password=Fishing!729");

    }
}