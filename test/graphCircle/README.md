
 # Projet-TalentsThree

---


#### Fichiers

> je travaille actuellement sur les fichiers:
* test/graphCircle
  * testCytoscape.html
  * GraphCircle.js
  * CytoData.js
 

 #### Sources

> pour travailler j'utilise:
  * Le repo de Xavier
  * L'API [Cytoscape JS](http://js.cytoscape.org/)
  
 #### Ce que j'ai fais

 * Dans testCytoscape.html:
   * J'ai simplement crée une div pour contenir le graph Cytoscap

* Dans CytoData.js:
  * J'ai copié le fichier `tft.dnd.data.js` de l'arbre-web de Xavier 
  * j'y ai rajouté les liens entre les compétences grâce à l'élément "edge" de la librairie
  * j'ai remplacé la propriété "dependsOn" par "parent"

* Dans GraphCircle.js:
  * J'ai créer le graph grâce à la variable "cy" qui contient les informations du fichier data pour les afficher en forme "grid". 
  * J'ai récupéré les informations de `CytoData.js` et je les affiche au survol des compétences
  * J'ai push dans un tableau `initParent` les compétences n'ayant pas de point source, je les ai changé de couleur(couleur provisoire)
  * J'ai testé une petite animation qui fait disparaître les éléments enfants des compétences sur lesquelles ont clic
  


 
#### Ce que j'essaie de faire 

> différencier les différents "niveaux" dans l'évolutions de l'apprentissage des langages
explication: Rendre visuelle le nombre de compétences à apprendre avant de pouvoir accéder à celle qu'on vise



#### Ce que je prévois de faire après

* Continuer de travailler sur la "bulle" d'information qui est actuellement inséré en brut dans des div HTML

* Créer une fonction qui permet d'incrémenter les point de compétences

* Bloquer l'accès au compétences enfant tant que l'objectif de la compétence parent n'est pas atteint (comme sur l'arbre de Xavier) 

* Travailler sur la disposition des éléments dans un graphique type "preset" 

 
