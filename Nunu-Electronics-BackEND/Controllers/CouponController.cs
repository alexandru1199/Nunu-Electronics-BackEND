using Microsoft.AspNetCore.Mvc;
using Nunu_Electronics_BackEND.DTOs;
using Nunu_Electronics_BackEND.Entities;
using Nunu_Electronics_BackEND.Services.Interfaces;
using System;
using System.Threading.Tasks;

namespace Nunu_Electronics_BackEND.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CouponsController : ControllerBase
    {
        private readonly ICouponService _couponService;

        public CouponsController(ICouponService couponService)
        {
            _couponService = couponService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateCoupon([FromBody] CouponCreateDTO dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var coupon = await _couponService.CreateCouponAsync(dto);

                // Modificăm aici pentru a folosi GetCouponsByUserId
                return CreatedAtAction(nameof(GetCouponsByUserId), new { userId = coupon.UserId }, coupon);
            }
            catch (Exception ex)
            {
                // Aici se prinde excepția de la cod duplicat dacă apare
                return Conflict("A coupon with the same code already exists.");
            }
        }


        [HttpGet("{userId}")]
        public async Task<IActionResult> GetCouponsByUserId(long userId)
        {
            try
            {
                var coupons = await _couponService.GetCouponsByUserIdAsync(userId);
                if (coupons == null || !coupons.Any())
                    return NotFound("No coupons found for this user.");

                return Ok(coupons);
            }
            catch (Exception ex)
            {
                // Gestionarea erorilor în cazul în care nu s-au găsit cupoane pentru utilizator
                return NotFound(ex.Message);
            }
        }

        [HttpPut("use")]
        public async Task<IActionResult> UseCoupon([FromQuery] long userId, [FromQuery] string couponCode)
        {
            try
            {
                // Apelăm serviciul pentru a marca cuponul ca folosit și pentru a obține discount-ul
                decimal discount = await _couponService.MarkCouponAsUsedAsync(userId, couponCode);

                // Returnăm mesajul și discount-ul
                return Ok(new { message = "Cuponul a fost marcat ca folosit.", discount });
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }


    }
}