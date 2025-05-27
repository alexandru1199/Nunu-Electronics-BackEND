using Microsoft.AspNetCore.Mvc;
using Nunu_Electronics_BackEND.DTOs;
using Nunu_Electronics_BackEND.Services.Interfaces;

namespace Nunu_Electronics_BackEND.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        /// <summary>
        /// Updatează imaginea de profil pentru un utilizator.
        /// </summary>
        [HttpPost("profile-image")]
        public async Task<IActionResult> UploadProfileImage([FromBody] ProfileImageDto dto)
        {
            try
            {
                var result = await _userService.UpdateProfileImageAsync(dto);
                if (!result)
                    return NotFound(new { message = "User not found" });

                return Ok(new { message = "Profile image updated successfully" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        /// <summary>
        /// Returnează imaginea de profil în format Base64 pentru un utilizator.
        /// </summary>
        [HttpGet("{userId}/profile-image")]
        public async Task<IActionResult> GetProfileImage(int userId)
        {
            try
            {
                var image = await _userService.GetProfileImageAsync(userId);
                if (image == null)
                    return NotFound(new { message = "Profile image not found" });

                return Ok(new { imageBase64 = image });
            }
            catch (Exception ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }
    }
}
