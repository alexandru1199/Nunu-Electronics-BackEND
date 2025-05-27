public class ProductCreateDto
{
    public string ProductName { get; set; }
    public decimal Price { get; set; }
    public int StockQuantity { get; set; }
    public string Description { get; set; }
    public string DetailedDescription { get; set; }
    public string Image { get; set; }
    public int TagId { get; set; }
    public DateTime CreatedDate { get; set; }  // Adăugat createdDate
}
