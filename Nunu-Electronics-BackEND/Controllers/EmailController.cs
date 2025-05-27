using Microsoft.AspNetCore.Mvc;
using Nunu_Electronics_BackEND.Entities;
using Nunu_Electronics_BackEND.Services.Interfaces;

namespace Nunu_Electronics_BackEND.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmailController : ControllerBase
    {
        private readonly IEmailService _emailService;

        public EmailController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost("send")]
        public async Task<IActionResult> SendEmail([FromBody] EmailRequest request)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                await _emailService.SendEmailAsync(request);
                return Ok(new { message = "Email trimis cu succes." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }
    }
}
