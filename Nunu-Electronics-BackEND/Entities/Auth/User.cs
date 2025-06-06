﻿using System.Text.Json.Serialization;

namespace Nunu_Electronics_BackEND.Entities.Login
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string PasswordHash { get; set; }
        public int RoleId { get; set; }

        public Role Role { get; set; }
        [JsonIgnore]
        public ICollection<Order> Orders { get; set; }
        public string? ProfileImage { get; set; }
    }
}
