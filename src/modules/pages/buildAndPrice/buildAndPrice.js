import { LightningElement } from "lwc";

const CRV_VARIANTS = [
  {
    variant: "VTi",
    price: 38900,
    formattedPrice: "$38,900",
    fuelConsumption: 40,
    seatingCapacity: 5,
    alloyWheels: 17,
    checked: true,
    imageName: "crystal_black",
  },
  {
    variant: "VTi 7",
    formattedPrice: "$42,900",
    price: 42900,
    fuelConsumption: 44,
    seatingCapacity: 7,
    alloyWheels: 17,
    imageName: "crystal_black",
  },
  {
    variant: "VTi X",
    formattedPrice: "$45,900",
    price: 45900,
    fuelConsumption: 48,
    seatingCapacity: 5,
    alloyWheels: 18,
    imageName: "crystal_black",
  },
  {
    variant: "VTi LX AWD",
    formattedPrice: "$53,600",
    price: 53600,
    fuelConsumption: 55,
    seatingCapacity: 5,
    alloyWheels: 19,
    imageName: "crystal_black",
  },
];

export default class BuildAndPrice extends LightningElement {
  crvVariants = CRV_VARIANTS;
  selectedVariant = CRV_VARIANTS[0];

  // This is the event handler for the selection event
  selectionHandler(event) {
    console.log('handleSelection selected ', event.detail.selected);
    console.log('handleSelection variant ', event.detail.variant);
  }
}
