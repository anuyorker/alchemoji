const emojis = [
  {
    name: 'hand',
    emoji: '✋',
    path: require('../assets/emojis/hand.svg')
  },
  {
    name: 'mouse',
    emoji: '🖱',
    path: require('../assets/emojis/mouse.svg')
  },
  {
    name: 'plug',
    emoji: '🔌',
    path: require('../assets/emojis/plug.svg')
  },
  {
    name: 'light bulb',
    emoji: '💡',
    path: require('../assets/emojis/light bulb.svg')
  },
  {
    name: 'book',
    emoji: '📚',
    path: require('../assets/emojis/book.svg')
  },
  {
    name: 'cellphone',
    emoji: '📱',
    path: require('../assets/emojis/cellphone.svg')
  },
  {
    name: 'keyboard',
    emoji: '⌨️',
    path: require('../assets/emojis/keyboard.svg')
  },
  {
    name: 'tv',
    emoji: '📺',
    path: require('../assets/emojis/tv.svg')
  },
  {
    name: 'laptop',
    emoji: '💻',
    path: require('../assets/emojis/laptop.svg')
  },
  {
    name: 'shirt',
    emoji: '👕',
    path: require('../assets/emojis/shirt.svg')
  },
  {
    name: 'pants',
    emoji: '👖',
    path: require('../assets/emojis/pants.svg')
  },
  {
    name: 'shoe',
    emoji: '👞',
    path: require('../assets/emojis/shoe.svg')
  },
  {
    name: 'key',
    emoji: '🔑',
    path: require('../assets/emojis/key.svg')
  },
  {
    name: 'newspaper',
    emoji: '📰',
    path: require('../assets/emojis/newspaper.svg')
  },
  {
    name: 'plate',
    emoji: '🍽',
    path: require('../assets/emojis/plate.svg')
  },
  {
    name: 'sock',
    emoji: '🧦',
    path: require('../assets/emojis/sock.svg')
  },
  {
    name: 'coat',
    emoji: '🧥',
    path: require('../assets/emojis/coat.svg')
  },
  {
    name: 'wallet',
    emoji: '👛',
    path: require('../assets/emojis/wallet.svg')
  },
  {
    name: 'bed',
    emoji: '🛏',
    path: require('../assets/emojis/bed.svg')
  },
  {
    name: 'cup',
    emoji: '☕',
    path: require('../assets/emojis/cup.svg')
  },
  {
    name: 'watch',
    emoji: '⌚',
    path: require('../assets/emojis/watch.svg')
  },
  {
    name: 'trash can',
    emoji: '🗑',
    path: require('../assets/emojis/trash can.svg')
  },
  {
    name: 'envelope',
    emoji: '✉️',
    path: require('../assets/emojis/envelope.svg')
  },
  {
    name: 'sunglasses',
    emoji: '🕶',
    path: require('../assets/emojis/sunglasses.svg')
  },
  {
    name: 'toilet',
    emoji: '🚽',
    path: require('../assets/emojis/toilet.svg')
  },
  {
    name: 'clock',
    emoji: '🕑',
    path: require('../assets/emojis/clock.svg')
  },
  {
    name: 'hat',
    emoji: '🧢',
    path: require('../assets/emojis/hat.svg')
  },
  {
    name: 'backpack',
    emoji: '🎒',
    path: require('../assets/emojis/backpack.svg')
  },
  {
    name: 'headphones',
    emoji: '🎧',
    path: require('../assets/emojis/headphones.svg')
  },
  {
    name: 'display',
    emoji: '🖥',
    path: require('../assets/emojis/display.svg')
  },
  {
    name: 'spoon',
    emoji: '🥄',
    path: require('../assets/emojis/spoon.svg')
  },
  {
    name: 'bowl',
    emoji: '🥣',
    path: require('../assets/emojis/bowl.svg')
  },
  {
    name: 'scarf',
    emoji: '🧣',
    path: require('../assets/emojis/scarf.svg')
  },
  {
    name: 'scissors',
    emoji: '✂️',
    path: require('../assets/emojis/scissors.svg')
  },
  {
    name: 'cabinet',
    emoji: '🗄',
    path: require('../assets/emojis/cabinet.svg')
  },
  {
    name: 'tree',
    emoji: '🌲',
    path: require('../assets/emojis/tree.svg')
  },
  {
    name: 'beer',
    emoji: '🍺',
    path: require('../assets/emojis/beer.svg')
  },
  {
    name: 'sofa',
    emoji: '🛋',
    path: require('../assets/emojis/sofa.svg')
  },
  {
    name: 'house',
    emoji: '🏠',
    path: require('../assets/emojis/house.svg')
  },
  {
    name: 'building',
    emoji: '🏢',
    path: require('../assets/emojis/building.svg')
  },
  {
    name: 'bicycle',
    emoji: '🚲',
    path: require('../assets/emojis/bicycle.svg')
  },
  {
    name: 'frying pan',
    emoji: '🍳',
    path: require('../assets/emojis/frying pan.svg')
  },
  {
    name: 'wine',
    emoji: '🍷',
    path: require('../assets/emojis/wine.svg')
  },
  {
    name: 'bread',
    emoji: '🍞',
    path: require('../assets/emojis/bread.svg')
  },
  {
    name: 'printer',
    emoji: '🖨',
    path: require('../assets/emojis/printer.svg')
  },
  {
    name: 'banana',
    emoji: '🍌',
    path: require('../assets/emojis/banana.svg')
  },
  {
    name: 'car',
    emoji: '🚗',
    path: require('../assets/emojis/car.svg')
  },
  {
    name: 'flower',
    emoji: '🌼',
    path: require('../assets/emojis/flower.svg')
  },
  {
    name: 'glove',
    emoji: '🧤',
    path: require('../assets/emojis/glove.svg')
  },
  {
    name: 'umbrella',
    emoji: '☂️',
    path: require('../assets/emojis/umbrella.svg')
  },
  {
    name: 'bathtub',
    emoji: '🛁',
    path: require('../assets/emojis/bathtub.svg')
  },
  {
    name: 'camera',
    emoji: '📷',
    path: require('../assets/emojis/camera.svg')
  },
  {
    name: 'cat',
    emoji: '🐱',
    path: require('../assets/emojis/cat.svg')
  },
  {
    name: 'guitar',
    emoji: '🎸',
    path: require('../assets/emojis/guitar.svg')
  },
  {
    name: 'dog',
    emoji: '🐶',
    path: require('../assets/emojis/dog.svg')
  },
  {
    name: 'orange',
    emoji: '🍊',
    path: require('../assets/emojis/orange.svg')
  },
  {
    name: 'strawberry',
    emoji: '🍓',
    path: require('../assets/emojis/strawberry.svg')
  },
  {
    name: 'piano',
    emoji: '🎹',
    path: require('../assets/emojis/piano.svg')
  },
  {
    name: 'hammer',
    emoji: '🔨',
    path: require('../assets/emojis/hammer.svg')
  },
  {
    name: 'microphone',
    emoji: '🎤',
    path: require('../assets/emojis/microphone.svg')
  },
  {
    name: 'broccoli',
    emoji: '🥦',
    path: require('../assets/emojis/broccoli.svg')
  },
  {
    name: 'lipstick',
    emoji: '💄',
    path: require('../assets/emojis/lipstick.svg')
  },
  {
    name: 'lock',
    emoji: '🔒',
    path: require('../assets/emojis/lock.svg')
  },
  {
    name: 'mailbox',
    emoji: '📪',
    path: require('../assets/emojis/mailbox.svg')
  },
  {
    name: 'soccer ball',
    emoji: '⚽',
    path: require('../assets/emojis/soccer ball.svg')
  },
  {
    name: 'mushroom',
    emoji: '🍄',
    path: require('../assets/emojis/mushroom.svg')
  },
  {
    name: 'lemon',
    emoji: '🍋',
    path: require('../assets/emojis/lemon.svg')
  },
  {
    name: 'baseball',
    emoji: '⚾',
    path: require('../assets/emojis/baseball.svg')
  },
  {
    name: 'basketball',
    emoji: '🏀',
    path: require('../assets/emojis/basketball.svg')
  },
  {
    name: 'flashlight',
    emoji: '🔦',
    path: require('../assets/emojis/flashlight.svg')
  },
  {
    name: 'candle',
    emoji: '🕯',
    path: require('../assets/emojis/candle.svg')
  },
  {
    name: 'radio',
    emoji: '📻',
    path: require('../assets/emojis/radio.svg')
  },
  {
    name: 'fish',
    emoji: '🐟',
    path: require('../assets/emojis/fish.svg')
  },
  {
    name: 'icecream',
    emoji: '🍨',
    path: require('../assets/emojis/icecream.svg')
  },
  {
    name: 'pizza',
    emoji: '🍕',
    path: require('../assets/emojis/pizza.svg')
  },
  {
    name: 'bird',
    emoji: '🐦',
    path: require('../assets/emojis/bird.svg')
  },
  {
    name: 'cassette',
    emoji: '📼',
    path: require('../assets/emojis/cassette.svg')
  },
  {
    name: 'hamburger',
    emoji: '🍔',
    path: require('../assets/emojis/hamburger.svg')
  },
  {
    name: 'hotdog',
    emoji: '🌭',
    path: require('../assets/emojis/hotdog.svg')
  },
  {
    name: 'fries',
    emoji: '🍟',
    path: require('../assets/emojis/fries.svg')
  },
  {
    name: 'ramen',
    emoji: '🍜',
    path: require('../assets/emojis/ramen.svg')
  },
  {
    name: 'donut',
    emoji: '🍩',
    path: require('../assets/emojis/donut.svg')
  },
  {
    name: 'sushi',
    emoji: '🍣',
    path: require('../assets/emojis/sushi.svg')
  },
  {
    name: 'taco',
    emoji: '🌮',
    path: require('../assets/emojis/taco.svg')
  },
  {
    name: 'burrito',
    emoji: '🌯',
    path: require('../assets/emojis/burrito.svg')
  },
  {
    name: 'traffic light',
    emoji: '🚦',
    path: require('../assets/emojis/traffic light.svg')
  },
  {
    name: 'bus',
    emoji: '🚎',
    path: require('../assets/emojis/bus.svg')
  },
  {
    name: 'truck',
    emoji: '🚚',
    path: require('../assets/emojis/truck.svg')
  },
  {
    name: 'screw',
    emoji: '🔩',
    path: require('../assets/emojis/screw.svg')
  },
  {
    name: 'sax',
    emoji: '🎷',
    path: require('../assets/emojis/sax.svg')
  },
  {
    name: 'baby bottle',
    emoji: '🍼',
    path: require('../assets/emojis/baby bottle.svg')
  },
  {
    name: 'motor scooter',
    emoji: '🛵',
    path: require('../assets/emojis/motor scooter.svg')
  },
  {
    name: 'magnifying glass',
    emoji: '🔎',
    path: require('../assets/emojis/magnifying glass.svg')
  },
  {
    name: 'jack o lantern',
    emoji: '🎃',
    path: require('../assets/emojis/jack o lantern.svg')
  },
  {
    name: 'watch',
    emoji: '⌚',
    path: require('../assets/emojis/watch.svg')
  },
  {
    name: 'shoe',
    emoji: '👞',
    path: require('../assets/emojis/shoe.svg')
  },
  {
    name: 'banana',
    emoji: '🍌',
    path: require('../assets/emojis/banana.svg')
  },
  {
    name: 'beer',
    emoji: '🍺',
    path: require('../assets/emojis/beer.svg')
  },
  {
    name: 'jack o lantern',
    emoji: '🎃',
    path: require('../assets/emojis/jack o lantern.svg')
  },
  {
    name: 'alien',
    emoji: '👾',
    path: require('../assets/emojis/alien.png')
  }
];

export default emojis;
