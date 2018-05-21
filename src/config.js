const placeholderBackgroundImage = require ('./images/placeholderBg.png');
module.exports = {
  wpApiUrl: "http://wpinfodisplay.chriskilinc.com/wp-json/wp/v2/posts?_embed",  //  Wordpress REST API url
  applicationName: "WordPress Information Screen",   // Application name, this will also be the browser tab title
  settings: {
    cycleInSeconds: 7.5,  //  The amount of time an item will show before changing to the next in que
    totalCycles: 1,       //  Total Number of cycles the gallery will run before fetching the Api
    hasAside: false,
    showTitle: false,
  },
  placeholder: {
    image: placeholderBackgroundImage,   //  Placeholder Image for articles without an FeaturedImage attatched
  },
}
