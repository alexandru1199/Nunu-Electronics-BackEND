namespace Nunu_Electronics_BackEND.Services.Interfaces
{
    public interface ITagService
    {
         public Task<IEnumerable<Tag>> GetAllTagsAsync();
    }
}
