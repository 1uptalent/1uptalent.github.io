desc "Build and serve a local copy"
task :serve do |t|
  sh "ruby -run -e httpd build -p 9090"
end

task :prepare => [:bower]

task :bower do |t|
  sh "cd source; `npm bin`/bower install"
end
