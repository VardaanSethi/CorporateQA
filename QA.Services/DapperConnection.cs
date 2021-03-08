using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;


namespace QA.Services
{
    public class DapperConnection
    {
        public readonly IDbConnection dapperDb;
        public DapperConnection(IConfiguration configuration)
        {
            dapperDb = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
        }
    }
}
