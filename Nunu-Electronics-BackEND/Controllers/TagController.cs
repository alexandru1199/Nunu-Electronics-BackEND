using Microsoft.AspNetCore.Mvc;
using Nunu_Electronics_BackEND.Services;
using Nunu_Electronics_BackEND.Services.Interfaces;

namespace Nunu_Electronics_BackEND.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : ControllerBase
    {
        private readonly ITagService _tagService;
        public TagController(ITagService tagService)
        {
            _tagService = tagService;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tag>>> GetAllTags()
        {
            var tags = await _tagService.GetAllTagsAsync();
            return Ok(tags);
        }
    }
}
