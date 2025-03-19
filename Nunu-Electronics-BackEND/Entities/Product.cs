using System.ComponentModel.DataAnnotations.Schema;

namespace Nunu_Electronics_BackEND.Entities
{
    public class Product
    {
        public int ProductID { get; set; }
        public string? ProductName { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        public decimal Price { get; set; }
        public int StockQuantity { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string? Image { get; set; }
        public string? Description { get; set; }
    }
}
