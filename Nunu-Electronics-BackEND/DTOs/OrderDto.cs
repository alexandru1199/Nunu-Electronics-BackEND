namespace Nunu_Electronics_BackEND.DTOs
{
    public class OrderDto
    {
        public int UserId { get; set; }
        public decimal TotalPrice { get; set; }
        public string PaymentStatus { get; set; }
        public string ShippingAddress { get; set; } // Add the ShippingAddress property
        public List<OrderProductDto> Products { get; set; }
    }
}
