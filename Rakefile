require 'middleman-gh-pages'

task :build => [:prepare]

desc "Build and serve a local copy"
task :serve => [:build] do |t|
  sh "ruby -run -e httpd build -p 9090"
end

task :prepare => [:bower]

task :bower do |t|
  sh "cd source; bower install"
end

