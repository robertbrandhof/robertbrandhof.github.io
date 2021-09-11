# Développement

## Installation

1. Installer Ruby 2.7
1. Installer [Jeykyll](https://jekyllrb.com/) avec la commande `gem install bundler jekyll` 
1. Télécharger les sources avec la commande `git clone git@github.com:simonbrandhof/robertbrandhof.com.git`

## Exécution en local

1. Depuis le répertoire racine, exécuter la commande `bundle exec jekyll serve`. Le site est disponible à l'adresse [http://localhost:4000](http://localhost:4000). Toute modification dans un fichier, sauf dans `_config.yml` est immédiatement prise en compte.

## Publication

1. Pousser les modifications dans GitHub. Le site est redéployé par [GitHub Actions](https://github.com/simonbrandhof/robertbrandhof.com/actions) au bout de quelques secondes. A noter que le code de cette Action est dans le fichier `.github/workflows/jekyll.yml`