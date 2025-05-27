namespace Nunu_Electronics_BackEND.DTOs
{
    public class OrderCreatedDto
    {
        public int UserId { get; set; }
        public List<OrderProductDto> Products { get; set; }
        public string? ShippingAddress { get;  set; }
    }
}
