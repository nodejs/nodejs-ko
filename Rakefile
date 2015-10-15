require 'open-uri'
require 'date'

# template creator
class Template
  attr_accessor :url, :source, :type, :date

  def initialize(url)
    self.url = url
    self.source = open(url, &:read)
    self.type = url =~ /weekly-updates/ ? :weekly : :articles
    date_str = source.match(%r{>(\d{4}-\d{2}-\d{2})</time>})[1]
    self.date = Date.parse(date_str)
  end

  def content
    <<-TEMPLATE.gsub(/^ */, '')
      ---
      layout: post
      title: #{translated_title}
      author: #{author}
      ref: #{title}
      refurl: #{url}
      translator:
        - <a href="GITHUB_URL" target="_blank">번역자 이름</a>
      ---
      #{article}
    TEMPLATE
  end

  def filepath
    File.join(type.to_s, '_posts', filename)
  end

  private

  def article
    text = source.force_encoding('UTF-8').match(%r{<article>(.+?)</article>}m)[1]
    text.gsub! %r{<li>}, ' - '
    text.gsub! %r{<a href="(.+?)">(.+?)</a>}, '[\2](\1)'
    text.gsub! %r{<h3 id=".+?">(.+?)</h3>}, '### \1'
    text.gsub! %r{<div class="blogpost-header">.+?</div>|</?p>|</li>|</?ul>}m, ''
  end

  def translated_title
    if type == :weekly
      "Node.js 주간 뉴스 #{date.strftime('%Y년 %-m월 %-d일')}"
    else
      '번역글의 제목'
    end
  end

  def url_title
    if type == :weekly
      type
    else
      url.match(%r{blog/(.+?)/?$})[1].tr('/', '-')
    end
  end

  def filename
    "#{date.strftime('%Y-%m-%d')}-#{url_title}.md"
  end

  def title
    source.match(%r{<h1>(.+?)</h1>})[1]
  end

  def author
    matches = source.match(/<span class="blogpost-meta">by (.+?), <time/)
    matches ? matches[1] : 'Node'
  end
end

namespace :create do
  desc 'Create a new article'
  task :articles, [:url] do |_, args|
    url = args[:url]
    create_template(url)
  end

  private

  def create_template(url)
    template = Template.new(url)
    $stderr.print "Creating template `#{template.filepath}'... "
    if File.exist?(template.filepath)
      warn "Could not create template, `#{template.filepath}' already exists."
    else
      File.open(template.filepath, 'w') { |f| f.write template.content }
      warn 'done.'
    end
  rescue => e
    warn e.message
  end
end
