using Nunu_Electronics_BackEND.Entities;

namespace Nunu_Electronics_BackEND.Services.Interfaces
{
    public interface IEmailService
    {
        Task SendEmailAsync(EmailRequest request);
    }
}
