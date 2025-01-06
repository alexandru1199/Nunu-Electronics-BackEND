using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Nunu_Electronics_BackEND.Entities
{
    public class Client
    {
        public int ClientID { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? Phone { get; set; }
        public string? Address { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}
