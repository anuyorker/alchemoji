// Emoji Store
// Structure of each emoji:
//  @name - emoji name label
//  @emoji - emoji character
//  @path - path to svg file of emoji in utils directory

const emojis = [
  {
    name: 'hand',
    emoji: '✋',
    path: '../public/emojis/hand.svg'
  },
  {
    name: 'mouse',
    emoji: '🖱',
    path: '../public/emojis/mouse.svg'
  },
  {
    name: 'plug',
    emoji: '🔌',
    path: '../public/emojis/plug.svg'
  },
  {
    name: 'light bulb',
    emoji: '💡',
    path: '../public/emojis/light bulb.svg'
  },
  {
    name: 'book',
    emoji: '📚',
    path: '../public/emojis/book.svg'
  },
  {
    name: 'cellphone',
    emoji: '📱',
    path: '../public/emojis/cellphone.svg'
  },
  {
    name: 'keyboard',
    emoji: '⌨️',
    path: '../public/emojis/keyboard.svg'
  },
  {
    name: 'tv',
    emoji: '📺',
    path: '../public/emojis/tv.svg'
  },
  {
    name: 'laptop',
    emoji: '💻',
    path: '../public/emojis/laptop.svg'
  },
  {
    name: 'shirt',
    emoji: '👕',
    path: '../public/emojis/shirt.svg'
  },
  {
    name: 'pants',
    emoji: '👖',
    path: '../public/emojis/pants.svg'
  },
  {
    name: 'shoe',
    emoji: '👞',
    path: '../public/emojis/shoe.svg'
  },
  {
    name: 'key',
    emoji: '🔑',
    path: '../public/emojis/key.svg'
  },
  {
    name: 'newspaper',
    emoji: '📰',
    path: '../public/emojis/newspaper.svg'
  },
  {
    name: 'plate',
    emoji: '🍽',
    path: '../public/emojis/plate.svg'
  },
  {
    name: 'sock',
    emoji: '🧦',
    path: '../public/emojis/sock.svg'
  },
  {
    name: 'coat',
    emoji: '🧥',
    path: '../public/emojis/coat.svg'
  },
  {
    name: 'wallet',
    emoji: '👛',
    path: '../public/emojis/wallet.svg'
  },
  {
    name: 'bed',
    emoji: '🛏',
    path: '../public/emojis/bed.svg'
  },
  {
    name: 'cup',
    emoji: '☕',
    path: '../public/emojis/cup.svg'
  },
  {
    name: 'watch',
    emoji: '⌚',
    path: '../public/emojis/watch.svg'
  },
  {
    name: 'trash can',
    emoji: '🗑',
    path: '../public/emojis/trash can.svg'
  },
  {
    name: 'envelope',
    emoji: '✉️',
    path: '../public/emojis/envelope.svg'
  },
  {
    name: 'sunglasses',
    emoji: '🕶',
    path: '../public/emojis/sunglasses.svg'
  },
  {
    name: 'toilet',
    emoji: '🚽',
    path: '../public/emojis/toilet.svg'
  },
  {
    name: 'clock',
    emoji: '🕑',
    path: '../public/emojis/clock.svg'
  },
  {
    name: 'hat',
    emoji: '🧢',
    path: '../public/emojis/hat.svg'
  },
  {
    name: 'backpack',
    emoji: '🎒',
    path: '../public/emojis/backpack.svg'
  },
  {
    name: 'headphones',
    emoji: '🎧',
    path: '../public/emojis/headphones.svg'
  },
  {
    name: 'display',
    emoji: '🖥',
    path: '../public/emojis/display.svg'
  },
  {
    name: 'spoon',
    emoji: '🥄',
    path: '../public/emojis/spoon.svg'
  },
  {
    name: 'bowl',
    emoji: '🥣',
    path: '../public/emojis/bowl.svg'
  },
  {
    name: 'scarf',
    emoji: '🧣',
    path: '../public/emojis/scarf.svg'
  },
  {
    name: 'scissors',
    emoji: '✂️',
    path: '../public/emojis/scissors.svg'
  },
  {
    name: 'cabinet',
    emoji: '🗄',
    path: '../public/emojis/cabinet.svg'
  },
  {
    name: 'tree',
    emoji: '🌲',
    path: '../public/emojis/tree.svg'
  },
  {
    name: 'beer',
    emoji: '🍺',
    path: '../public/emojis/beer.svg'
  },
  {
    name: 'sofa',
    emoji: '🛋',
    path: '../public/emojis/sofa.svg'
  },
  {
    name: 'house',
    emoji: '🏠',
    path: '../public/emojis/house.svg'
  },
  {
    name: 'building',
    emoji: '🏢',
    path: '../public/emojis/building.svg'
  },
  {
    name: 'bicycle',
    emoji: '🚲',
    path: '../public/emojis/bicycle.svg'
  },
  {
    name: 'frying pan',
    emoji: '🍳',
    path: '../public/emojis/frying pan.svg'
  },
  {
    name: 'wine',
    emoji: '🍷',
    path: '../public/emojis/wine.svg'
  },
  {
    name: 'bread',
    emoji: '🍞',
    path: '../public/emojis/bread.svg'
  },
  {
    name: 'printer',
    emoji: '🖨',
    path: '../public/emojis/printer.svg'
  },
  {
    name: 'banana',
    emoji: '🍌',
    path: '../public/emojis/banana.svg'
  },
  {
    name: 'car',
    emoji: '🚗',
    path: '../public/emojis/car.svg'
  },
  {
    name: 'flower',
    emoji: '🌼',
    path: '../public/emojis/flower.svg'
  },
  {
    name: 'glove',
    emoji: '🧤',
    path: '../public/emojis/glove.svg'
  },
  {
    name: 'umbrella',
    emoji: '☂️',
    path: '../public/emojis/umbrella.svg'
  },
  {
    name: 'bathtub',
    emoji: '🛁',
    path: '../public/emojis/bathtub.svg'
  },
  {
    name: 'camera',
    emoji: '📷',
    path: '../public/emojis/camera.svg'
  },
  {
    name: 'cat',
    emoji: '🐱',
    path: '../public/emojis/cat.svg'
  },
  {
    name: 'guitar',
    emoji: '🎸',
    path: '../public/emojis/guitar.svg'
  },
  {
    name: 'dog',
    emoji: '🐶',
    path: '../public/emojis/dog.svg'
  },
  {
    name: 'orange',
    emoji: '🍊',
    path: '../public/emojis/orange.svg'
  },
  {
    name: 'strawberry',
    emoji: '🍓',
    path: '../public/emojis/strawberry.svg'
  },
  {
    name: 'piano',
    emoji: '🎹',
    path: '../public/emojis/piano.svg'
  },
  {
    name: 'hammer',
    emoji: '🔨',
    path: '../public/emojis/hammer.svg'
  },
  {
    name: 'microphone',
    emoji: '🎤',
    path: '../public/emojis/microphone.svg'
  },
  {
    name: 'broccoli',
    emoji: '🥦',
    path: '../public/emojis/broccoli.svg'
  },
  {
    name: 'lipstick',
    emoji: '💄',
    path: '../public/emojis/lipstick.svg'
  },
  {
    name: 'lock',
    emoji: '🔒',
    path: '../public/emojis/lock.svg'
  },
  {
    name: 'mailbox',
    emoji: '📪',
    path: '../public/emojis/mailbox.svg'
  },
  {
    name: 'soccer ball',
    emoji: '⚽',
    path: '../public/emojis/soccer ball.svg'
  },
  {
    name: 'mushroom',
    emoji: '🍄',
    path: '../public/emojis/mushroom.svg'
  },
  {
    name: 'lemon',
    emoji: '🍋',
    path: '../public/emojis/lemon.svg'
  },
  {
    name: 'baseball',
    emoji: '⚾',
    path: '../public/emojis/baseball.svg'
  },
  {
    name: 'basketball',
    emoji: '🏀',
    path: '../public/emojis/basketball.svg'
  },
  {
    name: 'flashlight',
    emoji: '🔦',
    path: '../public/emojis/flashlight.svg'
  },
  {
    name: 'candle',
    emoji: '🕯',
    path: '../public/emojis/candle.svg'
  },
  {
    name: 'radio',
    emoji: '📻',
    path: '../public/emojis/radio.svg'
  },
  {
    name: 'fish',
    emoji: '🐟',
    path: '../public/emojis/fish.svg'
  },
  {
    name: 'icecream',
    emoji: '🍨',
    path: '../public/emojis/icecream.svg'
  },
  {
    name: 'pizza',
    emoji: '🍕',
    path: '../public/emojis/pizza.svg'
  },
  {
    name: 'bird',
    emoji: '🐦',
    path: '../public/emojis/bird.svg'
  },
  {
    name: 'cassette',
    emoji: '📼',
    path: '../public/emojis/cassette.svg'
  },
  {
    name: 'hamburger',
    emoji: '🍔',
    path: '../public/emojis/hamburger.svg'
  },
  {
    name: 'hotdog',
    emoji: '🌭',
    path: '../public/emojis/hotdog.svg'
  },
  {
    name: 'fries',
    emoji: '🍟',
    path: '../public/emojis/fries.svg'
  },
  {
    name: 'ramen',
    emoji: '🍜',
    path: '../public/emojis/ramen.svg'
  },
  {
    name: 'donut',
    emoji: '🍩',
    path: '../public/emojis/donut.svg'
  },
  {
    name: 'sushi',
    emoji: '🍣',
    path: '../public/emojis/sushi.svg'
  },
  {
    name: 'taco',
    emoji: '🌮',
    path: '../public/emojis/taco.svg'
  },
  {
    name: 'burrito',
    emoji: '🌯',
    path: '../public/emojis/burrito.svg'
  },
  {
    name: 'traffic light',
    emoji: '🚦',
    path: '../public/emojis/traffic light.svg'
  },
  {
    name: 'bus',
    emoji: '🚎',
    path: '../public/emojis/bus.svg'
  },
  {
    name: 'truck',
    emoji: '🚚',
    path: '../public/emojis/truck.svg'
  },
  {
    name: 'screw',
    emoji: '🔩',
    path: '../public/emojis/screw.svg'
  },
  {
    name: 'sax',
    emoji: '🎷',
    path: '../public/emojis/sax.svg'
  },
  {
    name: 'baby bottle',
    emoji: '🍼',
    path: '../public/emojis/baby bottle.svg'
  },
  {
    name: 'motor scooter',
    emoji: '🛵',
    path: '../public/emojis/motor scooter.svg'
  },
  {
    name: 'magnifying glass',
    emoji: '🔎',
    path: '../public/emojis/magnifying glass.svg'
  },
  {
    name: 'jack o lantern',
    emoji: '🎃',
    path: '../public/emojis/jack o lantern.svg'
  },
  {
    name: 'watch',
    emoji: '⌚',
    path: '../public/emojis/watch.svg'
  },
  {
    name: 'shoe',
    emoji: '👞',
    path: '../public/emojis/shoe.svg'
  },
  {
    name: 'banana',
    emoji: '🍌',
    path: '../public/emojis/banana.svg'
  },
  {
    name: 'beer',
    emoji: '🍺',
    path: '../public/emojis/beer.svg'
  },
  {
    name: 'jack o lantern',
    emoji: '🎃',
    path: '../public/emojis/jack o lantern.svg'
  }
];

export default emojis;
