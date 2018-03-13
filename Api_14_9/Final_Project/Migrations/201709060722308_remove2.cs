namespace Final_Project.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class remove2 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.OrderDetails", "Amount");
        }
        
        public override void Down()
        {
            AddColumn("dbo.OrderDetails", "Amount", c => c.Int(nullable: false));
        }
    }
}
