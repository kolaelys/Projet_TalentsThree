document.addEventListener("DOMContentLoaded", function() {
  function TalentTree(_e) {
    var e = _e || {};
    var self = this;

    //constants for hash generation
    var asciiOffset = 96; //64 for caps, 96 for lower
    var hashDelimeter = "_";

    var numPortraits = 5;

    //Intro vs Talent Tree UI state
    self.isOpen = ko.observable(false);
    self.open = function() {
      self.isOpen(false);
    };
    self.close = function() {
      self.isOpen(true);
    };
    self.toggle = function() {
      self.isOpen(!self.isOpen());
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
          "background-color": "#ad1a66"
        }
      },
      {
        // liens entre les compétences
        selector: "edge",
        style: {
          label: "data(spe)",
          "line-color": "#ad1a66",
          width: "5px"
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
        selector: ".front",
        style: {
          "line-color": "#42f4e8"
        }
      },
      {
        selector: ".back",
        style: {
          "line-color": "#415cf4"
        }
      },
      {
        selector: ":nonorphan",
        style: {
          "background-color": "yellow"
          // 'background-opacity': 0.333
        }
      },
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
    layout: {
      name: "cose-bilkent", // forme du Graphique
      animate: false,
      randomize: false,

      refresh: 3,
      boundingBox: { x: 9, y: 6, w: 2, h: 20 },
      nodeDimensionsIncludeLabels: true,
      avoidOverlap: false,
      handleDisconnected: false,
      idealEdgeLength: 60.4,
      edgeElasticity: 3.1,
      initialEnergyOnIncremental: 3.4,
      padding: 35,
      fit: true,
      alignment: function(node) {
        return { x: 10, y: 10 };
      },

      nodeSpacing: function nodeSpacing(node) {
        return 20;
      }
    }
  });

  // $("#cy").toggle();

  $("#close").click(function() {
    $("#cy").toggle();
  });
  $("#open").click(function() {
    $("#cy").toggle();
  });

  cy.on("mouseover", function(event) {
    //Afficher les informations au survol des compétences

    var evtTarget = event.target;

    if (evtTarget !== cy) {
      var description = event.target.data("description");
      var rankDescription = event.target.data("rankDescriptions");
      var links = [event.target.data("links")];
      var maxPoint = event.target.data("maxPoints");
      var stats = [event.target.data("stats")];
      var statistique = [];

      if (typeof description != "undefined") {
        $("#description").html(` description:  ${description} <br/>`);
      } else if (!rankDescription == "undefined") {
        $("#rankDescription").html(
          `<br/> rankDescription: ${rankDescription} <br/>`
        );
      }
      if (typeof maxPoint != "undefined") {
        $("#maxPoint").html(`Points Max:  ${maxPoint}`);
      }
      if (typeof(stats.length)  != ['undefined'])
       {
        stats.forEach(element => {
          //Parcourir les stats pour en afficher l'ensemble: stats = stats[][]
          var j = 0;
          var i = 0;
         
          var stat = {};
if(typeof(stats[i]) != 'undefined'){
          while (i < stats.length) {
            
              var statI = stats[i].length;
            for (j = 0; j < statI; j++) {
              stat.title = stats[i][j].title;
              console.log(stat.title);
              stat.value = stats[i][j].value;
              console.log(stat.value);
            }
            i++;
            $("#stats").html(stat.title + stat.value);
          }
        
        
        };
      })
    }
      if (typeof(links.length)  != ['undefined']) {
        links.forEach(element => {
          //Obtenir les labels et liens
          var link = {};
          var i = 0;
          while (i < links.length) {
            if(typeof(links[i]) != 'undefined'){
            for (var j = 0; j < links[i].length; j++) {
              link.label = links[i][j].label;
              console.log("label: " + link.label);

              link.url = links[i][j].url;
              console.log(link.url);
              $("#links").html(`label:  ${link.label}  <br/> url: ${link.url}`);
            }
          }

            i++;
          }
        });
      }
    }
  });

  cy.ready(function() {
    var initParent = [];
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

  cy.on("tap", "node", function() {
    if (this.scratch().restData == null) {
      //     // Save node data and remove
      this.scratch({
        restData: this.successors()
          .targets()
          .remove(),
        restEdge: this.connectedEdges(),
        restSource: this
      });
      console.log(this.scratch().restSource);

      var delay = 0;
      var duration = 300;

      this.scratch()
        .restData.restore()
        .delay(delay, function() {})
        .animate(
          {
            position: this.sources().position(),
            css: {
              "border-width": 0,
              opacity: 0
            }
          },
          {
            duration: duration,
            complete: function() {}
          }
        );
      this.scratch()
        .restSource.restore()
        .delay(delay, function() {})
        .animate(
          {
            css: {
              "border-width": 1,
              opacity: 1
            }
          },
          {
            duration: duration,
            complete: function() {}
          }
        );
    } else {
      this.scratch()
        .restData.delay(delay, function() {})
        .animate(
          {
            css: {
              "border-width": 0,
              opacity: 1
            }
          },
          {
            duration: duration,
            complete: function() {
              //this.scratch().restEdge.restore();
            }
          }
        );
      // Restore the removed nodes from saved data
      this.scratch({
        restData: null
      });
    }
  }); // on tap
});
