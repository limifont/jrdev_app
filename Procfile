# Run Rails & Webpack concurrently
# Example file from webpack-rails gem
rails: bundle exec puma -t 5:5 -p ${PORT:-3000} -e ${RACK_ENV:-development}
PRweb: bundle exec puma -t 5:5 -p ${PORT:-3000} -e ${RACK_ENV:-development}
worker: bundle exec rake jobs:work
webpack: ./node_modules/.bin/webpack-dev-server --config config/webpack.config.js