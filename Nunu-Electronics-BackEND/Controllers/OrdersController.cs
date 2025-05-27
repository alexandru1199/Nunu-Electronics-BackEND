using Microsoft.AspNetCore.Mvc;
using Nunu_Electronics_BackEND.DTOs;
using Nunu_Electronics_BackEND.Services.Interfaces;
using Nunu_Electronics_BackEND.Entities;

namespace Nunu_Electronics_BackEND.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrdersController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        // POST: api/orders
        [HttpPost]
        public async Task<IActionResult> CreateOrderAsync([FromBody] OrderCreatedDto orderDto)
        {
            try
            {
                var createdOrder = await _orderService.CreateOrderAsync(orderDto);

                // Returnează răspunsul cu statusul 201 Created
                return Ok(createdOrder);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }


        // GET: api/orders/user/{userId}
        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetOrdersByUserIdAsync(long userId)
        {
            try
            {
                var orders = await _orderService.GetOrdersByUserIdAsync(userId);
                return Ok(orders);
            }
            catch (Exception ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }
    }
}
