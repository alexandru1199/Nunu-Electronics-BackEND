using Nunu_Electronics_BackEND.DTOs;
using Nunu_Electronics_BackEND.Entities;
using Nunu_Electronics_BackEND.Infrastructure.Interfaces;
using Nunu_Electronics_BackEND.Services.Interfaces;


public class ProductService : IProductService
{
    private readonly IUnitOfWork _unitOfWork;

    public ProductService(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    // Get all products without including Tags (since you only have one tag per product)
    public async Task<IEnumerable<Product>> GetAllProductsAsync()
    {
        return await _unitOfWork.Repository<Product>()
            .GetAllAsync();
    }

    // Get a product by its ID, also without including Tags if unnecessary
    public async Task<Product> GetProductByIdAsync(int id)
    {
        return await _unitOfWork.Repository<Product>()
            .GetByIdAsync(id);
    }

    // Add a product, ensuring the TagID is set correctly
    public async Task AddProductAsync(ProductCreateDto dto)
    {
        var product = new Product
        {
            ProductName = dto.ProductName,
            Price = dto.Price,
            StockQuantity = dto.StockQuantity,  
            Image = dto.Image,
            Description = dto.Description,
            DetailedDescription = dto.DetailedDescription,
            TagID = dto.TagId,
            CreatedDate=dto.CreatedDate
        };

        await _unitOfWork.Repository<Product>().AddAsync(product);
        await _unitOfWork.SaveChangesAsync();
    }

    // Update a product, ensuring the TagID is correctly managed
    public async Task UpdateProductAsync(Product product)
    {
        _unitOfWork.Repository<Product>().Update(product);
        await _unitOfWork.SaveChangesAsync();
    }

    // Delete a product by its ID
    public async Task DeleteProductAsync(int id)
    {
        var product = await _unitOfWork.Repository<Product>().GetByIdAsync(id);
        if (product != null)
        {
            _unitOfWork.Repository<Product>().Delete(product);
            await _unitOfWork.SaveChangesAsync();
        }
    }
    public async Task<IEnumerable<Product>> GetProductsByTagIdAsync(int tagId)
    {
        // Obținem toate produsele
        var products = await _unitOfWork.Repository<Product>().GetAllAsync();

        // Filtrăm produsele după TagID
        return products.Where(product => product.TagID == tagId);
    }

}
