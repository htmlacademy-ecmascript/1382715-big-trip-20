export default class DetailEventModel {
  constructor({
    pointId,
    basePrice,
    dateFrom,
    dateTo,
    isFavorite,
    type,
    destination,
    offers
  }) {
    this.pointId = pointId;
    this.basePrice = basePrice;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.isFavorite = isFavorite;
    this.type = type;
    this.destination = destination;
    this.offers = offers;
  }

  getPointId() {
    return this.pointId;
  }

  getBasePrice() {
    return this.basePrice;
  }

  getDateFrom() {
    return this.dateFrom;
  }

  getDateTo() {
    return this.dateTo;
  }

  isFavorite() {
    return this.isFavorite;
  }

  getType() {
    return this.type;
  }

  getDestination() {
    return this.destination;
  }

  getOffers() {
    return this.offers;
  }
}
