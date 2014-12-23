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
        'fill':'#aad400'
    }
    var ulAttr ={
        'font-size':30,
    }

    var liAttr={
        'font-size':20,
    }
   
    var p = svg.path("M0 10 L10 10 L10 0").attr({
                        fill: "none",
                        stroke: "#beceeb"
                    }).pattern(0, 0, 10, 10); 
    var bgGridding = function(width,height){
        width = width || 150;
        height = height || 150;
        return svg.rect(0,0,width,height).attr({
            fill:p
        })
    } 
    // screen
    var frame = {
        //svg
        '1': function(){
              var _self = shape[1] = {};
              _self.title = svg.text(512,400,'SVG').attr({
                    'font-size':180,
                    'text-anchor':'middle',
                    'fill':'l(1,0,1,1)rgba(246,241,7,1)-rgba(255,0,0,.6)',
                    'filter':svg.filter(Snap.filter.shadow(2,2,3))
              });
              // var _path = "M321.214785 420.1998l455.224775 2.045954-218.917083-550.361638zM373.386613 619.68032l346.789211-3.068931 61.378621-134.00999-450.10989 3.068931zM274.157842 489.762238l-274.157842 114.573427 147.308691 109.458541 175.952048-91.044955zM0 537.842158l259.836164-115.596404 279.272727-546.26973zM841.91009 423.268731l243.468531 125.826174-512.511489-670.04995zM836.795205 490.785215l-68.539461 141.170829 156.515485 86.953047 135.032967-113.55045zM368.271728 687.196803l-59.332667 15.344655-111.504496 62.401598 130.941059 47.056943 427.604396 0 129.918082-54.217782-124.803197-60.355644-41.942058-10.22977-350.881119 0z";
              // svg.path(_path).attr({
              //   'transform':'matrix(.1,0,0,.1,450,200) rotate(180deg)',
              //   'fill':'l(1,0,1,1)rgba(246,241,7,1)-rgba(255,0,0,.6)'
              // })
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
            _self.h2 = svg.text(0,0,'案例').attr(h2Attr).attr({
                transform:'matrix(1,0,0,1,100,440)'
            });

            var li2 = ['• http://top.baidu.com','• http://developer.baidu.com/map/jsdemo.htm#c1_1','• http://iconfont.cn'];
            _self.li2 = svg.text(0,0,li2).attr(liAttr).attr({
                transform:'matrix(1,0,0,1,100,440)'
            });
            var rowArr = _self.li2.selectAll('tspan')
            for(var i = 0,len = rowArr.length; i<len; i++){
                rowArr[i].attr({x:0,y:(i+1)*45})
            }
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
            _self.title = svg.text(0,0,'线段(line)').attr(titleAttr);
            _self.h2 = svg.text(50,150,'▪ line').attr(h2Attr);
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
        //矩形
        '7':function(){
            var _self = shape[7] = {};
            _self.title = svg.text(0,0,'矩形').attr(titleAttr);
            _self.h2 = svg.text(50,150,'▪ rect').attr(h2Attr);
            _self.rect = svg.rect(0,0,180,100).attr({
                'stroke':"#ccc",
                'stroke-width':3,
                'fill':'#88aa00',
                'transform':'matrix(1,0,0,1,100,180)'
            });
            _self.rect1 = svg.rect(0,0,180,100,20,20).attr({
                'fill':'#f60',
                'transform':'matrix(1,0,0,1,100,310)'
            });
            _self.rect2 = svg.rect(0,0,180,140).attr({
                'stroke':"#fc0",
                'stroke-width':3,
                'fill':'none',
                'transform':'matrix(1,0,0,1,100,435)'
            });
             _self.rect3 = svg.rect(0,0,180,100).attr({
                'stroke':"#f55",
                'stroke-width':3,
                'stroke-dasharray':'10 5',

                'fill':'none',
                'transform':'matrix(1,0,0,1,100,610)',
            });

            var rectDiv = document.createElement('div');
            rectDiv.id = 'rect'

            var div1 = document.createElement('div');
            div1.className = 'rect_code';
            // div1.innerHTML =
            var html1 = '<rect x="0" y="0" width="180" height="100" stroke="#cccccc" fill="#88aa00" stroke-width="3">\n\
</rect>';
            html1_encode = '<pre>' + fun.htmlencode(html1) + '</pre>';
            div1.innerHTML = html1_encode;
            rectDiv.appendChild(div1);

            var div2 = document.createElement('div');
            div2.className = 'rect_code';
            var html2 =  '<rect x="0" y="0" width="180" height="100" rx="20" ry="20" fill="#ff6600">\n\
</rect>';
            html2_encode = '<pre>' + fun.htmlencode(html2) + '</pre>';
            div2.innerHTML = html2_encode;
            rectDiv.appendChild(div2);

            var div3 = document.createElement('div');
            div3.className = 'rect_code';
            var html3 =  '<rect x="0" y="0" width="180" height="140" stroke="#ffcc00" fill="none" style="stroke-width: 3px;">\n\
</rect>';
            html3_encode = '<pre>' + fun.htmlencode(html3) + '</pre>';
            div3.innerHTML = html3_encode;
            rectDiv.appendChild(div3);

            var div4 = document.createElement('div');
            div4.className = 'rect_code';
            var html4 =  '<rect x="0" y="0" width="180" height="100" stroke="#ff5555" fill="none" style="stroke-width: 3px; stroke-dasharray: 10px, 5px;">\n\
</rect>';
            html4_encode = '<pre>' + fun.htmlencode(html4) + '</pre>';
            div4.innerHTML = html4_encode;
            rectDiv.appendChild(div4);


            document.body.appendChild(rectDiv);
        },
        //圆
        '8':function(){
            var _self = shape[8] = {};
            _self.title = svg.text(0,0,'圆').attr(titleAttr);
            _self.h2 = svg.text(50,150,'▪ circle').attr(h2Attr);
            _self.circle = svg.circle(0,0,100).attr({
                'stroke':"green",
                'stroke-width':1,
                'fill':'yellow',
                'transform':'matrix(1,0,0,1,170,280)'
            });
            _self.circle2 = _self.circle.clone().attr({
                'fill':'red',
                'fill-opacity':.5,
                'stroke':'none',
                'transform':'matrix(1,0,0,1,120,550)'
            });
            _self.circle3 = _self.circle.clone().attr({
                'stroke':'none',
                'fill':'purple',
                'transform':'matrix(1,0,0,1,220,550)'
            });

            var circleDiv = document.createElement('div');
            circleDiv.id = 'circle'

            var div1 = document.createElement('div');
            div1.className = 'circle_code';
            // div1.innerHTML =
            var html1 = '<circle cx="0" cy="0" r="100" stroke="#008000" style="stroke-width: 1px;" fill="#ffff00">\n\
</circle>';
            html1_encode = '<pre>' + fun.htmlencode(html1) + '</pre>';
            div1.innerHTML = html1_encode;
            circleDiv.appendChild(div1);

            var div2 = document.createElement('div');
            div2.className = 'circle_code';
            var html2 =  '<circle cx="0" cy="0" r="100" stroke="none" style="stroke-width: 1px; fill-opacity: 0.5;" fill="#ff0000">\n\
</circle>';
            html2_encode = '<pre>' + fun.htmlencode(html2) + '</pre>';
            div2.innerHTML = html2_encode;
            circleDiv.appendChild(div2);
            document.body.appendChild(circleDiv);
        },
        //椭圆
        '9':function(){
            var _self = shape[9] = {};
            _self.title = svg.text(0,0,'椭圆').attr(titleAttr);
            _self.h2 = svg.text(50,150,'▪ ellipse').attr(h2Attr);
            _self.ellipse = svg.ellipse(0,0,50,40).attr({
                fill:'purple',
                stroke:'none',
                transform:'matrix(3,0,0,3,200,450)'
            })

            var ellipseDiv = document.createElement('div');
            ellipseDiv.id = 'ellipse'

            var div1 = document.createElement('div');
            div1.className = 'ellipse_code';
            // div1.innerHTML =
            var html1 = '<ellipse cx="0" cy="0" rx="50" ry="40" fill="#800080" stroke="none" transform="matrix(3,0,0,3,200,450)">\n\
</ellipse>';
            html1_encode = '<pre>' + fun.htmlencode(html1) + '</pre>';
            div1.innerHTML = html1_encode;
            ellipseDiv.appendChild(div1);
            document.body.appendChild(ellipseDiv);
        },
        //多边形和折线
        '10':function(){
            var _self = shape[10] = {};
            _self.title = svg.text(0,0,'折线和多边形').attr(titleAttr);
            _self.h2 = svg.text(50,150,'▪ polyline & polygon').attr(h2Attr);
            _self.polyline = svg.polyline('0,50,25,0,75,0,100,50,75,100,25,100').attr({
                'stroke':'blue',
                'stroke-width':1,
                'fill':'none',
                'transform':'matrix(2,0,0,2,100,190)'
            })

            _self.polygon = svg.polygon('0,50,25,0,75,0,100,50,75,100,25,100').attr({
                'stroke':'none',
                'stroke-width':1,
                'fill':'purple',
                'transform':'matrix(2,0,0,2,100,480)'
            })

            var polyDiv = document.createElement('div');
            polyDiv.id = 'poly'

            var div1 = document.createElement('div');
            div1.className = 'poly_code';
            // div1.innerHTML =
            var html1 = '<polyline points="0,50,25,0,75,0,100,50,75,100,25,100" stroke="#0000ff" fill="none" style="stroke-width: 1px;">\n\
</polyline>';
            html1_encode = '<pre>' + fun.htmlencode(html1) + '</pre>';
            div1.innerHTML = html1_encode;
            polyDiv.appendChild(div1);

            var div2 = document.createElement('div');
            div2.className = 'poly_code';
            var html2 =  '<polygon points="0,50,25,0,75,0,100,50,75,100,25,100" stroke="none" fill="#800080" style="stroke-width: 1px;">\n\
</polygon>';
            html2_encode = '<pre>' + fun.htmlencode(html2) + '</pre>';
            div2.innerHTML = html2_encode;
            polyDiv.appendChild(div2);
            document.body.appendChild(polyDiv);
        },
        '11':function(){
            var _self = shape[11] = {};
            _self.title = svg.text(0,0,'path路径').attr(titleAttr);
            _self.h2 = svg.text(50,150,'▪ 基本命令').attr(h2Attr);
            var pathDiv = document.createElement('div');
            pathDiv.id = 'path_base'

            var div1 = document.createElement('div');
            div1.className = 'path_code';
            // div1.innerHTML =
            var html1 = '<table class="table table-bordered">\
  <tr>\
    <th>命令</th>\
    <th>名称</th>\
    <th>参数</th>\
  </tr>\
  <tr>\
    <td>M</td>\
    <td>moveto 移动到</td>\
    <td>(x y)+</td>\
  </tr>\
  <tr>\
    <td>L</td>\
    <td>lineto 画线到</td>\
    <td>(x y)+</td>\
  </tr>\
  <tr>\
    <td>H</td>\
    <td>horizontal lineto 水平线到</td>\
    <td>x+</td>\
  </tr>\
  <tr>\
    <td>V</td>\
    <td>vertical lineto 垂直线到</td>\
    <td>y+</td>\
  </tr>\
  <tr>\
    <td>C</td>\
    <td>curveto 三次贝塞尔曲线到</td>\
    <td>(x1 y1 x2 y2 x y)+</td>\
  </tr>\
  <tr>\
    <td>S</td>\
    <td>smooth curveto 光滑三次贝塞尔曲线到</td>\
    <td>(x2 y2 x y)+</td>\
  </tr>\
  <tr>\
    <td>Q</td>\
    <td>quadratic Bézier curveto 二次贝塞尔曲线到</td>\
    <td>(x1 y1 x y)+</td>\
  </tr>\
  <tr>\
    <td>T</td>\
    <td>smooth quadratic Bézier curveto 光滑二次贝塞尔曲线到</td>\
    <td>(x y)+</td>\
  </tr>\
  <tr>\
    <td>A</td>\
    <td>elliptical arc 椭圆弧</td>\
    <td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td>\
  </tr>\
  <tr>\
    <td>Z</td>\
    <td>closepath 关闭路径</td>\
    <td>(none)</td>\
  </tr>\
</table>';
            div1.innerHTML = html1;
            pathDiv.appendChild(div1);
            document.body.appendChild(pathDiv);
        },
        //path
        '12':function(){
            var _self = shape[12] = {};
            _self.title = svg.text(0,0,'path路径').attr(titleAttr);
            _self.h2 = svg.text(50,150,'▪ 画线').attr(h2Attr);
            
            var path = svg.path('M10 10 L50 50 M50 60 H140 M50 70 V140').attr({
                    fill:'none',
                    stroke:'#600'
            })
            _self.path1 = svg.g(bgGridding(),path).attr({
                transform:'matrix(1.5,0,0,1.5,100,240)'
            })
           
            var pathDiv = document.createElement('div');
            pathDiv.id = 'path2'

            var div1 = document.createElement('div');
            div1.className = 'path2_code';
            // div1.innerHTML =
            var html1 = '<path d="M10 10 L50 50 M50 60 H140 M50 70 V140" fill="none" stroke="#660000"></path>';
            html1_encode = '<pre>' + fun.htmlencode(html1) + '</pre>';
            div1.innerHTML = html1_encode;
            pathDiv.appendChild(div1);
            document.body.appendChild(pathDiv);
        },
        //quadratic Bézier
        '13':function(){
            var _self = shape[12] = {};
            _self.title = svg.text(0,0,'path路径').attr(titleAttr);
            _self.h2 = svg.text(50,150,'▪ 二次贝塞尔曲线').attr(h2Attr);

            _self.img = svg.image('img/quadratic.png').attr({
                transform:'matrix(1,0,0,1,100,200)'
            });

            var quadratic = svg.path('M 0 100 Q 50,30 100 100').attr({
                 fill:'none',
                'stroke':'#600'
            });

            var dot = svg.circle(50,30,3).attr({
                stroke:'none',
                fill:'blue',
                cursor:'pointer'
            }).drag(
                function(x,y,x1,y1,e){
                    
                },function(x,y){
                    
                },function(e){
                  
                }
            );
            // console.log(dot.getBBox());
                // drag(
                //     // function(){
                //     //     console.log("Move started");
                //     // },
                //     // function(){
                //     //     console.log("Move stopped");
                //     // }
                // );

            _self.quadratic = svg.g(bgGridding(),quadratic,dot).attr({
                transform:'matrix(1.5,0,0,1.5,100,480)'
            })

            var pathDiv = document.createElement('div');
            pathDiv.id = 'path3'

            var div1 = document.createElement('div');
            div1.className = 'path3_code';
            // div1.innerHTML =
            var html1 = '<path d="M 0 100 Q 50,30 100 100" fill="none" stroke="#660000"></path>';
            html1_encode = '<pre>' + fun.htmlencode(html1) + '</pre>';
            div1.innerHTML = html1_encode;
            pathDiv.appendChild(div1);
            document.body.appendChild(pathDiv);

            //

            // var arcs = svg.path('M50,50 A50,50 0 0,1 100,100').attr({
            //     fill:'none',
            //     stroke:'#600'
            // });
            // _self.arcs = svg.g(rect.clone(),arcs).attr({
            //     transform:'matrix(1,0,0,1,100,400)'
            // })

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
            document.querySelector('#rect').remove();
        },
        '8': function(){
            fun.clear();
            document.querySelector('#circle').remove();
        },
        '9': function(){
            fun.clear();
            document.querySelector('#ellipse').remove();
        },
        '10': function(){
            fun.clear();
            document.querySelector('#poly').remove();
        },
        '11': function(){
            fun.clear();
            document.querySelector('#path_base').remove();
        },
        '12': function(){
            fun.clear();
            document.querySelector('#path2').remove();
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
    document.querySelector('#page_num').innerHTML = FRAME;

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
                document.querySelector('#page_num').innerHTML = FRAME;
                break;
            case 37: case 38:
            console.log(FRAME);
                if(FRAME < 12 || FRAME >15){
                    return;
                }
                console.log(FRAME);
                if(FRAME == 1) return;
                frameBack[FRAME] && frameBack[FRAME]('prev');
                FRAME--;
                fun.frame();
                document.querySelector('#page_num').innerHTML = FRAME;
                break;
        }
    })

//

})(window)