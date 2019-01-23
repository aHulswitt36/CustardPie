using System.Collections.Generic;
using CustardPieAPI.Models;

namespace CustardPieAPI.Models
{
    public class Band
    {
        public int Id{get;set;}
        public string Name{get;set;}

        public List<Song> Songs{get;set;}
    }    
}