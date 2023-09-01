import { LightningElement, api } from "lwc";
export default class PriceFooter extends LightningElement {
  @api price;

  get formattedPrice() {
    return this.formatter(this.price);
  }

  /*
   * This method formats the price to a currency format
   *
   * @param {*} value
   * @return {*}
   * @memberof PriceFooter
   */
  formatter(value) {
    if (value) {
      return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(value);
    }
    return undefined;
  }
}
