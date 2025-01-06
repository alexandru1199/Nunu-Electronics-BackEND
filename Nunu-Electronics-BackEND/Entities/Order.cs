using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Nunu_Electronics_BackEND.Entities
{
    public class Order
    {
        public int OrderID { get; set; }
        public int ClientID { get; set; }
        [ForeignKey("ClientID")]
        public DateTime? OrderDate { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal TotalAmount { get; set; }
        public string? Status { get; set; }
    }
}
