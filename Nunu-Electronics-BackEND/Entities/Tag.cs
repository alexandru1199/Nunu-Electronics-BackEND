using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Nunu_Electronics_BackEND.Entities;

public class Tag
{
    [Key]
    public int TagID{ get; set; }
    public string TagName { get; set; }
    [JsonIgnore]
    public ICollection<Product> Products { get; set; }
}