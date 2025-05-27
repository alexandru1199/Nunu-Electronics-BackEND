using Nunu_Electronics_BackEND.Infrastructure;
using Nunu_Electronics_BackEND.Infrastructure.Interfaces;
using Nunu_Electronics_BackEND.Services.Interfaces;

namespace Nunu_Electronics_BackEND.Services
{
    public class TagService:ITagService
    {
        private readonly IUnitOfWork _unitOfWork;

        public TagService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public async Task<IEnumerable<Tag>> GetAllTagsAsync()
        {
            return await _unitOfWork.Repository<Tag>()
                .GetAllAsync();
        }
    }
}
