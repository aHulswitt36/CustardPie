using System.Collections.Generic;

namespace CustardPieDal.Models
{
    public class Band
    {
        public int Id{get;set;}
        public string Name{get;set;}

        public virtual List<Song> Songs{get;set;}
    }    
}