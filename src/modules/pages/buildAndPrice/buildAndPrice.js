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
    imageName: "ignite_red",
  },
  {
    variant: "VTi 7",
    formattedPrice: "$42,900",
    price: 42900,
    fuelConsumption: 44,
    seatingCapacity: 7,
    alloyWheels: 17,
    imageName: "ignite_red",
  },
  {
    variant: "VTi X",
    formattedPrice: "$45,900",
    price: 45900,
    fuelConsumption: 48,
    seatingCapacity: 5,
    alloyWheels: 18,
    imageName: "ignite_red",
  },
  {
    variant: "VTi LX AWD",
    formattedPrice: "$53,600",
    price: 53600,
    fuelConsumption: 55,
    seatingCapacity: 5,
    alloyWheels: 19,
    imageName: "ignite_red",
  },
];

// Define the colors available for the car
const COLORS = [
  { label: "Ignite Red (Metallic)", value: "ignite_red", checked: true },
  { label: "Brilliant Sporty Blue", value: "sporty_blue" },
  { label: "Crystal Black", value: "crystal_black" },
  { label: "Platinum White (Pearlescent)", value: "platinum_white" },
];

const ANIMATED_STARTING_PRICE = 38000;

export default class BuildAndPrice extends LightningElement {
  // Define the properties for the component and set default values
  showModal = false;
  crvVariants = CRV_VARIANTS;
  selectedVariant = CRV_VARIANTS[0];
  colorsList = COLORS;
  selectedPrice = this.selectedVariant.price;
  selectedImageName = this.colorsList[0].value;
  selectedColorLabel = this.colorsList[0].label;
  animatePriceValue;

  // Getters
  get description() {
    return `Customer is looking for CRV ${this.selectedVariant.variant} of color ${this.selectedColorLabel}`
  }

  // Init
  connectedCallback() {
    this.animatePrice()
  }

  animatePrice() {
    this.animatePriceValue = ANIMATED_STARTING_PRICE;
    let interval = window.setInterval(() => {
      if (this.selectedPrice !== this.animatePriceValue) {
        this.animatePriceValue += 100;
      } else {
        window.clearInterval(interval);
      }
    }, 10);
  }

  // This is the event handler for the selection event
  selectionHandler(event) {
    console.log("handleSelection selected ", event.detail.selected);
    console.log("handleSelection variant ", event.detail.variant);
    const { selected, variant } = event.detail;
    this.selectedVariant = { ...selected, imageName: this.selectedImageName };
    this.selectedPrice = this.selectedVariant.price;
    this.animatePrice();
  }

  // This is the event handler for the color selection event
  colorSelectionHandler(event) {
    console.log("colorSelectionHandler selected value ", event.detail);
    this.selectedImageName = event.detail;
    this.selectedVariant = {
      ...this.selectedVariant,
      imageName: this.selectedImageName,
    };
    this.updateColors(this.selectedImageName);
  }

  // * Allows me to update colors list with the latest selection
  updateColors(value) {
    this.colorsList = this.colorsList.map((color) => {
      return { ...color, checked: color.value === value };
    });
  }

  // * Allows me to update crvVariants list with the latest selection
  updateVariants(value) {
    this.crvVariants = this.crvVariants.map((variant) => {
      return { ...variant, checked: variant.variant === value };
    });
  }

  handleModal(event) {
    this.showModal = !this.showModal;
  }

  submitForm() {
    this.template.querySelector('components-lead-form').submitForm();
    // this.handleModal();
  }
}
