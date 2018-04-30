import { Dimensions, Platform } from 'react-native';
import { emojis } from './emojis';

// Game constants
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
export const TOP_AREA_HEIGHT = 120;
export const GRID_AREA_WIDTH = SCREEN_WIDTH;
export const GRID_AREA_HEIGHT = SCREEN_HEIGHT - TOP_AREA_HEIGHT;
export const EMOJI_SIZE = 57;
// export const HIT_SCORE = 1;
// export const MISS_SCORE = 1;
export const MAX_MISSES = 5;

export const EMOJIS = [
  { hand: require('../assets/emojis/hand.svg') },
  { mouse: require('../assets/emojis/mouse.svg') },
  { plug: require('../assets/emojis/plug.svg') },
  { 'light bulb': require('../assets/emojis/light bulb.svg') },
  { book: require('../assets/emojis/book.svg') },
  { cellphone: require('../assets/emojis/cellphone.svg') },
  { keyboard: require('../assets/emojis/keyboard.svg') },
  { tv: require('../assets/emojis/tv.svg') },
  { laptop: require('../assets/emojis/laptop.svg') },
  { shirt: require('../assets/emojis/shirt.svg') },
  { pants: require('../assets/emojis/pants.svg') },
  { shoe: require('../assets/emojis/shoe.svg') },
  { key: require('../assets/emojis/key.svg') },
  { newspaper: require('../assets/emojis/newspaper.svg') },
  { plate: require('../assets/emojis/plate.svg') },
  { sock: require('../assets/emojis/sock.svg') },
  { coat: require('../assets/emojis/coat.svg') },
  { wallet: require('../assets/emojis/wallet.svg') },
  { bed: require('../assets/emojis/bed.svg') },
  { cup: require('../assets/emojis/cup.svg') },
  { watch: require('../assets/emojis/watch.svg') },
  { 'trash can': require('../assets/emojis/trash can.svg') },
  { envelope: require('../assets/emojis/envelope.svg') },
  { sunglasses: require('../assets/emojis/sunglasses.svg') },
  { toilet: require('../assets/emojis/toilet.svg') },
  { clock: require('../assets/emojis/clock.svg') },
  { hat: require('../assets/emojis/hat.svg') },
  { backpack: require('../assets/emojis/backpack.svg') },
  { headphones: require('../assets/emojis/headphones.svg') },
  { display: require('../assets/emojis/display.svg') },
  { spoon: require('../assets/emojis/spoon.svg') },
  { bowl: require('../assets/emojis/bowl.svg') },
  { scarf: require('../assets/emojis/scarf.svg') },
  { scissors: require('../assets/emojis/scissors.svg') },
  { cabinet: require('../assets/emojis/cabinet.svg') },
  { tree: require('../assets/emojis/tree.svg') },
  { beer: require('../assets/emojis/beer.svg') },
  { sofa: require('../assets/emojis/sofa.svg') },
  { house: require('../assets/emojis/house.svg') },
  { building: require('../assets/emojis/building.svg') },
  { bicycle: require('../assets/emojis/bicycle.svg') },
  { 'frying pan': require('../assets/emojis/frying pan.svg') },
  { wine: require('../assets/emojis/wine.svg') },
  { bread: require('../assets/emojis/bread.svg') },
  { printer: require('../assets/emojis/printer.svg') },
  { banana: require('../assets/emojis/banana.svg') },
  { car: require('../assets/emojis/car.svg') },
  { flower: require('../assets/emojis/flower.svg') },
  { glove: require('../assets/emojis/glove.svg') },
  { umbrella: require('../assets/emojis/umbrella.svg') },
  { bathtub: require('../assets/emojis/bathtub.svg') },
  { camera: require('../assets/emojis/camera.svg') },
  { cat: require('../assets/emojis/cat.svg') },
  { guitar: require('../assets/emojis/guitar.svg') },
  { dog: require('../assets/emojis/dog.svg') },
  { orange: require('../assets/emojis/orange.svg') },
  { strawberry: require('../assets/emojis/strawberry.svg') },
  { piano: require('../assets/emojis/piano.svg') },
  { hammer: require('../assets/emojis/hammer.svg') },
  { microphone: require('../assets/emojis/microphone.svg') },
  { broccoli: require('../assets/emojis/broccoli.svg') },
  { lipstick: require('../assets/emojis/lipstick.svg') },
  { lock: require('../assets/emojis/lock.svg') },
  { mailbox: require('../assets/emojis/mailbox.svg') },
  { 'soccer ball': require('../assets/emojis/soccer ball.svg') },
  { mushroom: require('../assets/emojis/mushroom.svg') },
  { lemon: require('../assets/emojis/lemon.svg') },
  { baseball: require('../assets/emojis/baseball.svg') },
  { basketball: require('../assets/emojis/basketball.svg') },
  { flashlight: require('../assets/emojis/flashlight.svg') },
  { candle: require('../assets/emojis/candle.svg') },
  { radio: require('../assets/emojis/radio.svg') },
  { fish: require('../assets/emojis/fish.svg') },
  { icecream: require('../assets/emojis/icecream.svg') },
  { pizza: require('../assets/emojis/pizza.svg') },
  { bird: require('../assets/emojis/bird.svg') },
  { cassette: require('../assets/emojis/cassette.svg') },
  { hamburger: require('../assets/emojis/hamburger.svg') },
  { hotdog: require('../assets/emojis/hotdog.svg') },
  { fries: require('../assets/emojis/fries.svg') },
  { ramen: require('../assets/emojis/ramen.svg') },
  { donut: require('../assets/emojis/donut.svg') },
  { sushi: require('../assets/emojis/sushi.svg') },
  { taco: require('../assets/emojis/taco.svg') },
  { burrito: require('../assets/emojis/burrito.svg') },
  { 'traffic light': require('../assets/emojis/traffic light.svg') },
  { bus: require('../assets/emojis/bus.svg') },
  { truck: require('../assets/emojis/truck.svg') },
  { screw: require('../assets/emojis/screw.svg') },
  { sax: require('../assets/emojis/sax.svg') },
  { 'baby bottle': require('../assets/emojis/baby bottle.svg') },
  { 'motor scooter': require('../assets/emojis/motor scooter.svg') },
  { 'magnifying glass': require('../assets/emojis/magnifying glass.svg') },
  { 'jack o lantern': require('../assets/emojis/jack o lantern.svg') },
  { watch: require('../assets/emojis/watch.svg') },
  { shoe: require('../assets/emojis/shoe.svg') },
  { banana: require('../assets/emojis/banana.svg') },
  { beer: require('../assets/emojis/beer.svg') },
  { 'jack o lantern': require('../assets/emojis/jack o lantern.svg') },
  { alien: require('../assets/emojis/alien.png') }
];

// Helper functions
export const randomEmoji = (moreAliens = 0) => {
  let emojiImages = Object.keys(EMOJIS);
  const moreAliensArray = Array(moreAliens).fill('android');
  emojiImages = [...emojiImages, ...moreAliensArray];
  return emojiImages[Math.floor(Math.random() * emojiImages.length)];
};

export const randomCoordinates = () => ({
  left: Math.random() * (GRID_AREA_WIDTH - EMOJI_SIZE),
  top: Math.random() * (GRID_AREA_HEIGHT - EMOJI_SIZE)
});

export const randomFromArray = array => array[Math.floor(Math.random() * array.length)];
