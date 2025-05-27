namespace Nunu_Electronics_BackEND.Entities
{
    public class EmailRequest
    {
        public string To { get; set; } = string.Empty;
        public string Subject { get; set; } = string.Empty;
        public string TextContent { get; set; } = string.Empty;
        public string HtmlContent { get; set; } = string.Empty;
    }

}
