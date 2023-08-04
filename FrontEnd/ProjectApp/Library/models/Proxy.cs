// using System;
// using MySql.Data.MySqlClient;
// using System.Data;

// namespace Library
// {
//     public class Proxy
//     {
//         public MySqlConnection connection;
//         public string connectionString = "server=localhost;database=project;user=root;password=1111";

//         public Proxy()
//         {
//             connection = new MySqlConnection(connectionString);
//         }

//         public void OpenConnection()
//         {
//             try
//             {
//                 connection.Open();
//                 Console.WriteLine("Database connection established.");
//             }
//             catch (Exception ex)
//             {
//                 Console.WriteLine("Error connecting to the database: " + ex.Message);
//             }
//         }

//         public void CloseConnection()
//         {
//             try
//             {
//                 connection.Close();
//                 Console.WriteLine("Database connection closed.");
//             }
//             catch (Exception ex)
//             {
//                 Console.WriteLine("Error closing the database connection: " + ex.Message);
//             }
//         }

//         public ConnectionState GetConnectionState()
//         {
//             return connection.State;
//         }
//     }
// }
