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

// Define the colors available for the car
const COLORS = [
  { label: "Ignite Red (Metallic)", value: "ignite_red", checked: true },
  { label: "Brilliant Sporty Blue", value: "sporty_blue" },
  { label: "Crystal Black", value: "crystal_black" },
  { label: "Platinum White (Pearlescent)", value: "platinum_white" },
];

export default class BuildAndPrice extends LightningElement {
  crvVariants = CRV_VARIANTS;
  selectedVariant = CRV_VARIANTS[0];
  colorsList = COLORS;

  // This is the event handler for the selection event
  selectionHandler(event) {
    console.log("handleSelection selected ", event.detail.selected);
    console.log("handleSelection variant ", event.detail.variant);
  }

  // This is the event handler for the color selection event
  colorSelectionHandler(event) {
    console.log("colorSelectionHandler selected value ", event.detail);
  }
}
