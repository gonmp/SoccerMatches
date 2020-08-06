using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Soccer_Matches.Data.Models
{
    public class Match
    {
        //Constructor
        public Match()
        {

        }

        [Key]
        public int Id { get; set; }
        public string League { get; set; }
        public int NumberTeamsLeague { get; set; }
        public DateTime Date { get; set; }
        public string HomeTeam { get; set; }
        public string AwayTeam { get; set; }
        public string Result { get; set; }
        public string HomeFinalGoals { get; set; }
        public string AwayFinalGoals { get; set; }
        public string HomeExtraGoals { get; set; }
        public string AwayExtraGoals { get; set; }
        public string HomeFirstHalfGoals { get; set; }
        public string AwayFirstHalfGoals { get; set; }
        public string HomeSecondHalfGoals { get; set; }
        public string AwaySecondHalfGoals { get; set; }

    }
}
