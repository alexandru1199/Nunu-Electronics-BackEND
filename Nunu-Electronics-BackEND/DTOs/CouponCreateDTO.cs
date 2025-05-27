namespace Nunu_Electronics_BackEND.DTOs
{
    public class CouponCreateDTO
    {
        public int UserId { get; set; }
        public decimal DiscountValue { get; set; }
        public DateTime? ExpirationDate { get; set; }
    }
}
