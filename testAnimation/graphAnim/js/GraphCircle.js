
document.addEventListener("DOMContentLoaded", function() {

  // function TalentTree(_e) {
  //   var e = _e || {};
  //   var self = this;

  //   //constants for hash generation
  //   var asciiOffset = 96; //64 for caps, 96 for lower
  //   var hashDelimeter = "_";

  //   var numPortraits = 5;

  //   //Intro vs Talent Tree UI state
  //   self.isOpen = ko.observable(false);
  //   self.open = function() {
  //     self.isOpen(false);
  //   };
  //   self.close = function() {
  //     self.isOpen(true);
  //   };
  //   self.toggle = function() {
  //     self.isOpen(!self.isOpen());
  //   };
  // }
  // ko.applyBindings(new TalentTree());

  var layoutType = 0;

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
          "background-color": "#ad1a66"
        }
      },
      {
        // liens entre les compétences
        selector: "edge",
        style: {
          // label: "data(spe)",
          "line-color": "#ad1a66",
          // width: "5px",
          "target-arrow-shape": "triangle",
          width: 8,
          "line-color": "#888",
          "target-arrow-color": "#888",
          "source-arrow-color": "#888"
        }
      },
      {
        //les compétences n'ayant pas de sources
        selector: ".initParent",
        style: {
          width: "300px",
          height: "300px",
          color: "green",
          "background-color": "red",
          "border-color": "#a3c60b",
          "border-width": "10px"
        }
      },
      {
        selector: "$node > node",
        css: {
          "padding-top": "10px",
          "padding-left": "10px",
          "padding-bottom": "10px",
          "padding-right": "10px",
          "text-valign": "top",
          "text-halign": "center"
        }
      },
      {
        selector: "#front",
        style: {
          "background-color": "#42f4e8"
        }
      },
      {
        selector: "#back",
        style: {
          "background-color": "#415cf4"
        }
      },
      {
        selector: "#devops",
        style: {
          "background-color": "#416614"
        }
      },
      {
        selector: "#design",
        style: {
          "background-color": "#E15cf4"
        }
      },
      // {
      //   selector: ".front",
      //   style: {
      //     "line-color": "#42f4e8"
      //   }
      // },
      // {
      //   selector: ".back",
      //   style: {
      //     "line-color": "#415cf4"
      //   }
      // },
      // {
      //   selector: ":nonorphan",
      //   style: {
      //     "background-color": "yellow"
      //     // 'background-opacity': 0.333
      //   }
      // },
      {
        selector: ":grabbed",
        style: {
          "background-opacity": 0.95
        }
      },
      {
        selector: ":nodes",
        style: {
          "background-color": "orange"
        }
      }
    ],
    layout: layoutList[layoutType]
  });

  // setLayout();
  // $("#cy").toggle();

  $("#close").click(function() {
    $("#cy").toggle();
  });
  $("#open").click(function() {
    $("#cy").toggle();
  });

  cy.on("click", function(event) {
    //Afficher les informations au survol des compétences

    var evtTarget = event.target;

    if (evtTarget !== cy) {
      var description = event.target.data("description");
      var rankDescriptions = event.target.data("rankDescriptions");
      console.log(rankDescriptions)
      var links = [event.target.data("links")];
      var maxPoint = event.target.data("maxPoints");
      var stats = [event.target.data("stats")];
      var statistique = [];

      if (typeof description != "undefined") {
        $("#description").html(` description:  ${description} <br/>`);
      } 


      //RANK

      if (typeof rankDescriptions != ["undefined"]) {
      
        for(var i=0; i<rankDescriptions.length; i++){
          
          var rankDescription = [rankDescriptions[i]]
          console.log(rankDescription);
          rankDescriptions.forEach(function(){
          $("#rankDescriptions").html(` Votre évolution: <ul><li><input type="checkbox"/> ${rankDescriptions}</li><br/></ul>`);
        })
        }
        
        }

      //END RANK


      if (typeof maxPoint != "undefined") {
        $("#maxPoint").html(`Points Max:  ${maxPoint}`);
      }
      if (typeof stats.length != ["undefined"]) {
        stats.forEach(element => {
          //Parcourir les stats pour en afficher l'ensemble: stats = stats[][]
          var j = 0;
          var i = 0;

          var stat = {};
          if (typeof stats[i] != "undefined") {
            while (i < stats.length) {
              var statI = stats[i].length;
              for (j = 0; j < statI; j++) {
                stat.title = stats[i][j].title;
                stat.value = stats[i][j].value;
              }
              i++;
              $("#stats").html(stat.title + stat.value);
            }
          }
        });
      }
      if (typeof links.length != ["undefined"]) {
        links.forEach(element => {
          //Obtenir les labels et liens
          var link = {};
          var i = 0;
          while (i < links.length) {
            if (typeof links[i] != "undefined") {
              for (var j = 0; j < links[i].length; j++) {
                link.label = links[i][j].label;
                console.log("label: " + link.label);

                link.url = links[i][j].url;
                console.log(link.url);
                $("#links").html(
                  `label:  ${link.label}  <br/> url: ${link.url}`
                );
              }
            }

            i++;
          }
        });
      }
    }
    $("#mainModal").toggle(true);

  });

  var initParent = [];
  cy.ready(function() {
    var html = cy.filter("node[title = 'HTML']");
    var cbd = cy.filter("node[title ='Configuration de bases de données']");
    var du = cy.filter("node[title = 'Découverte utilisateur']");
    var as = cy.filter("node[title = 'Administration serveur']");
    initParent.push(html, cbd, du, as);
    console.log(initParent);

    for (var i = 0; i < initParent.length; i++) {
      initParent[i].addClass("initParent");
    }
    var frontEdges = [cy.filter("edge[spe = 'Front']")];
    var backEdges = [cy.filter("edge[spe = 'Back']")];

    for (var i = 0; i < frontEdges.length; i++) {
      frontEdges[i].addClass("front");
    }
    for (var i = 0; i < backEdges.length; i++) {
      backEdges[i].addClass("back");
    }
  });

  var removed;
  /* cy.on("tap", "node", function() {
    var ModalDescription = event.target.data("description");
    var ModalrankDescription = event.target.data("rankDescriptions");
    var Modallinks = [event.target.data("links")];
    var ModalmaxPoint = event.target.data("maxPoints");
    var Modalstats = [event.target.data("stats")];
    var Modalstatistique = [];
*/

  // if (this.scratch().restData == null) {
  //   //     // Save node data and remove
  //   this.scratch({
  //     restData: this.successors().targets().remove(),
  //     restEdge: this.connectedEdges(),
  //     restSource: this,SkillsElements
  //   });
  //   console.log(this.scratch().restSource);

  //   var delay = 0;
  //   var duration = 300;
  //   this.scratch().restData.restore().delay(delay, function() {})
  //   .animate(
  //       {
  //         position: this.sources().position(),
  //         css: {
  //           "border-width": 0,
  //           opacity: 0
  //         }
  //       },
  //       {
  //         duration: duration,
  //         complete: function() {
  //         }
  //       }
  //     )
  //     this.scratch().restSource.delay(delay, function() {})
  //     .animate(
  //         {
  //           css: {
  //             transform: scale(3),
  //             "border-width": 1,
  //             opacity: 1
  //           }
  //         },
  //         {
  //           duration: duration,
  //           complete: function() {
  //           }
  //         }
  //       )

  // } else {

  //     var delay = 0;
  //     var duration = 300;
  //     this.scratch().restEdge.delay(delay, function() {})
  //     .animate(
  //       {
  //         css: {
  //           "border-width": 0,
  //           opacity: 1
  //         }
  //       },
  //       {
  //         duration: duration,
  //         complete: function() {
  //         //this.scratch().restEdge.remove();
  //         }
  //       }
  //     );
  //   // Restore the removed nodes from saved data

  // this.scratch().restData.delay(delay, function() {})
  //     .animate(
  //       {
  //         position: this.targets().position(),
  //         css: {
  //           "border-width": 0,
  //           opacity: 1
  //         }
  //       },
  //       {
  //         duration: duration,
  //         complete: function() {
  //         //this.scratch().restEdge.remove();
  //       }
  //     }
  //     );
  //   // Restore the removed nodes from saved data

  //   this.scratch({
  //     restData: null
  //   });
  //}

  /* }
    }),
     {
      duration: duration,
      complete: function(){
      } 
    }

    delay += duration;
    // for
 */
  /*
  var nodes = this;
  var tapped = nodes;
  var child = [];
    // If the element is set
    // If the element is set
nodes.addClass('parent');
 if(!this.hasClass('clicked')){ 
  
  for(;;){
    var connectedEdges = nodes.connectedEdges(function(el){
      
      return !el.target().anySame( nodes );
    });

    var connectedTargets = connectedEdges.targets();

    Array.prototype.push.apply(child, connectedTargets);
    nodes = connectedTargets;
    var saveNodes=localStorage.getItem(child, connectedTargets); 

    if( nodes.empty() ){ 
      break;
    }
  }
  var delay = 0;
  var duration = 300;



   
  for( var i = child.length -1; i >= 0; i-- ){ (function(){

    localStorage.setItem(child, connectedTargets);

     //Check Save Nodes
    // child.forEach(function(saveNodes) {
    // console.log(saveNodes);
    // })


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
  
    // console.log(nodes);
    // var parent = child.connectedEdges(function(el){
    //   return el.target().same(thischild);
    // }).source();
    // console.log(parent);  
  }
 
    else{
      
      nodes= localStorage.getItem(child, connectedTargets);
 
  for(;;){
    var connectedEdges = this.connectedEdges(function(el){
      
      return el.target().anySame( nodes );
    });

    var connectedTargets = connectedEdges.targets();

    Array.prototype.push(child, connectedTargets);
    node = connectedTargets;
   
  }
  var delay = 0;
  var duration = 300;

       child.forEach(function(nodes) {
         var connectedEdges = nodes;
         var connectedTargets= connectedEdges.targets();
         console.log("connected: ");
         console.log(connectedTargets);
         Array.prototype.push(child, connectedTargets);
          console.log(child)
          })
     this.connectedEdges(function(el){
       return el.target().anySame(connectedTargets );
     });

     for( var i = 0; i< child.length; i++ ){ (function(){

      var thischild = child[i];
      var parent = thischild.connectedEdges(function(el){
        return el.target().same(thischild);
      }).source();
   
  
      this.delay( delay, function(){
        parent.classList.remove('eating');
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
      }); 
  
      delay += duration;
  // for

 /*  })
  }}
 */
  //}); // on tap

  function setNextLayout() {}

  document.getElementById("changeLayout").addEventListener("click", function() {
    // Choose iterate on layout type
    layoutType = (layoutType + 1) % layoutList.length;

    var layout = cy.layout(layoutList[layoutType]);

    layout.run();
  });
});

// List of layouts to choose from
let layoutList = [
  {
    name: "cose-bilkent",
    animate: true

    // refresh: 3,
    // boundingBox: { x: 9, y: 6, w: 2, h: 20 },
    // nodeDimensionsIncludeLabels: true,
    // avoidOverlap: true,
    // handleDisconnected: true,
    // idealEdgeLength: 10.4,
    // edgeElasticity: 0.1,
    // Gravity range (constant) for compounds
    // gravityRangeCompound: 2999.5,
    // Gravity force (constant) for compounds
    // gravityCompound: 0,
    // nestingFactor: 0.0000001,
    // Gravity force (constant)
    // gravity: 2000.25,

    // initialEnergyOnIncremental: 3.4,
    // padding: 35,
    // fit: true,
    // alignment: function(node) {
    //   return { x: 10, y: 10 };
    // },
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
    // nodeSpacing: function nodeSpacing(node) {
    //   return 5;
    // }
  },
  {
    name: "circle"
  },
  {
    name: "grid"

    // fit: true, // whether to fit the viewport to the graph
    // padding: 30, // the padding on fit
    // boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
    // avoidOverlap: true, // prevents node overlap, may overflow boundingBox and radius if not enough space
    // nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
    // spacingFactor: undefined, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
    // radius: undefined, // the radius of the circle
    // startAngle: 3 / 2 * Math.PI, // where nodes start in radians
    // sweep: undefined, // how many radians should be between the first and last node (defaults to full circle)
    // clockwise: true, // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
    // sort: undefined, // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
    // animate: true, // whether to transition the node positions
    // animationDuration: 500, // duration of animation in ms if enabled
    // animationEasing: undefined, // easing of animation if enabled
    // animateFilter: function ( node, i ){ return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
    // ready: undefined, // callback on layoutready
    // stop: undefined, // callback on layoutstop
    // transform: function (node, position ){ return position; } // transform a given node position. Useful for changing flow direction in discrete layouts
  },
  {
    name: "breadthfirst",

    // fit: true, // whether to fit the viewport to the graph
    directed: true, // whether the tree is directed downwards (or edges can point in any direction if false)
    // padding: 30, // padding on fit
    circle: true // put depths in concentric circles if true, put depths top down if false
    // spacingFactor: 1.75, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
    // boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
    // avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
    // nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
    // roots: undefined, // the roots of the trees
    // maximalAdjustments: 0, // how many times to try to position the nodes in a maximal way (i.e. no backtracking)
    // animate: true, // whether to transition the node positions
    // animationDuration: 500, // duration of animation in ms if enabled
    // animationEasing: undefined, // easing of animation if enabled,
    // animateFilter: function ( node, i ){ return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
    // ready: undefined, // callback on layoutready
    // stop: undefined, // callback on layoutstop
    // transform: function (node, position ){ return position; }
  },
  {
    name: "concentric",

    // fit: true, // whether to fit the viewport to the graph
    // padding: 30, // the padding on fit
    // startAngle: 3 / 2 * Math.PI, // where nodes start in radians
    // sweep: undefined, // how many radians should be between the first and last node (defaults to full circle)
    // clockwise: true, // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
    equidistant: true, // whether levels have an equal radial distance betwen them, may cause bounding box overflow
    // minNodeSpacing: 10, // min spacing between outside of nodes (used for radius adjustment)
    // boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
    // avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
    // nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
    // height: undefined, // height of layout area (overrides container height)
    // width: undefined, // width of layout area (overrides container width)
    // spacingFactor: undefined, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
    // concentric: function( node ){ // returns numeric value for each node, placing higher nodes in levels towards the centre
    // return node.degree();
    // },
    // levelWidth: function( nodes ){ // the letiation of concentric values in each level
    // return nodes.maxDegree() / 4;
    // },
    animate: true // whether to transition the node positions
    // animationDuration: 500, // duration of animation in ms if enabled
    // animationEasing: undefined, // easing of animation if enabled
    // animateFilter: function ( node, i ){ return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
    // ready: undefined, // callback on layoutready
    // stop: undefined, // callback on layoutstop
  }
];

function addImage(pk) {
  alert("addImage: " + pk);
}

$("#myModal .save").click(function(e) {
  e.preventDefault();
  addImage(5);
  $("#myModal").modal("hide");
  //$(this).tab('show')
  return false;
});
