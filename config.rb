Time.zone = "Europe/Madrid"
activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  blog.prefix = "blog"

  blog.permalink = ":year/:month/:title"
  # Matcher for blog source files
  blog.sources = ":year-:month-:day-:title"
  blog.taglink = "tags/:tag.html"
  blog.layout = "blog"
  blog.summary_separator = /(READMORE)/
  blog.summary_length = 250
  blog.year_link = ":year.html"
  blog.month_link = ":year/:month.html"
  blog.day_link = ":year/:month/:day.html"
  # blog.default_extension = ".markdown"

  blog.tag_template = "blog/tag.html"
  blog.calendar_template = "blog/calendar.html"

  # Enable pagination
  blog.paginate = true
  blog.per_page = 10
  blog.page_link = "page/:num}"
end

activate :directory_indexes
activate :livereload do |livereload|
  livereload.no_swf = true
end

set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'img'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  # activate :cache_buster

  # Use relative URLs
  # activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"

  activate :favicon_maker do |f|
    f.icons = {
      'favicon_hires.png' => [
        { icon: "apple-touch-icon-152x152-precomposed.png" },
        { icon: "apple-touch-icon-144x144-precomposed.png" },
        { icon: "apple-touch-icon-120x120-precomposed.png" },
        { icon: "apple-touch-icon-114x114-precomposed.png" },
        { icon: "apple-touch-icon-76x76-precomposed.png" },
        { icon: "apple-touch-icon-72x72-precomposed.png" },
        { icon: "apple-touch-icon-60x60-precomposed.png" },
        { icon: "apple-touch-icon-57x57-precomposed.png" },
        { icon: "apple-touch-icon-precomposed.png", size: "57x57" },
        { icon: "apple-touch-icon.png", size: "57x57" },
        { icon: "favicon-196x196.png" },
        { icon: "favicon-160x160.png" },
        { icon: "favicon-96x96.png" },
        { icon: "favicon-32x32.png" },
        { icon: "favicon-16x16.png" },
        { icon: "favicon.png", size: "16x16" },
        { icon: "favicon.ico", size: "64x64,32x32,24x24,16x16" },
        { icon: "mstile-144x144", format: "png" },
      ]
    }
  end

end

compass_config do |config|
  # Require any additional compass plugins here.
  config.add_import_path "bower_components/foundation/scss"
  # Set this to the root of your project when deployed:
  config.http_path = "/"
  config.css_dir = "css"
  config.sass_dir = "saas"
  config.images_dir = "img"
  config.javascripts_dir = "js"

  # You can select your preferred output style here (can be overridden via the command line):
  # output_style = :expanded or :nested or :compact or :compressed

  # To enable relative paths to assets via compass helper functions. Uncomment:
  # relative_assets = true

  # To disable debugging comments that display the original location of your selectors. Uncomment:
  # line_comments = false

end

configure :development do
  activate :google_analytics do |ga|
    ga.tracking_id = false
  end
end

configure :build do
  activate :google_analytics do |ga|
    ga.tracking_id = 'UA-22657949-1'
  end
end

# Add bower's directory to sprockets asset path
after_configuration do
  sprockets.append_path File.join 'source', 'bower_components'
end

activate :deploy do |deploy|
  deploy.method = :git
  deploy.build_before = true
  deploy.branch   = "master"
end

activate :asset_hash

page '/*.html', layout: 'default'
page '/blog/*.html', layout: 'blog'
page '/blog/feed.xml', layout: false
page "/404.html", directory_index: false, layout: 'default'

redirects = {
  '/blog/2011/04/its-a-dangerous-business' => [
    '2011/04/its-a-dangerous-business…',
    '2011/04/its-a-dangerous-business%e2%80%a6',
    '2011/04/its-a-dangerous-business'
  ],
  '/blog/2011/06/retrospective-of-startup-weekend-madrid' => '2011/06/retrospective-of-startup-weekend-madrid',
  '/blog/2011/07/looking-forward-to-conferenciaror' => '2011/07/looking-forward-to-conferenciaror'
}

redirects.each_pair do |destination, old_urls|
  old_urls = [old_urls] unless old_urls.is_a? Array
  old_urls.each do |old|
    proxy "#{old}.html", "redirects.html", :locals => { redirected_url: destination }
  end
end
