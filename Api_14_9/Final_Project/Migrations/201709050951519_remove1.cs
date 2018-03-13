namespace Final_Project.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class remove1 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Orders", "Price");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Orders", "Price", c => c.Int(nullable: false));
        }
    }
}
