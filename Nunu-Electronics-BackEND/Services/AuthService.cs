using Microsoft.IdentityModel.Tokens;
using Nunu_Electronics_BackEND.DTOs;
using Nunu_Electronics_BackEND.Entities.Login;
using Nunu_Electronics_BackEND.Infrastructure.Interfaces;
using Nunu_Electronics_BackEND.Services.Interfaces;

using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
namespace Nunu_Electronics_BackEND.Services
{
    public class AuthService:IAuthService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IConfiguration _configuration;

        public AuthService(IUnitOfWork unitOfWork, IConfiguration configuration)
        {
            _unitOfWork = unitOfWork;
            _configuration = configuration;
        }

        public async Task<string> RegisterAsync(RegisterRequest request)
        {
            var userRepository = _unitOfWork.Repository<User>();

            var existingUser = (await userRepository.GetAllAsync())
                .FirstOrDefault(u => u.UserName == request.UserName);

            if (existingUser != null)
                return "Username already taken.";

            string hashedPassword = BCrypt.Net.BCrypt.HashPassword(request.Password);

            var newUser = new User
            {
                UserName = request.UserName,
                PasswordHash = hashedPassword,
                RoleId = request.RoleId
            };

            await userRepository.AddAsync(newUser);
            await _unitOfWork.SaveChangesAsync();

            return "User registered successfully!";
        }

        public async Task<string> LoginAsync(LoginRequest request)
        {
            var userRepository = _unitOfWork.Repository<User>();

            var user = (await userRepository.GetAllAsync())
                .FirstOrDefault(u => u.UserName == request.UserName);

            if (user == null || !BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash))
                return "Invalid username or password.";

            return GenerateJwtToken(user);
        }

        private string GenerateJwtToken(User user)
        {
            var jwtSettings = _configuration.GetSection("JwtSettings");
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["Key"]));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>
    {
        new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()), // Corect
        new Claim(ClaimTypes.Name, user.UserName),  // Corect
        new Claim(ClaimTypes.Role, user.RoleId.ToString()),  // Corect
        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()) // Corect
    };

            var token = new JwtSecurityToken(
                issuer: jwtSettings["Issuer"],
                audience: jwtSettings["Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(Convert.ToDouble(jwtSettings["ExpireMinutes"])),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

    }
}