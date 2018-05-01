import { Dimensions, Platform } from 'react-native';

// Game constants
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
export const GRID_AREA_WIDTH = SCREEN_WIDTH;
export const GRID_AREA_HEIGHT = SCREEN_HEIGHT - 120;
export const EMOJI_SIZE = 58;
export const MAX_MISSES = 5;

export const EMOJIS = {
  plug: require('../assets/emojis/plug.png'),
  book: require('../assets/emojis/book.png'),
  cellphone: require('../assets/emojis/cellphone.png'),
  shirt: require('../assets/emojis/shirt.png'),
  pants: require('../assets/emojis/pants.png'),
  shoe: require('../assets/emojis/shoe.png'),
  newspaper: require('../assets/emojis/newspaper.png'),
  plate: require('../assets/emojis/plate.png'),
  sock: require('../assets/emojis/sock.png'),
  coat: require('../assets/emojis/coat.png'),
  bed: require('../assets/emojis/bed.png'),
  cup: require('../assets/emojis/cup.png'),
  envelope: require('../assets/emojis/envelope.png'),
  clock: require('../assets/emojis/clock.png'),
  backpack: require('../assets/emojis/backpack.png'),
  display: require('../assets/emojis/display.png'),
  bowl: require('../assets/emojis/bowl.png'),
  scarf: require('../assets/emojis/scarf.png'),
  scissors: require('../assets/emojis/scissors.png'),
  cabinet: require('../assets/emojis/cabinet.png'),
  beer: require('../assets/emojis/beer.png'),
  sofa: require('../assets/emojis/sofa.png'),
  building: require('../assets/emojis/building.png'),
  bicycle: require('../assets/emojis/bicycle.png'),
  bread: require('../assets/emojis/bread.png'),
  printer: require('../assets/emojis/printer.png'),
  banana: require('../assets/emojis/banana.png'),
  flower: require('../assets/emojis/flower.png'),
  glove: require('../assets/emojis/glove.png'),
  bathtub: require('../assets/emojis/bathtub.png'),
  camera: require('../assets/emojis/camera.png'),
  cat: require('../assets/emojis/cat.png'),
  guitar: require('../assets/emojis/guitar.png'),
  dog: require('../assets/emojis/dog.png'),
  orange: require('../assets/emojis/orange.png'),
  piano: require('../assets/emojis/piano.png'),
  broccoli: require('../assets/emojis/broccoli.png'),
  mushroom: require('../assets/emojis/mushroom.png'),
  baseball: require('../assets/emojis/baseball.png'),
  basketball: require('../assets/emojis/basketball.png'),
  flashlight: require('../assets/emojis/flashlight.png'),
  candle: require('../assets/emojis/candle.png'),
  radio: require('../assets/emojis/radio.png'),
  fish: require('../assets/emojis/fish.png'),
  pizza: require('../assets/emojis/pizza.png'),
  bird: require('../assets/emojis/bird.png'),
  cassette: require('../assets/emojis/cassette.png'),
  hamburger: require('../assets/emojis/hamburger.png'),
  fries: require('../assets/emojis/fries.png'),
  ramen: require('../assets/emojis/ramen.png'),
  donut: require('../assets/emojis/donut.png'),
  burrito: require('../assets/emojis/burrito.png'),
  bus: require('../assets/emojis/bus.png'),
  screw: require('../assets/emojis/screw.png'),
  sax: require('../assets/emojis/sax.png'),
  alien: require('../assets/emojis/alien.png')
};

// Helper functions
export const randomEmoji = (moreAliens = 0) => {
  let emojis = Object.keys(EMOJIS);
  const moreAliensArray = Array(moreAliens).fill('alien');
  emojis = [...emojis, ...moreAliensArray];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

export const randomCoordinates = () => ({
  left: Math.random() * (GRID_AREA_WIDTH - EMOJI_SIZE),
  top: Math.random() * (GRID_AREA_HEIGHT - EMOJI_SIZE)
});

export const randomFromArray = array => array[Math.floor(Math.random() * array.length)];
