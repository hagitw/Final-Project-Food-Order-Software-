namespace Final_Project.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changeIntToLong2 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Dishes", "chefId", c => c.Long(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Dishes", "chefId", c => c.Int(nullable: false));
        }
    }
}
