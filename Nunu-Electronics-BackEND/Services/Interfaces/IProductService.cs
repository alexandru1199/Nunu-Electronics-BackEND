using Nunu_Electronics_BackEND.DTOs;
using Nunu_Electronics_BackEND.Entities;

namespace Nunu_Electronics_BackEND.Services.Interfaces
{
    public interface IProductService
    {
        Task<IEnumerable<Product>> GetAllProductsAsync();
        Task<Product> GetProductByIdAsync(int id);
        Task AddProductAsync(ProductCreateDto dto);
        Task UpdateProductAsync(Product product);
        Task DeleteProductAsync(int id);
        Task<IEnumerable<Product>> GetProductsByTagIdAsync(int tagId);
    }
}
