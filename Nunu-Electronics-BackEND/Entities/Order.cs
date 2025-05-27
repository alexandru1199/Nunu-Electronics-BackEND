using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Nunu_Electronics_BackEND.Entities;
using Nunu_Electronics_BackEND.Entities.Login;

public class Order
{
    [Key]
    public int Id { get; set; }

    [Column("user_id")]
    public int UserId { get; set; }

    [Column("total_price")]
    public decimal TotalPrice { get; set; }

    [Column("purchase_date")]
    public DateTime PurchaseDate { get; set; }

    [Column("payment_status")]
    public string PaymentStatus { get; set; }

    [Column("shipping_address")]
    public string ShippingAddress { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at")]
    public DateTime UpdatedAt { get; set; }

    // Relația cu produsele
    [JsonIgnore]
    public List<OrderProduct> OrderProducts { get; set; }
    [JsonIgnore]
    public User User { get; set; }
}
