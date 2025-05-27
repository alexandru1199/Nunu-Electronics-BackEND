using Nunu_Electronics_BackEND.DTOs;
using Nunu_Electronics_BackEND.Entities;
using Nunu_Electronics_BackEND.Infrastructure.Interfaces;

public class CouponService : ICouponService
{
    private readonly IUnitOfWork _unitOfWork;

    public CouponService(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }
    public async Task<decimal> MarkCouponAsUsedAsync(long userId, string couponCode)
    {
        var coupons = await _unitOfWork.Repository<Coupon>().GetAllAsync();

        var coupon = coupons.FirstOrDefault(c =>
            c.UserId == userId && c.Code == couponCode && !c.IsUsed);

        if (coupon == null)
            throw new Exception("Coupon not found or already used.");

        coupon.IsUsed = true;
        decimal discount = coupon.DiscountValue;

        await _unitOfWork.SaveChangesAsync();

        // Returnează discount-ul
        return discount;
    }


    public async Task<Coupon> CreateCouponAsync(CouponCreateDTO couponDto)
    {
        var coupon = new Coupon
        {
            UserId = couponDto.UserId,
            DiscountValue = couponDto.DiscountValue,
            ExpirationDate = couponDto.ExpirationDate,
            Code = GenerateCouponCode(),
            CreatedAt = DateTime.UtcNow,
            IsUsed = false
        };

        await _unitOfWork.Repository<Coupon>().AddAsync(coupon);
        await _unitOfWork.SaveChangesAsync();

        return coupon;
    }

    public async Task<IEnumerable<Coupon>> GetCouponsByUserIdAsync(long userId)
    {
        var coupons = await _unitOfWork.Repository<Coupon>().GetAllAsync();

        var filteredCoupons = coupons
            .Where(c => c.UserId == userId && !c.IsUsed)
            .ToList();

        if (filteredCoupons == null || !filteredCoupons.Any())
        {
            throw new Exception("No coupons found for this user.");
        }

        return filteredCoupons;
    }



    private string GenerateCouponCode()
    {
        var guid = Guid.NewGuid();
        var couponCode = guid.ToString("N").Substring(0, 12).ToUpper();
        return couponCode;
    }
}
