(function(window){
    var WIDTH = 1024, HEIGHT = 768, FRAME = window.location.search.split("?")[1] || 1;
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
        'x':512,
        'y':80,
        'font-size':50,
        'fill':'#d4aa00',
        'text-anchor':'middle'
    }
    var h2Attr = {
        'font-size':40,
        'fill':'#d4aa00'
    }
    var ulAttr ={
        'font-size':30,
    }

    var liAttr={
        'font-size':20,
    }
   
    // screen
    var frame = {
        //svg
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
               _self.title = svg.text(0,0,'SVG简介').attr(titleAttr);
               var ul = ['• 使用xml描述的矢量文件','• W3C标准(1.1) (http://www.w3.org/TR/SVG11/)','• 浏览器支持情况(http://caniuse.com/#cats=SVG)'];
               _self.ul = svg.text(0,0,ul).attr(ulAttr).attr({
                transform:'matrix(1,0,0,1,100,160)'
               });
               var rowArr = _self.ul.selectAll('tspan')
               for(var i = 0,len = rowArr.length; i<len; i++){
                rowArr[i].attr({x:0,y:(i+1)*45})
               }
               _self.li = svg.text(0,0,'√ IE9+').attr(liAttr).attr({
                'fill':'#c83737',
                transform:'matrix(1,0,0,1,120,360)'
               })
        },
        //案例
        '3':function(){
            var _self = shape[2];
            var h2 = svg.text(0,0,'案例').attr(h2Attr);
            var li2 = svg.text(0,0,'http://top.baidu.com').attr(liAttr).attr({
                transform:'matrix(1,0,0,1,0,35)'
            });
            _self.case = svg.g(h2,li2).attr({
                transform:'matrix(1,0,0,1,100,440)'
            })

        },
        //使用方式
        '4':function(){
            var _self = shape[4] = {};
            _self.title = svg.text(0,0,'使用方式').attr(titleAttr);
            var ul = ['• 浏览器直接打开','• 在HTML中使用<img>标签引用','• 直接在HTML中使用SVG标签','• 作为CSS背景'];
            _self.ul = svg.text(0,0,ul).attr(ulAttr).attr({
                transform:'matrix(1,0,0,1,100,160)'
            });
            var rowArr = _self.ul.selectAll('tspan')
            for(var i = 0,len = rowArr.length; i<len; i++){
                rowArr[i].attr({x:0,y:(i+1)*45})
            }
        },
        //基本图像和属性
        '5':function(){
            var _self = shape[5] = {};
            _self.title = svg.text(0,0,'基本图像和属性').attr(titleAttr);
            _self.oh2 = svg.text(0,0,'基本图形').attr(h2Attr).attr({
                transform:'matrix(1,0,0,1,100,160)'
            });
            var line = svg.line(0,0,100,100).attr({
                stroke:'#000',
            });
            var rect = svg.rect(0,0,100,100).attr({
                fill:'green',
                transform:'matrix(1,0,0,1,140,0)',
                'fill-opacity': 0.3
            });
            var circle = svg.circle(50,50,50).attr({
                fill:'blue',
                transform:'matrix(1,0,0,1,280,0)'
            });
            var polyline = svg.polyline(50,0,0,100,100,100).attr({
                fill:'red',
                transform:'matrix(1,0,0,1,400,0)'
            });
            var ellipses = svg.ellipse(50,50,80,50).attr({
                fill:'purple',
                transform:'matrix(1,0,0,1,580,0)'
            });
            _self.base_pattern = svg.g(line,rect,circle,ellipses,polyline).attr({
                transform:'matrix(1,0,0,1,120,240)'
            });
       
            _self.th2 = svg.text(0,0,'基本属性').attr(h2Attr).attr({
                transform:'matrix(1,0,0,1,100,560)'
            });
            _self.li2 = svg.text(0,0,'► fill、stroke、stroke-width、transfrom').attr(liAttr).attr({
                'fill':'#a00',
                'transform':'matrix(1,0,0,1,120,600)'
            })
        },
        // line
        '6':function(){
            var _self = shape[6] = {};
            _self.title = svg.text(0,0,'线段').attr(titleAttr);
            _self.line = svg.line(0,0,300,0).attr({
                'stroke':"#000",
                'stroke-width':1,
                'transform':'matrix(1,0,0,1,100,200)'
            });
            _self.line1 = svg.line(0,0,300,200).attr({
                'stroke':"l(1,0,1,1)rgba(255,0,0,1)-rgba(89,220,16,.6)",
                'stroke-width':5,
                'stroke-dasharray':'20 10',
                'stroke-opacity':.8,
                'stroke-linecap':'round',
                'transform':'matrix(1,0,0,1,100,440)'
            });

            var lineDiv = document.createElement('div');
            lineDiv.id = 'line'

            var div1 = document.createElement('div');
            div1.className = 'line_code';
            // div1.innerHTML =
            var html1 = '<svg xmlns="http://www.w3.org/2000/svg">\n\
    <line x1="0"  y1="0" x2="400"  y2="0" stroke="#000"/>\n\
</svg>';
            html1_encode = '<pre>' + fun.htmlencode(html1) + '</pre>';
            div1.innerHTML = html1_encode;
            lineDiv.appendChild(div1);

            var div2 = document.createElement('div');
            div2.className = 'line_code';
            var html2 =  '<svg xmlns="http://www.w3.org/2000/svg">\n\
    <defs>\n\
        <linearGradient id="myLinearGradient1"\n\
            x1="0%" y1="0%"\n\
            x2="100%" y2="100%"\n\
            stroke-dasharray="20 10"\n\
            stroke-opacity =".8"\n\
            <stop offset="0%"   stop-color="rgba(255,0,0,1)" />\n\
            <stop offset="100%" stop-color="rgba(89,220,16,.6)"/>\n\
        </linearGradient>\n\
    </defs>\n\
    <line x1="0"  y1="0" x2="400"  y2="400" stroke="url(#myLinearGradient1)" stroke-width="5" troke-dasharray="20 10" stroke-linecap="round"/>\n\
</svg>';
            html2_encode = '<pre>' + fun.htmlencode(html2) + '</pre>';
            div2.innerHTML = html2_encode;
            lineDiv.appendChild(div2);
            document.body.appendChild(lineDiv);
        },
        '7':function(){
            var _self = shape[7] = {};
            _self.title = svg.text(0,0,'矩形').attr(titleAttr);
            _self.rect = svg.rect(0,0,180,100).attr({
                'stroke':"#ccc",
                'stroke-width':3,
                'fill':'#88aa00',
                'transform':'matrix(1,0,0,1,100,140)'
            });
            _self.rect1 = svg.rect(0,0,180,100,20,20).attr({
                'fill':'#f60',
                'transform':'matrix(1,0,0,1,100,280)'
            });
            _self.rect2 = svg.rect(0,0,180,140).attr({
                'stroke':"#fc0",
                'stroke-width':3,
                'fill':'none',
                'transform':'matrix(1,0,0,1,100,420)'
            });
             _self.rect3 = svg.rect(0,0,180,100).attr({
                'stroke':"#f55",
                'stroke-width':3,
                'stroke-dasharray':'10 5',
                'fill':'none',
                'transform':'matrix(1,0,0,1,100,610)',
            });
//             _self.line1 = svg.line(0,0,300,200).attr({
//                 'stroke':"l(1,0,1,1)rgba(255,0,0,1)-rgba(89,220,16,.6)",
//                 'stroke-width':5,
//                 'stroke-dasharray':'20 10',
//                 'stroke-opacity':.8,
//                 'stroke-linecap':'round',
//                 'transform':'matrix(1,0,0,1,100,440)'
//             });

//             var lineDiv = document.createElement('div');
//             lineDiv.id = 'line'

//             var div1 = document.createElement('div');
//             div1.className = 'line_code';
//             // div1.innerHTML =
//             var html1 = '<svg xmlns="http://www.w3.org/2000/svg">\n\
//     <line x1="0"  y1="0" x2="400"  y2="0" stroke="#000"/>\n\
// </svg>';
//             html1_encode = '<pre>' + fun.htmlencode(html1) + '</pre>';
//             div1.innerHTML = html1_encode;
//             lineDiv.appendChild(div1);

//             var div2 = document.createElement('div');
//             div2.className = 'line_code';
//             var html2 =  '<svg xmlns="http://www.w3.org/2000/svg">\n\
//     <defs>\n\
//         <linearGradient id="myLinearGradient1"\n\
//             x1="0%" y1="0%"\n\
//             x2="100%" y2="100%"\n\
//             stroke-dasharray="20 10"\n\
//             stroke-opacity =".8"\n\
//             <stop offset="0%"   stop-color="rgba(255,0,0,1)" />\n\
//             <stop offset="100%" stop-color="rgba(89,220,16,.6)"/>\n\
//         </linearGradient>\n\
//     </defs>\n\
//     <line x1="0"  y1="0" x2="400"  y2="400" stroke="url(#myLinearGradient1)" stroke-width="5" troke-dasharray="20 10" stroke-linecap="round"/>\n\
// </svg>';
//             html2_encode = '<pre>' + fun.htmlencode(html2) + '</pre>';
//             div2.innerHTML = html2_encode;
//             lineDiv.appendChild(div2);
//             document.body.appendChild(lineDiv);
        },
        '8':function(){

        }
    },frameBack = {
        '1': function(){
            fun.clear();
        },
        '2': function(){
            
        },
        '3': function(){
            fun.clear(2);
        },
        '4': function(){
            fun.clear();
        },
        '5': function(){
            fun.clear();
        },
        '6': function(){
            fun.clear();
            document.querySelector('#line').remove();
        },
        '7': function(){
            fun.clear();
        },
        '8': function(){
            fun.clear();
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
    fun.clear = function(frame){
        console.log(frame);
        frame = frame || FRAME;
        for(var i in shape[frame]){
                if(shape[frame].hasOwnProperty(i)){
                    shape[frame][i].remove();
                }
            }
    }
    //html encode
    fun.htmlencode = function(s){ 
        var div = document.createElement('div');  
        div.appendChild(document.createTextNode(s));  
        return div.innerHTML;
    }
    //
    fun.frame = function(direction){
        frame[FRAME] && frame[FRAME]();
    }

    fun.frame();
    document.addEventListener('keyup',function(event){
        //down:40
        //right:39
        //up:38
        //left:37
        // console.log(FRAME);
         // console.log(shape);
        switch (event.keyCode){
            case 39: case 40:
                frameBack[FRAME] && frameBack[FRAME]('next');
                FRAME++;
                fun.frame();
                break;
            case 37: case 38:
                // // console.log(FRAME);
                // if(FRAME == 1) return;
                // frameBack[FRAME] && frameBack[FRAME]('prev');
                // FRAME--;
                // fun.frame();
                // break;
        }
    })

//

})(window)