
          
            var template = Handlebars.templates['heads'];

            var headsdata = template({
            heads: [{head: "USING HANDLEBARS"},
            {head: "I AM EVENT HEAD 1"},
            {head: "I AM EVENT HEAD 2"},
            {head: "I AM EVENT HEAD 3"},
            {head: "I AM EVENT HEAD 4"}] });
 
            document.getElementById('headsdata').innerHTML += headsdata;
 