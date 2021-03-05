using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;


namespace QA.Services
{
    public class DapperConnection
    {
        public readonly IDbConnection dapperConnection;
        public DapperConnection(IConfiguration configuration)
        {
            dapperConnection = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
        }
    }
}
