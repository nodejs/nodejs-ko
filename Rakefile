require 'open-uri'
require 'date'

class Template
  attr_reader :type, :url, :source
  def initialize(type, url)
    @type, @url = type, url
  end

  def content
    <<-TEMPLATE.gsub(/^ */, '')
      ---
      layout: post
      title: 번역글의 제목
      author: #{author}
      ref: #{title}
      refurl: #{url}
      translator:
        - <a href="GITHUB_URL" target="_blank">번역자 이름</a>
      ---

      Content.
    TEMPLATE
  end

  def filepath
    File.join(type.to_s, '_posts', filename)
  end

  private
  def source
    @source ||= open(url, &:read)
  end

  def url_title
    if type == :weekly
      type
    else
      url.scan(/([^\/]+)-\w+$/).first.first
    end
  end

  def date
    date_str = source.scan(/<meta property="article:published_time" content="(.+?)">/).first.first
    Date.parse(date_str).strftime("%Y-%m-%d")
  end

  def filename
    "#{date}-#{url_title}.md"
  end

  def title
    source.scan(/<title>(.+?) — Medium<\/title>/).first.first
  end

  def author
    source.scan(/<link rel="author" href="https:\/\/medium\.com\/@(.+?)">/).first.first
  end
end

namespace :create do
  desc "Create a new article"
  task :articles, [:url] do |_, args|
    url = args[:url]
    create_template(:articles, url)
  end

  desc "Create a new weekly news"
  task :weekly, [:url] do |_, args|
    url = args[:url]
    create_template(:weekly, url)
  end

  private
  def create_template(type, url)
    template = Template.new(type, url)
    $stderr.print "Creating template `#{template.filepath}'... "
    if File.exist?(template.filepath)
      warn "Could not create template, `#{template.filepath}' already exists."
    else
      File.open(template.filepath, 'w') {|f| f.write template.content }
      warn 'done.'
    end
  rescue => e
    warn e.message
  end
end
