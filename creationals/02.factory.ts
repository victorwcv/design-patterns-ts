interface Hamburger {
  prepare(): void;
}

class ChickenBurger implements Hamburger {
  prepare(): void {
    console.log("Preparing Chicken Burger");
  }
}

class BeefBurger implements Hamburger {
  prepare(): void {
    console.log("Preparing Beef Burger");
  }
}

abstract class Restaurant {
  abstract createHamburger(): Hamburger;
  orderHamburger(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }
}

class McDonalds extends Restaurant {
  override createHamburger(): Hamburger {
    return new ChickenBurger();
  }
}

class BurgerKing extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeefBurger();
  }
}

function main() {
  let restaurant: Restaurant;

  const burgerType = prompt(
    "Ingrese el tipo de hamburguesa (McDonalds o BurgerKing): "
  );
  if (burgerType === "McDonalds") {
    restaurant = new McDonalds();
  } else if (burgerType === "BurgerKing") {
    restaurant = new BurgerKing();
  } else {
    console.log("Tipo de hamburguesa no válido.");
    return;
  }

  restaurant.orderHamburger();
}

main();
