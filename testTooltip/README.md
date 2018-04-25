
 # Projet-TalentsThree

---


#### Fichiers

> je travaille actuellement sur les fichiers:
* testTooltip/
  * index.html
  * index.js
  * CytoData.js
 

 #### Sources
> pour travailler j'utilise:
  * Le repo de Xavier
  * L'API [Cytoscape JS](http://js.cytoscape.org/)
  
 #### Ce que j'ai fais
 * Dans index.html:
   * J'ai simplement crée une div pour contenir le graph Cytoscap

* Dans CytoData.js:
  * J'ai copié le fichier `tft.dnd.data.js` de l'arbre-web de Xavier 
  * j'y ai rajouté les liens entre les compétences grâce à l'élément "edge" de la librairie

* Dans index.js:
  * J'ai créer le graph grâce à la variable "cy" qui contient les informations du fichier data pour les afficher. 



 
#### Ce que j'essaie de faire 
> Afficher une "bulle d'information" contenant la description des compétences sur lesquels on passe la souris. Utilisation de [Tooltip](https://getbootstrap.com/docs/4.0/components/tooltips/)
Pour l'instant je fais apparaître un mot "description" dans une div `$('#description")` et au survol de la souris il devrait m'afficher la description complète du fichier data. Je n'arrive à obtenir que le premier mot. 




#### Ce que je prévois de faire après

* Afficher le `tooltip` directement sur les noeuds de compétence du graphique. 



 

