using Nunu_Electronics_BackEND.DTOs;
using Nunu_Electronics_BackEND.Entities;

public interface ICouponService
{
    Task<Coupon> CreateCouponAsync(CouponCreateDTO couponDto);
    Task<IEnumerable<Coupon>> GetCouponsByUserIdAsync(long userId);
    Task<decimal> MarkCouponAsUsedAsync(long userId, string couponCode);

}