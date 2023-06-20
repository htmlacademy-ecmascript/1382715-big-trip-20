export default class DetailEventModel {
  constructor({
    id,
    basePrice,
    dateFrom,
    dateTo,
    isFavorite,
    type,
    destination,
    allOffers,
    selectedOffersId
  }) {
    this.id = id;
    this.basePrice = basePrice;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.isFavorite = isFavorite;
    this.type = type;
    this.destination = destination;
    this.allOffers = allOffers;
    this.selectedOffersId = selectedOffersId;
  }

  getId() {
    return this.id;
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

function copyDetailEventModel({
  detailEventModel,
  id = null,
  basePrice = null,
  dateFrom = null,
  dateTo = null,
  isFavorite = null,
  type = null,
  destination = null,
  allOffers = null,
  selectedOffersId = null
}) {
  return new DetailEventModel({
    id: id !== null ? id : detailEventModel.getId(),
    basePrice: basePrice !== null ? basePrice : detailEventModel.getBasePrice(),
    dateFrom: dateFrom !== null ? dateFrom : detailEventModel.getDateFrom(),
    dateTo: dateTo !== null ? dateTo : detailEventModel.getDateTo(),
    isFavorite: isFavorite !== null ? isFavorite : detailEventModel.isFavorite(),
    type: type !== null ? type : detailEventModel.getType(),
    destination: destination !== null ? destination : detailEventModel.getDestination(),
    allOffers: allOffers !== null ? allOffers : detailEventModel.getAllOffers(),
    selectedOffersId: selectedOffersId !== null ? selectedOffersId : detailEventModel.getSelectedOffersId(),
  });
}

export {copyDetailEventModel};
