using Nunu_Electronics_BackEND.DTOs;
using Nunu_Electronics_BackEND.Entities;
using Nunu_Electronics_BackEND.Entities.Login;
using Nunu_Electronics_BackEND.Infrastructure.Interfaces;
using Nunu_Electronics_BackEND.Services.Interfaces;

namespace Nunu_Electronics_BackEND.Services
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork _unitOfWork;

        // Imaginea implicită
        private const string DefaultProfileImageUrl = "https://cdn-0001.qstv.on.epicgames.com/lSxoPBCDpPvtmkeBQD/image/landscape_comp.jpeg";

        public UserService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<bool> UpdateProfileImageAsync(ProfileImageDto dto)
        {
            var userRepository = _unitOfWork.Repository<User>();

            var user = await userRepository.GetByIdAsync(dto.UserId);
            if (user == null)
                return false;

            // Actualizează imaginea de profil a utilizatorului
            user.ProfileImage = dto.ImageBase64;

            userRepository.Update(user);
            await _unitOfWork.SaveChangesAsync();

            return true;
        }

        public async Task<string?> GetProfileImageAsync(int userId)
        {
            var userRepository = _unitOfWork.Repository<User>();

            var user = await userRepository.GetByIdAsync(userId);
            if (user == null)
            {
                return null; // Dacă utilizatorul nu este găsit, returnează null
            }

            // Dacă utilizatorul nu are o imagine personalizată, returnează imaginea implicită
            if (string.IsNullOrEmpty(user.ProfileImage))
            {
                return DefaultProfileImageUrl;
            }

            return user.ProfileImage;
        }
    }
}
