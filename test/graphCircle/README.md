
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
  * J'ai testé une petite animation qui fait disparaître les éléments enfants des compétences sur lesquelles ont clic
  * J'ai push dans un tableau `initParent` les compétences n'ayant pas de point source, je les ai changé de couleur(couleur provisoire)
  * J'ai changé les compétences de couleur selon leur niveau dans l'arbre par rapport à leur `initParent`
  * Les liens entre les compétences sont de couleurs différente selon leur spécialisation "back" ou "front"
  * j'ai fais un test en changeant la couleur des bordures des noeuds `initParent`, ceci est provisoire je pensais utiliser cette technique pour signaler le niveau de difficulté 



#### Ce que je prévois de faire après

* Continuer de travailler sur la "bulle" d'information qui est actuellement inséré en brut dans des div HTML

* Créer une fonction qui permet d'incrémenter les point de compétences

* Bloquer l'accès au compétences enfant tant que l'objectif de la compétence parent n'est pas atteint (comme sur l'arbre de Xavier) 

* Placer au centre avec une animation la compétence sur laquelle on clic 



 
