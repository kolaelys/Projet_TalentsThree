document.addEventListener("DOMContentLoaded", function() {
  
  function TalentTree(_e){
    var e = _e || {};
    var self = this;

    //constants for hash generation
    var asciiOffset = 96; //64 for caps, 96 for lower
    var hashDelimeter = '_';

    var numPortraits = 5;

    //Intro vs Talent Tree UI state
    self.isOpen = ko.observable(false);
    self.open = function() {
    self.isOpen(false);
    cy.isOpen(false);
    };
    self.close = function() {
      self.isOpen(true);
      cy.isOpen(true);
    };
    self.toggle = function() {
      self.isOpen(!self.isOpen());
      cy.isOpen(!self.isOpen());
    };

  }
  ko.applyBindings(new TalentTree());
  
  var cy = cytoscape({
    container: document.getElementById("cy"),
    elements: SkillsElements,
    autounselectify: true,
    style: [
     
      
      {
        // noeuds == Compétences
        selector: "node",
        style: {
          label: "data(title)",
          shape: "hexagon",
          width: "200px",
          height: "200px",
          'background-color': '#ad1a66'
        },
       
      },  
      {
        // liens entre les compétences
        selector: "edge",
        style: {
          label: "data(spe)",
          "line-color": "#ad1a66",
          width: "5px",
        },
      },
      { //les compétences n'ayant pas de sources
        selector: ".initParent",
        style:{
          width: "300px",
          height:"300px",
          color:  "green",
         'background-color': 'red',
         'border-color': '#a3c60b',
         'border-width': "10px",
        },
      },
      { 
        selector: ".front",
        style:{
          "line-color": "#42f4e8",
        },
      },
      { 
        selector: ".back",
        style:{
          "line-color": "#415cf4",
        },
      },
      {
      selector:':nonorphan',
      style:{
        'background-color': 'yellow',
        // 'background-opacity': 0.333
      }
      },
      {
        selector:':grabbed',
        style:{
        'background-opacity': 0.95,
        }
      },
      {
      selector:':nodes',
      style:{
        'background-color': "orange",      
      }
      }
    ],
    layout: {
     
      name: 'cose-bilkent',// forme du Graphique
      animate: false,
      randomize: false,
      
      refresh: 3,
      boundingBox: { x:9, y:6, w:2, h:20 },
      nodeDimensionsIncludeLabels: true,
      avoidOverlap: false,
      handleDisconnected: false,
      idealEdgeLength: 60.4,
      edgeElasticity: 3.1,
      initialEnergyOnIncremental: 3.4,
      padding: 35,
      fit: true,
      alignment: function( node ){ return { x: 10, y: 10 } },
      // position: function(ele) { 
      //   if (ele.data('title') === 'HTML') { 
      //     return { x:1.5  , y: 5 }; 
      //   } 
      //   else if (ele.data('title') === 'Configuration de bases de données') { 
      //     return { row:1.5  , col: 2 }; 
      //   } 
      //   else if (ele.data('title') === 'Découverte utilisateur') { 
      //     return { row:1.5  , col: 4 }; 
      //   } 
      //   else if (ele.data('title') === 'Administration serveur') { 
      //     return { row:1.5  , col: 6 }; 
      //   } 
      // },
      nodeSpacing: function nodeSpacing(node) {
        return 20;
      },
    },
  });

  cy.on("mouseover", function(event) {
    //Afficher les informations au survol des compétences

    var evtTarget = event.target;

    if (evtTarget !==cy) {
      var description = event.target.data("description");
      var rankDescription = event.target.data("rankDescriptions");
      var links = [event.target.data("links")];
      var maxPoint = event.target.data("maxPoints");
      var stats = [event.target.data("stats")];
      var statistique = [];

      console.log(stats.length);
      $("#description").html(` description:  ${description} <br/>`);
      $("#rankDescription").html(`<br/> rankDescription: ${rankDescription} <br/>`);
      $("#maxPoint").html(`Points Max:  ${maxPoint}`);

      stats.forEach(element => {
        //Parcourir les stats pour en afficher l'ensemble: stats = stats[][]
        var j = 0;
        var i = 0;
        var statI = stats[i].length;
        var stat = {};

        while (i < stats.length) {
          for (j = 0; j < statI; j++) {
            stat.title = stats[i][j].title;
            console.log(stat.title);
            stat.value = stats[i][j].value;
            console.log(stat.value);
          }
          i++;
        }
        console.log("statI:" + statI);
        $("#stats").html(stat.title + stat.value);
      });

      links.forEach(element => {
        //Obtenir les labels et liens
        var link = {};
        var i = 0;
        while (i < links.length) {
          for (var j = 0; j < links[i].length; j++) {
            link.label = links[i][j].label;
            console.log("label: " + link.label);

            link.url = links[i][j].url;
            console.log(link.url);
            $("#links").html(`label:  ${link.label}  <br/> url: ${link.url}`);
          }
          
          i++;
        }
      });
    }
 
});


cy.ready(function(){
  var initParent = [];
  var html= cy.filter("node[title = 'HTML']");
  var cbd = cy.filter("node[title ='Configuration de bases de données']");
  var du = cy.filter("node[title = 'Découverte utilisateur']");
  var as= cy.filter("node[title = 'Administration serveur']");
  initParent.push(html, cbd, du, as);
  console.log(initParent);
  
  for(var i =0; i<initParent.length; i++){
    initParent[i].addClass('initParent');
  }
  var frontEdges = [cy.filter("edge[spe = 'Front']")];
  var backEdges =[cy.filter("edge[spe = 'Back']")];  

  for(var i =0; i<frontEdges.length; i++){
    frontEdges[i].addClass("front");
  }
  for(var i =0; i<backEdges.length; i++){
    backEdges[i].addClass("back");
  }
  
  
  
})
cy.on('tap', 'node', function(){


  var nodes = this;
  var tapped = nodes;
  var child = [];
    // If the element is set
    // If the element is set
  nodes.addClass('parent');
  
  for(;;){
    var connectedEdges = nodes.connectedEdges(function(el){
      return !el.target().anySame( nodes );
    });

    var connectedTargets = connectedEdges.targets();

    Array.prototype.push.apply( child, connectedTargets );
    nodes = connectedTargets;

    if( nodes.empty() ){ break; }
  }
  var delay = 0;
  var duration = 300;
  if(!this.hasClass('clicked')){ 
  for( var i = child.length -1; i >= 0; i-- ){ (function(){
   
    var thischild = child[i];
    var parent = thischild.connectedEdges(function(el){
      return el.target().same(thischild);
    }).source();


    thischild.delay( delay, function(){
      parent.addClass('eating');
    } ).animate({
      position: parent.position(),
      css: {
        'width': 10,
        'height': 10,
        'border-width': 0,
        'opacity': 0
      }
    },
     {
      duration: duration,
      complete: function(){
        thischild.remove();
        parent.addClass('parentNode');
      }
    });

    delay += duration;
  })(); } // for
  this.addClass('clicked');
  }
  else{
    var connectedEdges = nodes.connectedEdges(function(el){
      return el.target().anySame( nodes );
    });
    console.log(connectedEdges)
    // console.log(nodes);
    // var parent = child.connectedEdges(function(el){
    //   return el.target().same(thischild);
    // }).source();
    // console.log(parent);
    for( var i = 0; i<child.length; i++ ){ (function(){
      
      var thischild = child[i];
      var parent = thischild.connectedEdges(function(el){
        return el.target().same(thischild);
      }).source();
  
  
      thischild.delay( delay, function(){
        parent.addClass('restore');
      } ).animate({
        position: parent.position(),
        css: {
          'width': 10,
          'height': 10,
          'border-width': 0,
          'opacity': 0.5
        }
      },
       {
        duration: duration,
        complete: function(){
          parent.addClass('parentNode');
        }
      });
  
      delay += duration;
    })(); }     
  }
}); // on tap
});
