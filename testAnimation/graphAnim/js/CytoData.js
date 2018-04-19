var SkillsElements = {
  nodes: 
  [
    {
      data: {
        id: "front",
        description:
          ""
      },
    }, 
    {
      data: {
        id: "back",
        description:
          ""
      },
    },
    {
      data: {
        id: "devops",
        description:
          ""
      },
    },
    {
      data: {
        id: "design",
        description:
          ""
      },
    },   
    {

      data: {
        id: 1,
        title: "HTML",
        parent: 'front',
        description:
          "Principale langue du web, le HTML est constituté de texte encadré de balises. ",
        rankDescriptions: [
          "Savoir construire une page web simple",
          "Savoir creer des liens, faire une page multi-colonnes, travailler avec des champs de formulaires et balises medias."
        ],
        links: [
          {
            label: "HTML.net Tutorials",
            url: "http://www.html.net/tutorials/html/"
          },
          {
            label: "Sublime Text et Atom",
            url: "http://lesbricodeurs.fr/articles/Sublime-Text-vs-Atom/"
          },
          {
            label: "Notre prochaine session Web 101",
            url: "http://lesbricodeurs.fr/evenements/"
          }
        ],
        maxPoints: 2,
        stats: [
          {
            title: "Webmarketing",
            value: 1
          },
          {
            title: "Sens du visuel",
            value: 1
          },
          {
            title: "Reseau",
            value: 1
          }
        ],
      },
      position:{
        x:-4550.1,
        y:3.5,
    },
    group: "nodes"   
  },

    {
      data: {
        id: 2,
        title: "CSS",
        parent: 'front',
        links: [
          {
            label: "Tutoriaux CSS",
            url: "http://www.htmldog.com/guides/css/"
          },
          {
            label: "Puis je utiliser X? Le support des navigateurs",
            url: "http://caniuse.com/#cats=CSS"
          }
        ],
        maxPoints: 2,
        stats: [
          {
            title: "Sens du visuel",
            value: 3
          }
        ],
        rankDescriptions: [
          "Etre familier avec les notions de bases de la mise en forme CSS et le concept de box.",
          "Vous connaissez les media queries et le responsive design  pour vous adapter à tous les supports"
        ],
        description:
          "Cascading Style Sheets (CSS) est un langage pour changer visuellement les pages webs.  Le CSS vise des élements du HTML pour modifier la couleur, la taille de la police...",
        talents: ["Stylé"]
      }
    },
    {
      data: {
        id: 3,
        title: "CSS avancé",
        parent: "front",
        links: [
          {
            label: "Sass vs. LESS",
            url: "http://css-tricks.com/sass-vs-less/"
          },
          {
            label: "LESS",
            url: "http://lesscss.org/"
          },
          {
            label: "Sass",
            url: "http://sass-lang.com/"
          },
          {
            label: "Stylus",
            url: "http://learnboost.github.io/stylus/"
          }
        ],
        maxPoints: 2,
        rankDescriptions: [
          "Vous êtes à l'aise avec les varialbesl et le nesting",
          "Vous pouvez utiliser des outils avancés comme les mix-ins et parfois écrire les votres."
        ],
        description:
          "Les preprocesseurs comme LESS et SASS permettent d'ajouter des fonctionnalités au CSS comme les fonctions, les variables..",
        stats: [
          {
            title: "Sens du visuel",
            value: 2
          },
          {
            title: "Design",
            value: 1
          }
        ]
      }
    },
    {
      data: {
        id: 4,
        title: "Maitrise du web design",
        parent: "front",
        description:
          "Vous pouvez réaliser vos idées en les transformant en page HTML avec le CSS adapté",
        stats: [
          {
            title: "Sens du visuel",
            value: 10
          }
        ]
      }
    },
    {
      data: {
        id: 5,
        title: "Effets jQuery",
        parent:"front",
        links: [
          {
            label: "Codecademy jQuery",
            url: "http://www.codecademy.com/tracks/jquery"
          },
          {
            label: "jQuery : Manipulation",
            url: "http://api.jquery.com/category/manipulation/"
          },
          {
            label: "jQuery : Effects",
            url: "http://api.jquery.com/category/effects/"
          }
        ],
        maxPoints: 3,
        rankDescriptions: [
          "Vous êtes familier avec la manipulation du DOM (Document Object Model) - modifier des valeurs, contenus .. ",
          "Vous êtes familier avec l'ajout d'une animation à une page web",
          "Vous êtes familier la création et l'ajout d'effets originaux à une page"
        ],
        description:
          "jQuery fourni des techniques et méthodes pour la manipulation des éléments d'une page web, coté client",
        talents: ["Effet Wow"],
        stats: [
          {
            title: "Sens du visuel",
            value: 2
          },
          {
            title: "Design",
            value: 1
          }
        ]
      }
    },

    {
      data: {
        id: 6,
        parent: 'HTML',
        title: "Référencement (SEO)",
        parent: "front",
        links: [
          {
            label: "Search Engine Optimization (Google)",
            url: "https://support.google.com/webmasters/answer/35291"
          },
          {
            label: "Webmaster Tools (Google)",
            url: "http://www.google.com/webmasters/tools/"
          },
          {
            label: "Bing - Webmaster Tools",
            url: "http://www.bing.com/toolbox/webmaster"
          }
        ],
        description:
          "Processus pour changer le classement et la visibilité d'une page dans les résultats des moteurs de recherche",
        stats: [
          {
            title: "Webmarketing",
            value: 2
          },
          {
            title: "Gestion",
            value: 1
          }
        ]
      }
    },
    {
      data: {
        id: 7,
        title: "Analytics",
        parent: "front",
        links: [
          {
            label: "10 SEO Analysis Tools You Should Be Using",
            url: "http://www.webgnomes.org/blog/10-seo-analysis-tools/"
          },
          {
            label: "Configuring SEO data in Analytics (Google)",
            url: "https://support.google.com/analytics/answer/1308621?hl=en"
          },
          {
            label: "Using the SEO Reports (Google)",
            url: "http://www.bing.com/toolbox/webmaster"
          },
          {
            label: "Bing - SEO Analyzer",
            url: "http://www.bing.com/toolbox/seo-analyzer"
          }
        ],
        description:
          "Analytics fournit des informations sur la performance d'une page et le parcours utilisateur",
        stats: [
          {
            title: "Webmarketing",
            value: 1
          },
          {
            title: "Gestion",
            value: 2
          }
        ],
        talents: ["Attentif"]
      }
    },

    {
      data: {
        id: 8,
        title: "Javascript",
        parent: 'front',
        links: [
          {
            label: "JavaScript Tutorial",
            url: "http://www.htmldog.com/guides/javascript/"
          },
          {
            label: "Codecademy JavaScript",
            url: "http://www.codecademy.com/tracks/javascript"
          },
          {
            label: "List of Videos for Beginner JavaScript",
            url: "http://thenewboston.org/list.php?cat=10"
          },
          {
            label: "Douglas Crockford on Javascript",
            url: "http://javascript.crockford.com/"
          }
        ],
        description:
          "Javascript le langage executé principalement coté client. Il peut aussi bien modifier des éléments visuels de la page que faire des appels serveur pour charger de nouvelles informations",
        stats: [
          {
            title: "Design",
            value: 3
          }
        ]
      }
    },
    {
      data: {
        id: 9,
        title: "JS bibliothèques & Frameworks",
        parent: "front",
        links: [
          {
            label: "Rejoignez nous les lundi pour étudier AngularJS!",
            url:
              "http://www.meetup.com/fr-FR/Design-et-technologie-pour-projets-citoyens/"
          }
        ],
        maxPoints: 2,
        rankDescriptions: [
          "Vous utilisez des bibliothèques comme jQuery, MooTools, Prototype, Dojo, et YUI pour accellerer votre travail",
          "Vous utilisez des Frameworks comme Ember.js, AngularJS, and Backbone.js pour créer des fonctionnalités complexes."
        ],
        description:
          "Une fois que vous êtes à l'aise avec le Javascript, il y a une multitude de Frameworks a étudier pour transformer vos pages en véritables applications.",
        stats: [
          {
            title: "Design",
            value: 2
          },
          {
            title: "Gestion",
            value: 1
          }
        ],
        talents: ["Malin"]
      }
    },
    {
      data: {
        id: 10,
        title: "Maîtrise du développement Frontend",
        parent: "front",
        stats: [
          {
            title: "Design",
            value: 10
          }
        ]
      }
    },

    {
      data: {
        id: 11,
        title: "Programmation serveur",
        parent: 'back',
        links: [
          {
            label: "Server-side scripting Wiki",
            url: "http://en.wikipedia.org/wiki/Server-side_scripting"
          }
        ],
        description: "Developper du code qui s'execute coté serveur.",
        stats: [
          {
            title: "Reseau",
            value: 3
          }
        ]
      }
    },
    {
      data: {
        id: 12,
        title: "Frameworks serveur",
        parent: "back",
        links: [
          {
            label: "Comparison of web application frameworks",
            url:
              "http://en.wikipedia.org/wiki/Comparison_of_web_application_frameworks"
          },
          {
            label: "Web development - server side coding",
            url:
              "http://en.wikipedia.org/wiki/Web_development#Server_side_coding"
          }
        ],
        description:
          "These are software frameworks and collection of packages or modules that allow developers to write applications or services without having to handle the overhead of common activities and lower level details, such as session management, database access, etc.",
        stats: [
          {
            title: "Reseau",
            value: 2
          },
          {
            title: "Gestion",
            value: 1
          }
        ],
        talents: ["Musclé"]
      }
    },

    {
      data: {
        id: 13,
        title: "Configuration de bases de données",
        parent: "back",
        links: [
          {
            label: "w3schools.com SQL Tutorial",
            url: "http://www.w3schools.com/sql/"
          },
          {
            label: "SQLZOO Interactive SQL Tutorial",
            url: "http://sqlzoo.net/wiki/"
          },
          {
            label: "Database Normalization Wiki",
            url: "https://en.wikipedia.org/wiki/Database_normalization"
          }
        ],
        maxPoints: 2,
        rankDescriptions: [
          "You understand how to setup tables.",
          "You understand how relational databases organize data."
        ],
        description:
          "Databases are powerful engines for storing, organizing, and retrieving data.  There is a wide variety of database platforms to choose from.  The most widely used database language is Structured Query Language (SQL).  Properly architecting your data will facilitate your site&rsquo;s server-side programming.",
        stats: [
          {
            title: "Reseau",
            value: 3
          }
        ]
      },
      position:{
        x:-56.76,
        y:1011.4466887
    },
    },
    {
      data: {
        id: 14,
        title: "Gestion avancée de bases de données",
        parent: "back",
        links: [
          {
            label: "Stored Procedure - Wiki",
            url: "http://en.wikipedia.org/wiki/Stored_procedure"
          },
          {
            label: "User-defined function Wiki",
            url: "http://en.wikipedia.org/wiki/User_defined_function"
          },
          {
            label: "Database Tuning Wiki",
            url: "http://en.wikipedia.org/wiki/Database_tuning"
          },
          {
            label:
              "Performance Monitoring and Tuning How-to Topics (SQL Server)",
            url:
              "http://technet.microsoft.com/en-us/library/ms187830(v=sql.105).aspx"
          },
          {
            label: "Sql Server Performance Tuning Tips",
            url:
              "http://www.mssqltips.com/sql-server-tip-category/9/performance-tuning/"
          },
          {
            label: "Oracle database Performance Tuning FAQ",
            url:
              "http://www.orafaq.com/wiki/Oracle_database_Performance_Tuning_FAQ"
          }
        ],
        maxPoints: 2,
        rankDescriptions: [
          "You write stored procedures and user-defined functions for more efficient querying.",
          "You can detect causes of performance deficiencies and fine tune a database like a rock star."
        ],
        description:
          "Besides creating basic tables and relating data, databases allow for the creation of stored procedures, sets of SQL statements that are stored in the database, and user-defined functions (UDFs) , functions that can be used in SQL statements.  Just architecting the database is not enough.  The database also needs to be optimized or tuned to increase performance.",
        stats: [
          {
            title: "Reseau",
            value: 2
          },
          {
            title: "Design",
            value: 1
          }
        ],
        talents: ["Super Sac à dos"]
      }
    },

    {
      data: {
        id: 15,
        title: "Maitrise du développement serveur",
        parent: "back",
        description:
          "You are capable of architecting and building an application's backend to efficiently store and retrieve data.",
        stats: [
          {
            title: "Reseau",
            value: 10
          }
        ]
      }
    },
    {
      data: {
        id: 16,
        title: "Authentication et Authorisations",
        parent: "back",
        links: [
          {
            label: "ASP.NET authentication and authorization - CodeProject",
            url:
              "http://www.codeproject.com/Articles/98950/ASP-NET-authentication-and-authorization"
          },
          {
            label: "OpenID Wiki (authentication)",
            url: "http://en.wikipedia.org/wiki/OpenID"
          },
          {
            label: "OAuth Community",
            url: "http://oauth.net/"
          },
          {
            label: "ASP.NET Authorization",
            url:
              "http://msdn.microsoft.com/en-us/library/wce3kxhd(v=vs.100).aspx"
          }
        ],
        description:
          "Authentication is the process determining whether someone or something is who or what it is declared to be. Authorization is the process of determining if a user is allowed to perform an action or has access to a resource.",
        stats: [
          {
            title: "Admin",
            value: 5
          }
        ],
        talents: ["Chercheur de vérité"]
      }
    },
    {
      data: {
        id: 17,
        title: "AJAX & APIs",
        parent: 'front',
        links: [
          {
            label: "AJAX (programming) Wiki",
            url: "http://en.wikipedia.org/wiki/Ajax_(programming)"
          },
          {
            label: "List of Videos for AJAX",
            url: "http://thenewboston.org/list.php?cat=61"
          },
          {
            label: "Ajax: The Official Microsoft ASP.NET Site",
            url: "http://www.asp.net/ajax"
          },
          {
            label: "Web Service Wiki",
            url: "http://en.wikipedia.org/wiki/Web_service"
          },
          {
            label: "Representational state transfer (REST) Wiki",
            url: "http://en.wikipedia.org/wiki/Representational_state_transfer"
          }
        ],
        description:
          "Technology exists to allow separate systems to communicate between each other in various ways as well as allowing interfaces to be more intractive.  These include the use of Asynchronous JavaScript and XML (AJAX), usually on the client-side, to communicate with an external system.  Other technologies, such as web services, are used to setup end-points for allowing communication with an external system.",
        stats: [
          {
            title: "Reseau",
            value: 1
          },
          {
            title: "Design",
            value: 1
          },
          {
            title: "Webmarketing",
            value: 1
          }
        ],
        talents: ["Tisseur"]
      }
    },

    {
      data: {
        id: 18,
        title: "Découverte utilisateur",
        parent:"design",
        maxPoints: 2,
        rankDescriptions: [
          "Vous savez poser les bonnes questions, et utiliser des croquis pour confirmer vos idées",
          "Vous utilisez des techniques avancées comme les parcours utilisateurs pour mener les conversations avec des parties prenantes."
        ],
        links: [
          {
            label: "The anatomy of an experience map",
            url:
              "http://www.adaptivepath.com/ideas/the-anatomy-of-an-experience-map"
          }
        ],
        description:
          "Avant de concevoir quoi que ce soit, il faut prendre le temps de comprendre le besoin du client et de l'utilisateur final",
        stats: [
          {
            title: "Gestion",
            value: 2
          },
          {
            title: "Sens du visuel",
            value: 1
          }
        ],
        talents: ["Télépathie"]
      },
      position:{
        x:-0.35,
        y:-2.9,
    },
    },
    {
      data: {
        id: 19,
        title: "Design graphique",
        parent: "design",
        maxPoints: 2,
        rankDescriptions: [
          "You can create a balanced, complementary layout with a clear message.",
          "You understand how to create a strikingly unique design, which supports traditional design values as well as your underlying message."
        ],
        links: [
          {
            label: "Graphic Design Wiki",
            url: "http://en.wikipedia.org/wiki/Graphic_design"
          },
          {
            label: "Behance",
            url: "http://www.behance.net/"
          },
          {
            label: "User experience design Wiki",
            url: "http://en.wikipedia.org/wiki/User_experience_design"
          },
          {
            label: "Awwwards",
            url: "http://www.awwwards.com/"
          }
        ],
        description:
          "Graphic design is about aesthetics and usability. Good designs are inviting and easy to understand, by solid use of color, typography, balance, hierarchy and white space.",
        stats: [
          {
            title: "Sens du visuel",
            value: 3
          }
        ],
        talents: ["Artiste"]
      }
    },
    {
      data: {
        id: 20,
        title: "Outils de design graphique",
        parent: "design",
        links: [
          {
            label:
              "100 Top Tools for Graphic Designers | Graphic Design Classes",
            url: "http://graphicdesignclasses.net/design-tools/"
          }
        ],
        description:
          "Software such as Photoshop and devices like drawing tablets are used to create layouts, work with type, touch-up photos, and other activities to add professional polish to your designs.",
        stats: [
          {
            title: "Sens du visuel",
            value: 2
          },
          {
            title: "Webmarketing",
            value: 1
          }
        ]
      }
    },
    {
      data: {
        id: 21,
        title: "Prototypes",
        parent:"design",
        links: [
          {
            label: "Design Better And Faster With Rapid Prototyping",
            url:
              "http://www.smashingmagazine.com/2010/06/16/design-better-faster-with-rapid-prototyping/"
          },
          {
            label: "16 Design Tools for Prototyping and Wireframing",
            url: "http://www.sitepoint.com/tools-prototyping-wireframing/"
          }
        ],
        description:
          "Modeling a new design without building all the underlying functionality is a fast and efficient way to convey ideas, test a new concept, and identify problems you didn't anticipate.",
        stats: [
          {
            title: "Gestion",
            value: 1
          },
          {
            title: "Webmarketing",
            value: 2
          }
        ],
        talents: ["Incantateur"]
      }
    },
    {
      data: {
        id: 22,
        title: "Maîtrise de l'expérience utilisateur",
        parent: "design",
        description:
          "You are capable of converting project requirements to an attractive design that promotes a pleasant user experience.",
        stats: [
          {
            title: "Gestion",
            value: 1
          },
          {
            title: "Sens du visuel",
            value: 2
          }
        ]
      }
    },
    {
      data: {
        id: 23,
        title: "Tests utilisateur",
        parent:"design",
        links: [
          {
            label: "My big list of 24 Web Site Usability Testing Tools",
            url: "http://www.usefulusability.com/24-usability-testing-tools/"
          },
          {
            label: "Usability Testing Wiki",
            url: "http://en.wikipedia.org/wiki/Usability_testing"
          }
        ],
        description:
          "It is a technique, also known as usability testing, that is used to evaluate a website by testing it on users.",
        stats: [
          {
            title: "Sens du visuel",
            value: 1
          },
          {
            title: "Gestion",
            value: 2
          }
        ],
        talents: ["Alchimiste"]
      }
    },

    {
      data: {
        id: 24,
        title: "Administration serveur",
        parent: "devops",
        links: [
          {
            label: "Comparison of web server software Wiki",
            url:
              "http://en.wikipedia.org/wiki/Comparison_of_web_server_software"
          },
          {
            label: "Apache mod_rewrite - Apache HTTP Server",
            url: "http://httpd.apache.org/docs/2.4/rewrite/"
          }
        ],
        maxPoints: 2,
        rankDescriptions: [
          "You are capable of setting up your application in a new environment.",
          "Vous êtes familier avec server-side URL rewriting tools like mod_rewrite."
        ],
        description:
          "Even the simplest web applications will require a server to run them.  There are several popular and fully-featured web servers to choose from, though your application's server-side programming language may limit your options.  Learning to manage and configure your web server will help you keep your site up and running smoothly.",
        stats: [
          {
            title: "Admin",
            value: 3
          }
        ],
        talents: ["Grand Intendant"]
      }
    },
    {
      data: {
        id: 25,
        title: "Déploiement",
        parent:"devops",
        links: [
          {
            label: "SSL Certificate Installation",
            url: "http://www.sslshopper.com/ssl-certificate-installation.html"
          },
          {
            label: "Minimize payload size - Google Developers",
            url:
              "https://developers.google.com/speed/docs/best-practices/payload"
          },
          {
            label: "Parallelize downloads across hostnames - Google Developers",
            url:
              "https://developers.google.com/speed/docs/best-practices/rtt#ParallelizeDownloads"
          }
        ],
        maxPoints: 2,
        rankDescriptions: [
          "You minify your public-facing files and serve compressed files to save bandwidth and improve your site&raquo;s speed.",
          "You secure sensitive traffic over HTTPS using an SSL certificate."
        ],
        description:
          "Before sharing your application with the world, follow the best practices for security and performance on the server.",
        stats: [
          {
            title: "Admin",
            value: 2
          },
          {
            title: "Design",
            value: 1
          }
        ],
        talents: ["Téléporteur"]
      }
    },

    // {
    //   data: {
    //     id: 26,
    //     title: "Maître du développement web",
    //     dependsOn: [4, 5, 10, 15, 22, 25],
    //     links: [
    //       {
    //         label: "Web Development Wiki",
    //         url: "http://en.wikipedia.org/wiki/Web_development"
    //       }
    //     ],
    //     description:
    //       "This refers to designing, creating, and maintaining a website.",
    //     stats: [
    //       {
    //         title: "Sens du visuel",
    //         value: 3
    //       },
    //       {
    //         title: "Design",
    //         value: 3
    //       },
    //       {
    //         title: "Admin",
    //         value: 3
    //       },
    //       {
    //         title: "Webmarketing",
    //         value: 3
    //       },
    //       {
    //         title: "Reseau",
    //         value: 3
    //       },
    //       {
    //         title: "Gestion",
    //         value: 3
    //       }
    //     ],
    //     talents: ["Demidieu"]
    //   }
    // },
  ],
  
//Liens entre les compétences 
  edges: 
  [
    {
      data: {
        id: "HTML",
        spe: "Front",
        source:undefined,
        target: 1,
      },
    },
    {
      data: {
        id: "CSS",
        spe: "Front",
        source: 1,
        target: 2
      }
    },
    {
      data: {
        id: "CSS avancé",
        spe: "Front",
        source: 2,
        target: 3
      }
    },
    {
      data: {
        id: "Maitrise du web design",
        spe: "Front",
        source: 2,
        target: 4
      }
    },
    {
      data: {
        id: "Effets jQuery",
        spe: "Front",
        source: 4,
        target: 5
      }
    },
    {
      data: {
        // DHAP is in equilibrium with GADP; only GADP moves pathway forward
        id: "Référencement (SEO)",
        spe: "",
        source: 1,
        target: 6
      }
    },
    {
      data: {
        id: "Analytics",
        spe: "",
        // 4 is GADP, 5 is DHAP and is therefore skipped over
        source: 6,
        target: 7
      }
    },
    {
        data: {
          id: "Javascript",
          spe: "Front",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 1,
          target: 8
        }
      },
      {
        data: {
          id: "JS bibliothèques & Frameworks",
          spe: "Front",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 8,
          target: 9
        }
      },
      {
        data: {
          id: "Maîtrise du développement Frontend",
          spe: "Front",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 9,
          target: 10
        }
      },
      {
        data: {
          id: "Programmation serveur",
          spe: "Back",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 1,
          target: 11
        }
      },
      {
        data: {
          id: "Frameworks serveur",
          spe: "Back",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 11,
          target: 12
        }
      },
      {
        data: {
          id: "Configuration de bases de données",
          spe: "Back",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
         source: undefined,
          target: 13
        }
      },
      {
        data: {
          id: "Gestion avancée de bases de données",
          spe: "Back",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 13,
          target: 14
        }
      },
      {
        data: {
          id: "Maitrise du développement serveur",
          spe: "Back",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 14,
          target: 15
        }
      },
      {
        data: {
          id: "Maitrise du développement serveur2",
          spe: "Back",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 15,
          target: 12
        }
      },
      {
        data: {
          id: "Authentication et Authorisations",
          spe: "Back",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 15,
          target: 16
        }
      },
      {
        data: {
          id: "AJAX & APIs",
          spe: "Back",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 15,
          target: 17
        }
      },
      {
        data: {
          id: "AJAX & APIs2",
          spe: "Back",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 10,
          target: 17
        }
      },
      {
        data: {
          id: "Découverte utilisateur",
          spe: "",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
         source: undefined,
          target: 18
        }
      },
      {
        data: {
          id: "Design graphique",
          spe: "",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 18,
          target: 19
        }
      },
      {
        data: {
          id: "Outils de design graphique",
          spe: "",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 19,
          target: 20
        }
      },
      {
        data: {
          id: "Prototypes",
          spe: "",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 18,
          target: 21
        }
      },
      {
        data: {
          id: "Maîtrise de l'expérience utilisateur",
          spe: "",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 19,
          target: 22
        }
      },
      {
        data: {
          id: "Maîtrise de l'expérience utilisateur2",
          spe: "",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 21,
          target: 22
        }
      },
      {
        data: {
          id: "Tests utilisateur",
          spe: "",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 22,
          target: 23
        }
      },
      {
        data: {
          id: "Administration serveur",
          spe: "",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: undefined,
          target: 24
        }
      },
      {
        data: {
          id: "Déploiement",
          spe: "",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 24,
          target: 25
        }
      },
      {
        data: {
          id: "Maître du développement web",
          spe: "",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 25,
          target: 26
        }
      },
      {
        data: {
          id: "Maître du développement web1",
          spe: "",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 4,
          target: 26
        }
      },
      {
        data: {
          id: "Maître du développement web2",
          spe: "",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source:7,
          target: 26
        }
      },
      {
        data: {
          id: "Maître du développement web3",
          spe: "",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 10,
          target: 26
        }
      },
      {
        data: {
          id: "Maître du développement web4",
          spe: "",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 18,
          target: 26
        }   
      },
      {
        data: {
          id: "Maître du développement web5",
          spe: "",
          // 4 is GADP, 5 is DHAP and is therefore skipped over
          source: 22,
          target: 26
        }
      }
      
  ]


};
