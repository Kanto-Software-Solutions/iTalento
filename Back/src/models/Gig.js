class Gig {
  constructor(idGig, name, description, idCategory, idUser, price, deliveryDays){
    this.idGig = idGig;
    this.name = name;
    this.description = description;
    this.createdAt = Date.now();
    this.idCategory = idCategory;
    this.idUser = idUser;
    this.price = price;
    this.deliveryDays = deliveryDays;
  }
}

exports.Gig = Gig;