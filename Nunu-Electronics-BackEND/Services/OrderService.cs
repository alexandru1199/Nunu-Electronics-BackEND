using Microsoft.EntityFrameworkCore;
using Nunu_Electronics_BackEND.DTOs;
using Nunu_Electronics_BackEND.Entities;
using Nunu_Electronics_BackEND.Services.Interfaces;

namespace Nunu_Electronics_BackEND.Services
{
    public class OrderService : IOrderService
    {
        private readonly ApplicationDbContext _context;

        public OrderService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Order> CreateOrderAsync(OrderCreatedDto orderDto)
        {
            // Retrieve the products from the DB based on the provided product IDs
            var products = await _context.Products
                .Where(p => orderDto.Products.Select(op => op.ProductId).Contains(p.ProductID))
                .ToListAsync();

            // Check if all products exist in the database
            if (products.Count != orderDto.Products.Count)
            {
                throw new Exception("One or more products not found.");
            }

            decimal totalPrice = 0;
            // Loop through the products and calculate the total price and stock adjustments
            foreach (var item in orderDto.Products)
            {
                var product = products.FirstOrDefault(p => p.ProductID == item.ProductId);
                if (product != null)
                {
                    // Check for stock availability
                    if (product.StockQuantity < item.Quantity)
                    {
                        throw new Exception($"Not enough stock for product {product.ProductName}.");
                    }

                    // Update the total price and reduce the stock quantity
                    totalPrice += product.Price * item.Quantity;
                    product.StockQuantity -= item.Quantity;
                }
            }

            // Set a default ShippingAddress if it's not provided
            string shippingAddress = string.IsNullOrEmpty(orderDto.ShippingAddress) ? "Raiul" : orderDto.ShippingAddress;

            // Create the new order object
            var order = new Order
            {
                UserId = orderDto.UserId,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
                PurchaseDate = DateTime.UtcNow,
                TotalPrice = totalPrice,
                PaymentStatus = "Pending",
                ShippingAddress = shippingAddress,  // Add ShippingAddress with default value if null
                OrderProducts = orderDto.Products.Select(op => new OrderProduct
                {
                    ProductId = op.ProductId,
                    Quantity = op.Quantity
                }).ToList()
            };

            // Add the new order to the database and save changes
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            // Return the created order
            return order;
        }

        // Get all orders, including related products
        public async Task<IEnumerable<Order>> GetAllOrdersAsync()
        {
            return await _context.Orders
                .Include(o => o.OrderProducts)
                .ThenInclude(op => op.Product)
                .ToListAsync();
        }

        // Get orders by userId, including related products
        public async Task<IEnumerable<Order>> GetOrdersByUserIdAsync(long userId)
        {
            var orders = await _context.Orders
                .Where(o => o.UserId == userId)
                .Include(o => o.OrderProducts)
                .ThenInclude(op => op.Product)
                .ToListAsync();

            // Check if orders exist for the user
            if (orders == null || !orders.Any())
            {
                throw new Exception("No orders found for this user.");
            }

            return orders;
        }
    }
}
