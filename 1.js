// (function(){
    var WIDTH = 1024, HEIGHT = 768, FRAME = window.FRAME || 1;
    var svg = Snap('#screen');
    // console.log(container)
    var shape = {};
    // function
    var fun = {};
    fun.sizeBody = function(){
        var width = window.innerWidth, height = window.innerHeight;
        var transfrom = "scale(" + [height / HEIGHT, height / HEIGHT].join() + ")";
        document.body.style.webkitTransform = transfrom;
        document.body.style.transfrom = transfrom;
    }
    fun.sizeBody();
    window.addEventListener('resize',fun.sizeBody);

    var paramsTitle = {
        fontSize:"60px",
        stroke:"#f0f3f9"
    }

    var ul = {
        fontSize:"30px",
        stroke:"#f0f3f9"
    }

    var frame = {
        "1": function(){
            shape.title1 = svg.paper.text(300,50,'this is 1 screen text').attr(paramsTitle);
        },
        "2": function(){
            shape.title2 = svg.paper.text(300,50,'this is 2 screen text').attr(paramsTitle);
        },
        "3": function(){
            shape.title3  =   shape.title3 || svg.paper.text(300,50,'this is 3 screen text').attr(paramsTitle);
        },
        "4": function(){
            shape.li1 =  shape.li1 || svg.paper.text(300,150,'this is 1 li').attr(ul);

        },
        "5": function(){
            shape.li2 =   shape.li2 || svg.paper.text(300,200,'this is 2 li').attr(ul);
        },
        "6": function(){
            shape.li3 =   shape.li3 ||  svg.paper.text(300,250,'this is 3 li').attr(ul);
        },
        "7": function(){
            shape.title7 = svg.paper.text(300,250,'this is 7 TITLE').attr(paramsTitle);
        }
    },frameBack = {
        '1': function(){
            fun.remove('title1');
        },
        '2': function(){
            fun.remove('title2');
        },
        '3': function(direction){
            if (direction == "prev") {
                fun.remove('title3'); 
            }else{
                console.log('run...');
            }    
        },
        '4': function(direction){   
            if (direction == "prev") {
                fun.remove('li1');
            }else{
                 
            }           
        },
        '5': function(direction){
            if (direction == "prev") {
                fun.remove('li2');
            }else{

            }            
        },
        '6': function(direction){
            if (direction == "prev") {
                 fun.remove('li3');
            }else{
                ['li1','li2','li3'].forEach(function(name){
                    fun.remove(name);
                });
                fun.remove('title3');

            }          
        },
        '7': function(direction){
            if (direction == "prev") {
               fun.remove('title7');
                frame[3]();
                frame[4]();
                frame[5]();
                frame[6]();
            }else{
              
            }          
        },
    }

    fun.remove = function(name){
        if(shape[name]){
            shape[name].remove();
            shape[name] = null;
        }
    }
    fun.frame = function(direction){
        frame[FRAME] && frame[FRAME]();
    }
    fun.frame();

    document.addEventListener('keyup',function(event){
        //down:40
        //right:39
        //up:38
        //left:37
        console.log(FRAME);
         // console.log(shape);
        switch (event.keyCode){
            case 39: case 40:
                frameBack[FRAME] && frameBack[FRAME]('next');
                FRAME++;
                fun.frame();
                break;
            case 37: case 38:
                // console.log(FRAME);
                if(FRAME == 1) return;
                frameBack[FRAME] && frameBack[FRAME]('prev');
                FRAME--;
                fun.frame();
                break;
        }
    })

// })()