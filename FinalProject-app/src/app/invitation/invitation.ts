export class Invitarion {
    constructor(_Id: number, _CustomerId: number, _OrderId: number,
        _Dish: Dish,
         _Count:number,
        _Time: string,
        _Date: string)
         {
        this.Id = _Id;
        this.CustomerId = _CustomerId;
        this.OrderId = _OrderId;
        this.Dish = _Dish;
         this.Count = _Count;
        this.Time = _Time;
        this.Date = _Date;

    }
    Id: number
    CustomerId: number;
    OrderId: number
    Dish: Dish;
    Count:number;
    Time: string;
    Date: string;
}

export class Dish {
    constructor(_Id: number,
        _Name: string,
        _Price: number,
       ) {
        this.Id = _Id;
        this.Name = _Name;
        this.Price = _Price;
       ;
    }

    Id: number;
    Name: string;
    Price: number;
}