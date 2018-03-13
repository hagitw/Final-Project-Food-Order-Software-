namespace Final_Project.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class complintkk : DbMigration
    {
        public override void Up()
        {
            DropTable("dbo.Complaints");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Complaints",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        CustomerId = c.Int(nullable: false),
                        Reason = c.String(),
                        Treatment = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
    }
}
