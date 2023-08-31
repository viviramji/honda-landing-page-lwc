import { LightningElement, api } from "lwc";

export default class RangeSelection extends LightningElement {
  @api variants = [];

  selectHandleChange(event) {
    const { value } = event.target;
    console.log(value);

    if (value) {
      let variantSelected = this.variants.find(
        (item) => item.variant === value
      );
      this.dispatchEvent(
        new CustomEvent("selection", {
          detail: {
            selected: variantSelected,
            variant: value,
          },
        })
      );
    }
  }
}
