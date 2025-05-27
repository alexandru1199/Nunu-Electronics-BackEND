using Nunu_Electronics_BackEND.DTOs;
using Nunu_Electronics_BackEND.Entities;

namespace Nunu_Electronics_BackEND.Services.Interfaces
{
    public interface IOrderService
    {
        Task<Order> CreateOrderAsync(OrderCreatedDto orderDto); // Corect semnătura
        Task<IEnumerable<Order>> GetAllOrdersAsync();
        Task<IEnumerable<Order>> GetOrdersByUserIdAsync(long userId);
    }
}
