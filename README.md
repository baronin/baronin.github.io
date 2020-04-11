Hey ! baronin.github.io is my personnal website, but any contribution is welcome !

## Installation

Dependencies :

- [RubyGems](https://rubygems.org/pages/download)
- [jekyll](http://jekyllrb.com/docs/installation/)
- bundle (`gem install bundle`)

Then execute the following commands (for Linux):

```
git clone git@github.com:baronin/baronin.github.io.git
cd baronin.github.io
bundle exec jekyll serve
```

Open http://127.0.0.1:4000/ in your prefereted navigator, and... It should be working !

## Tests

This website use [html-proofer](https://github.com/gjtorikian/html-proofer) to check if the generated HTML files does not contain errors. Every pull requests will be tested with [travis](https://travis-ci.org/) before being manually reviewed. In fact you must see a green badge in the top of this readme. If not, please start to panic.

To manually test the generated HTML files before commit, execute this command after placing yourself in the root of the project :

```
bundle exec htmlproof --href-ignore /^$/ --only-4xx _site/
```

## Contribution

If you find any errors on this website or maybe just want to improve something, feel free to open an issue. You can also fork this repository and do a pull request with your modifications. I will review any issue or pull request. For questions about why a solution I used doesn't work for you, please inbox me here in GitHub.

## Plugins

https://ionicons.com/

https://github.com/kottenator/jquery-circle-progress

`all images in foolfer`
{% for image in site.static_files %}
{% if image.path contains 'images/projects.yml' %}
<img src="{{ site.base-url }}{{ image.path }}">
{% endif %}
{% endfor %}

`all lang`
{% for postTrans in postsTrans %}
{% if postTrans.lang %}
<a class="{{ postTrans.lang }}" href="{{ site.base-url }}{{ postTrans.url }}">{{ postTrans.lang }}</a>
{% endif %}
{% endfor %}
