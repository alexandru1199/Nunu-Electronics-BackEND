using Nunu_Electronics_BackEND.DTOs;

namespace Nunu_Electronics_BackEND.Services.Interfaces
{
    public interface IAuthService
    {
        Task<string> RegisterAsync(RegisterRequest request);
        Task<string> LoginAsync(LoginRequest request);
    }
}
