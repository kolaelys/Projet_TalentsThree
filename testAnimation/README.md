
 # Projet-TalentsThree

---


#### Fichiers

> je travaille actuellement sur les fichiers:
* Projet_TalentsThree/testAnimation/graphAnim/
  * testCytoscape.html
  * GraphCircle.js
  * CytoData.js
  * css/test.css
 

 #### Sources

> pour travailler j'utilise:
  * Le repo de Xavier
  * L'API [Cytoscape JS](http://js.cytoscape.org/)
  
 #### Ce que j'ai fais

 * Dans testCytoscape.html:
   * J'ai simplement crée une div pour contenir le graph Cytoscap
   * j'y ai ajouté un bout de code de Xavier pour essayer de reproduire l'animation de départ (apparition du graph au click "ouvrir l'arbre")

* Dans CytoData.js:
  * J'ai copié le fichier `tft.dnd.data.js` de l'arbre-web de Xavier 
  * j'y ai rajouté les liens entre les compétences grâce à l'élément "edge" de la librairie

* Dans GraphCircle.js:

  * j'ai repris le code de Xavier en essayant de l'adapter pour l'animation

#### Ce que j'ai fais

* Appartion du graphique au click du bouton `ouvrir l'arbre de compétence` et retour à la vu d'avant lors du clic sur l'image `Bricoschool`
* Changement sur l'animation parents/enfants pour qu'elle soit effective dans les deux sens

#### Ce que je prévois de faire après

* Trouver comment reproduire l'ancienne animation (disparition et apparition noeud après noeud) 

* Continuer de travailler sur la "bulle" d'information qui est actuellement inséré en brut dans des div HTML


#### Mes tentatives d'aujourdhui 

* J'ai essayé de de changer le background du graph selon les nodes, mais seul la couleur des compétences changent, pas le fond

> Je n'ai mallheuresement pas obtenue de résultats pour ce point


 
