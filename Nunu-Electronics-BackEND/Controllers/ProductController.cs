using Microsoft.AspNetCore.Mvc;
using Nunu_Electronics_BackEND.DTOs;
using Nunu_Electronics_BackEND.Entities;
using Nunu_Electronics_BackEND.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

[ApiController]
[Route("[controller]")]
public class ProductController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductController(IProductService productService)
    {
        _productService = productService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetAllProducts()
    {
        var products = await _productService.GetAllProductsAsync();
        return Ok(products);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProductById(int id)
    {
        var product = await _productService.GetProductByIdAsync(id);
        if (product == null)
            return NotFound();

        return Ok(product);
    }

    
    [HttpPost]
    public async Task<IActionResult> AddProduct([FromBody] ProductCreateDto dto)
    {
        // Adăugăm produsul folosind DTO-ul primit
        await _productService.AddProductAsync(dto);

        // Răspuns JSON cu mesajul de succes
        return Ok(new { message = $"Produsul {dto.ProductName} a fost adăugat cu succes!" });
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateProduct(int id, [FromBody] Product product)
    {
        if (id != product.ProductID)
            return BadRequest();

        await _productService.UpdateProductAsync(product);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProduct(int id)
    {
        await _productService.DeleteProductAsync(id);
        return NoContent();
    }
    [HttpGet("products/tag/{tagId}")]
    public async Task<IActionResult> GetProductsByTagId(int tagId)
    {
        var products = await _productService.GetProductsByTagIdAsync(tagId);
        return Ok(products);
    }
}
