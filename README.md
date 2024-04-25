
# Trouve ton film

## 1. Introduction
Dans ce projet nous allons créer une page qui permettra d'afficher la liste de films correspondants à la recherche de l'utilisateur grâce à l'API [The Open Movie Database](https://www.omdbapi.com/). On affichera également les informations sur un film si l'utilisateur clique dessus.

## 2. Le projet
Il faudra créer un formulaire où l'utilisateur pourra entrer le nom du film qu'il cherche. Au submit, tu iras taper dans l'API pour récupérer la liste des films contenant les mots clefs que l'utilisateur a cherchée. Tu devras par la suite créer une fonction pour afficher la liste des films proposés.

Tu devras montrer :

- L'affiche du film
- Le nom du film
- Sa date de sortie.
- Un CTA ("Call To Action") représenté par un bouton "Read more"

Tout cela devra bien entendu être fait en utilisant l'asynchrone. Tu utiliseras également **l'Intersection Observer** afin d'afficher les résultats petit à petit, lors du scroll.

Initialement, tes blocs contenant les informations du film seront en opacité 0 et sur le côté de l'écran. Lorsque tu scroll, les films s'afficheront petit à petit. Voici un exemple. Au clic sur le CTA dans un des blocs contenant les informations sur le film, une popup s'affichera, contenant davantage d'information sur le film cliqué, avec par exemple le résumé du film. Tu peux faire ta modal via bootstrap, ou alors utiliser ce tuto de W3Schools.

Voici quelques users stories afin de comprendre parfaitement la demande :

- L'utilisateur peut chercher une liste de films/séries grâce à des mots clefs
- L'utilisateur verra les films/séries apparaître sous forme de blocs, contenant le nom du film, la date de parution et une image ainsi qu'un CTA "Read More".
- L'utilisateur peut cliquer sur le CTA "Read More" afin d'afficher la description complète du film, ainsi que sa date de parution dans une popup.
- Les films/séries apparaissent petit à petit, au fur et à mesure du scroll.

