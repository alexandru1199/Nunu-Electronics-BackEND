namespace Nunu_Electronics_BackEND.Entities
{
    public class Coupon
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Code { get; set; }
        public decimal DiscountValue { get; set; }
        public bool IsUsed { get; set; }
        public DateTime? ExpirationDate { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
