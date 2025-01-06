using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Nunu_Electronics_BackEND.Entities
{
    public class OrderDetails
    {
        public int OrderDetailsID { get; set; }
        public int OrderID { get; set; }
        [ForeignKey("OrderID")]
        public Order? Order { get; set; }
        public int ProductID { get; set; }
        [ForeignKey("ProductID")]
        public int Quantity { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal UnitPrice { get; set; }
    }
}
