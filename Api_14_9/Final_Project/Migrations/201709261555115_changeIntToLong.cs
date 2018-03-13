namespace Final_Project.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changeIntToLong : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.OrderDetails", "CustomerId", c => c.Long(nullable: false));
            AlterColumn("dbo.OrderDetails", "OrderId", c => c.Long(nullable: false));
            AlterColumn("dbo.OrderDetails", "DishId", c => c.Long(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.OrderDetails", "DishId", c => c.Int(nullable: false));
            AlterColumn("dbo.OrderDetails", "OrderId", c => c.Int(nullable: false));
            AlterColumn("dbo.OrderDetails", "CustomerId", c => c.Int(nullable: false));
        }
    }
}
