require 'middleman-gh-pages'

desc "Build and serve a local copy"
task :serve => [:build] do |t|
  sh "ruby -run -e httpd build -p 9090"
end