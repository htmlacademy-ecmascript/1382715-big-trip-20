export default class DetailEventModel {
  constructor({
    pointId,
    basePrice,
    dateFrom,
    dateTo,
    isFavorite,
    type,
    destination,
    allOffers,
    selectedOffersId
  }) {
    this.pointId = pointId;
    this.basePrice = basePrice;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.isFavorite = isFavorite;
    this.type = type;
    this.destination = destination;
    this.allOffers = allOffers;
    this.selectedOffersId = selectedOffersId;
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

  getAllOffers() {
    return this.allOffers;
  }

  getSelectedOffersId() {
    return this.selectedOffersId;
  }

  getSelectedOffers() {
    const selectedOffers = [];
    this.allOffers.forEach((offer) => {
      if (this.selectedOffersId.includes(offer.id)) {
        selectedOffers.push(offer);
      }
    });
    return selectedOffers;
  }
}
