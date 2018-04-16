document.addEventListener("DOMContentLoaded", function() { 

  //Graph Cytoscape
    var cy = cytoscape({
        container: document.getElementById('cy'),
        elements: SkillsElements,
        autounselectify: true,
        style: [
          { // noeuds == Compétences 
            selector: 'node',
            style: {
              'label': 'data(title)',
               shape: "hexagon",
              'width': '200px',
              'height': '200px',
              'text-valign': 'center',
              'text-halign': 'center'
            }
          },
          { // liens entre les compétences
            selector: 'edge',
            style: {
              
              label: 'data(spe)',
              'line-color': '#ad1a66',
            }
          },
          
        ],
        layout: {
            name: 'concentric', // forme du Graphique 
            concentric: function( node ){
              return node.degree();
            },
            levelWidth: function( nodes ){
              return 2
            },
            fit: true,
            clockwise: false,
            
            equidistant: true,
            minNodeSpacing: 10,
            avoidOverlap: true,
            avoidOverlapPadding: 100,
            
            // sweep: 3,
            // clockwise: true,
            position: function(ele) {
                if (ele.data('title') === 'HTML') {
                  return { row: ele.id() - 6 , col: 0 };
                }
                else if(ele.data('dependsOn')== 1)
                {
                  return { row: ele.id() -1, row: 2 };
                }
                else if(ele.data('title')== "CSS avancé"){
                  return { row: ele.id() - 1, col: -3 };
                }
                else if(ele.data('dependsOn')== 4){
                  return { row: ele.id() - 1, col: -3 };
                }
                return { row: ele.id(), col: 1 };
              }
          },
          option:{
              concentric: function( node ){ // returns numeric value for each node, placing higher nodes in levels towards the centre
                return node.degree();
              },
              
          }
          
      });
      cy.on('mouseover', function(event){ //Afficher les informations au survol des compétences
      
        var evtTarget = event.target;
      
        if( evtTarget !== cy ){
          var description= event.target.data('description');
          var rankDescription= event.target.data('rankDescriptions');
          var links = [event.target.data('links')];
          var maxPoint =  event.target.data('maxPoints');
          var stats =  [event.target.data('stats')];
          var statistique=[];
          
          console.log(stats.length);
          $('#description').html("description: <br/>" + description + "<br/>");
          $('#rankDescription').html("rankDescription: <br/> " + rankDescription);
          $('#links').html(links);
          $('#maxPoint').html("Points Max: " +maxPoint);


          stats.forEach(element => { //Parcourir les stats pour en afficher l'ensemble: stats = stats[][]
            var j=0; 
            var i =0;
            var statI= stats[i].length;
            var stat= {}
            
            while(i<stats.length){
              for(j=0; j<statI; j++){
               
                stat.title = stats[i][j].title;
                console.log(stat.title);
                stat.value = stats[i][j].value;
                console.log(stat.value);
                
             
              }
              i++;
          }
            console.log("statI:"+ statI)
            $('#stats').html(stat.title + stat.value);
          });


           links.forEach(element => { //Obtenir les labels et liens
             var link ={};
             var i= 0;
            while( i<links.length){

              for(var j=0; j<links[i].length; j++){
              
                link.label = links[i][j].label;
                console.log("label: " + link.label);

                link.url = links[i][j].url;
                console.log(link.url);
              }
              $('#links').html("label: " + link.label + "<br/> url: " + link.url);
              i++;
            }
           })
        }
      });
 });