using Azure;
using System.ComponentModel.DataAnnotations.Schema;

public class Product
{
    public int ProductID { get; set; }
    public string ProductName { get; set; }
    public decimal Price { get; set; }
    public int StockQuantity { get; set; }
    public DateTime CreatedDate { get; set; }
    public string Image { get; set; }
    public string Description { get; set; }
    public string DetailedDescription { get; set; }

    // Utilizarea doar a TagID
    public int TagID { get; set; }

    // Relație corectă cu Tag
    [ForeignKey("TagID")]
    public Tag Tag { get; set; }
}
