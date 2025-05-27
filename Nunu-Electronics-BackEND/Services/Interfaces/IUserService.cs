using Nunu_Electronics_BackEND.DTOs;

namespace Nunu_Electronics_BackEND.Services.Interfaces
{
    public interface IUserService
    {
        Task<bool> UpdateProfileImageAsync(ProfileImageDto dto);
        Task<string?> GetProfileImageAsync(int userId);
    }
}
