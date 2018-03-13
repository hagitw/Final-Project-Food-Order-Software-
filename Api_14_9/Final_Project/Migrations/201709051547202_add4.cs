namespace Final_Project.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class add4 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Dishes", "category", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Dishes", "category");
        }
    }
}
