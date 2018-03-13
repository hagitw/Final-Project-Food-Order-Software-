namespace Final_Project.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddDateToOrderDetails : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.OrderDetails", "Time", c => c.String());
            AddColumn("dbo.OrderDetails", "Date", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.OrderDetails", "Date");
            DropColumn("dbo.OrderDetails", "Time");
        }
    }
}
