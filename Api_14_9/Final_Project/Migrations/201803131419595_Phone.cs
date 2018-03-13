namespace Final_Project.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Phone : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.ConnectUs", "Phone");
        }
        
        public override void Down()
        {
            AddColumn("dbo.ConnectUs", "Phone", c => c.String());
        }
    }
}
