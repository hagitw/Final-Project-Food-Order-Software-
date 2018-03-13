namespace Final_Project.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class add3 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ConnectUs",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        Name = c.String(),
                        Subject = c.String(),
                        Email = c.String(),
                        Phone = c.String(),
                        Massage = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.ConnectUs");
        }
    }
}
