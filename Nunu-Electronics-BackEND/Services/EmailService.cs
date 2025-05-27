using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Nunu_Electronics_BackEND.Entities;
using Nunu_Electronics_BackEND.Services.Interfaces;

namespace Nunu_Electronics_BackEND.Services
{
    public class EmailService : IEmailService
    {
        // Detalii pentru serverul SMTP Brevo
        private const string SmtpServer = "smtp-relay.brevo.com"; // Serverul SMTP
        private const int SmtpPort = 587; // Portul pentru conexiuni SMTP
        private const string SmtpUser = "8c715a001@smtp-brevo.com"; // Username-ul pentru SMTP (de obicei, un email SMTP generat)
        private const string SmtpPassword = "Fr1O3CDUNzTLXPpv"; // Master Password-ul sau parola asociată contului SMTP

        public async Task SendEmailAsync(EmailRequest request)
        {
            try
            {
                var fromAddress = new MailAddress("nunuelectronics2@gmail.com", "Nunu Electronics");
                var toAddress = new MailAddress(request.To);

                using (var smtpClient = new SmtpClient(SmtpServer))
                {
                    smtpClient.Port = SmtpPort;
                    smtpClient.Credentials = new NetworkCredential(SmtpUser, SmtpPassword);
                    smtpClient.EnableSsl = true;

                    using (var mailMessage = new MailMessage(fromAddress, toAddress)
                    {
                        Subject = request.Subject,
                        Body = request.TextContent, // Versiunea text
                        IsBodyHtml = !string.IsNullOrEmpty(request.HtmlContent), // Setează corect dacă este HTML
                        BodyEncoding = System.Text.Encoding.UTF8
                    })
                    {
                        // Dacă există conținut HTML, îl adăugăm în AlternateView
                        if (!string.IsNullOrEmpty(request.HtmlContent))
                        {
                            var htmlView = AlternateView.CreateAlternateViewFromString(request.HtmlContent, null, "text/html");
                            mailMessage.AlternateViews.Add(htmlView);
                        }

                        await smtpClient.SendMailAsync(mailMessage); // Trimiterea emailului
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception($"An error occurred while sending the email: {ex.Message}");
            }
        }
    }
}