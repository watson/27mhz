'use stirct'

var CHANNELS = [
  26.965e6,
  26.975e6, // Black or Grey/Brown
  26.985e6,
  26.995e6, // Brown
  27.005e6,
  27.015e6,
  27.025e6, // Brown/Red
  27.035e6,
  27.045e6, // Red
  27.055e6,
  27.065e6,
  27.075e6, // Red/Orange
  27.085e6,
  27.095e6, // Orange
  27.105e6,
  27.115e6,
  27.125e6, // Orange/Yellow
  27.135e6,
  27.145e6, // Yellow
  27.155e6,
  27.165e6,
  27.175e6, // Yellow/Green
  27.185e6,
  27.195e6, // Green
  27.205e6,
  27.215e6,
  27.225e6, // Green/Blue
  27.235e6,
  27.245e6, // Blue
  27.255e6, // Blue (as well)
  27.265e6,
  27.275e6 // White or Purple
]

module.exports = function (channel) {
  return CHANNELS[channel - 1]
}
