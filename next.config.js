const path = require('path')
const withVideos = require('next-videos')
const withImages = require('next-images')

module.exports = withImages(
  withVideos({
    future: {
      webpack5: true,
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'src/styles')],
    },
  })
)
