(function(window){
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

    var titleAttr ={
        'font-size':50,
        'fill':'#484600',
        'text-anchor':'middle'
    }
   
    // screen
    var frame = {
        '1': function(){
              var _self = shape[1] = {};
              _self.title = svg.text(512,360,'SVG').attr({
                    'font-size':180,
                    'text-anchor':'middle',
                    'fill':'l(1,0,1,1)rgba(246,241,7,1)-rgba(255,0,0,.6)',
                    'filter':svg.filter(Snap.filter.shadow(2,2,3))
              })             
        },
        //简介
        '2': function(){
               var _self = shape[2] = {};
               _self.title = svg.text(512,80,'SVG简介').attr(titleAttr);
               var ul = ['使用xml描述的矢量文件','W3C标准(1.1) (http://www.w3.org/TR/SVG11/)','浏览器支持情况(http://caniuse.com/#cats=SVG)'];
               _self.ul = svg.text(0,200,ul)
        },
        '3':function(){

        }
    
    },frameBack = {
        '1': function(){
            fun.clear();
        },
        '2': function(){
            fun.remove('title2');
        }
    }
    //remove
    fun.remove = function(name) {
        if (shape[name]) {
            shape[name].remove();
            shape[name] = null;
        }
    };
    //clear
    fun.clear = function(){
        for(var i in shape[FRAME]){
                if(shape[FRAME].hasOwnProperty(i)){
                    shape[FRAME][i].remove();
                }
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

//

})(window)