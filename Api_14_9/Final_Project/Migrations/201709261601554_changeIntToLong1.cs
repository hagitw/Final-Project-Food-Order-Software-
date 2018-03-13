namespace Final_Project.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changeIntToLong1 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Orders", "CustomerId", c => c.Long(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Orders", "CustomerId", c => c.Int(nullable: false));
        }
    }
}
