const IP = '165.227.47.243'; // change to IP address of computer or ngrok host if tunneling
const PORT = 50541; // or change to the ngrok port if tunneling
const MOVE_UP_KEY = 'w';
const MOVE_LEFT_KEY = 'a';
const MOVE_DOWN_KEY = 's';
const MOVE_RIGHT_KEY = 'p';
const KEY_MESSAGES = {
  'l': "watch me go",
  'm': "Woo Hoo",
  'n': "Uh Oh",
  'b': "Are we there yet?"
};

module.exports = {
  IP,
  PORT,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  KEY_MESSAGES
};