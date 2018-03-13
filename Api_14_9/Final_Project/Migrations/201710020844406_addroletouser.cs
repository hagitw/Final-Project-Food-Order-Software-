namespace Final_Project.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addroletouser : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Users", "Permission", c => c.String());
            DropColumn("dbo.Users", "LastName");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Users", "LastName", c => c.String());
            DropColumn("dbo.Users", "Permission");
        }
    }
}
