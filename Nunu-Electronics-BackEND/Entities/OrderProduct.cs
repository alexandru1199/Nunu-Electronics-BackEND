using System.Text.Json.Serialization;
using Nunu_Electronics_BackEND.Entities;

public class OrderProduct
{
    public int OrderId { get; set; }
    public int ProductId { get; set; }
    public decimal ItemPrice { get; set; }
    public int Quantity { get; set; }
    [JsonIgnore]
    public Order Order { get; set; }
    [JsonIgnore]
    public Product Product { get; set; }
}