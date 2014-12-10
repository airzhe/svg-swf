(function(window){
    var WIDTH = 1024, HEIGHT = 768, SCREEN = window.SCREEN || 2;
    var svg = Snap('#screen').attr({'class':'bg_black'});
    // console.log(container)
    var shape = {};
    shape.common = {};
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

    // yuanjan
    var element = {};
    element = {
       'screen1':{
            'title':'每逢佳节被思亲',
            'path1':''
       },
       'screen2':{

       }
    }

    // screen
    var screen = {
        '1': function(){
                shape[1] = _self = {}
                // path
                pathAttr = {
                    'stroke': 'yellow',
                    'strokeWidth':'1',
                }
                _self.path1 = svg.path('M 0 140 Q  80 95 140 100 Q  210 100 300 0').attr(pathAttr).attr({ 'transform':'matrix(1,0,0,1,30,70)'});
                _self.path2 = svg.path('M 0 0 Q  130 110 220 40 ').attr(pathAttr).attr({ 'transform':'matrix(1,0,0,1,804,0)'});
                _self.path3 = svg.path('M 0 0 C  5 100 60 100 100 80 S 180 50  300 100').attr(pathAttr).attr({ 'transform':'matrix(1,0,0,1,0,668)'});
                // title
                var title_text = svg.paper.text(0,0,'每逢佳节倍思亲').attr({
                        'fill':'#fff',
                        'font-size':40,
                        'font-family':'方正隶书简体',
                        'dx':'3,3,3,3,3,3',
                        'transform':'rotate(-20)',
                })
                _self.title = svg.g(title_text).attr({
                    'transform':'matrix(1,0,0,1,40,200)'
                });
                // console.log(shape[1],_self);
               
                // sign
                var signText = svg.text(10,40,['如果','的事']).attr({
                    'fill':'red',
                    'font-size':30,
                    'dx':'5,5,5,5',
                     'font-family':'迷你繁篆书'
                });
                signText.select('tspan:nth-child(2)').attr({
                    'x':10,
                    'y':80
                })

                var signBorder = svg.rect(8,8,80,84).attr({
                    'fill':'none',
                     'stroke-width':2,
                     'stroke':'red',
                     'stroke-dasharray':'20,10,5,5,5,10'
                })

                _self.sign = svg.g(signText,signBorder).attr({
                    'transform':'matrix(1,0,0,1,920,650)'
                })

                 // playBtn
                var bigCircle = svg.circle(70,70,70).attr({"fill":"#59dc19"});

                var smallCircle = svg.ellipse(70,50,60,50).attr({"fill":"l(1,0,1,1)rgba(255,255,255,1)-rgba(89,220,16,.6)"});
                var btnPlay = svg.polyline(0,0,0,60,50,30).attr({
                    'fill':'#fff',
                    'transform':'matrix(1,0,0,1,55,36)'
                })
                var textPlay = svg.text(0,0,'play').attr({
                    'class':'hide',
                    'fill':'#fff',
                    'font-size':50,
                    'transform':'matrix(1,0,0,1,25,75)'
                })
                _self.play = svg.g(bigCircle,smallCircle,btnPlay,textPlay).attr({
                    'class':'btn',
                    'transform':'matrix(.8,0,0,.8,480,300)'
                }).hover(function(){
                    textPlay.attr({'class':''});
                    btnPlay.attr({'class':'hide'});
                },function(){
                    btnPlay.attr({'class':''});
                    textPlay.attr({'class':'hide'});
                }).click(function(){
                    fun.transitions();
                })
        },
        '2': function(){
            svg.attr({'class':''});
            shape[1] = _self = {};
            // book
            var rBook = svg.rect(0,0,90,124);
            _self.book = svg.g(rBook,rBook.clone());
            _self.book.select('rect:nth-child(1)').attr({
                opacity:.17,
                transform:'matrix(1,-.12,0,1,95,11)'
            })
            _self.book.select('rect:nth-child(2)').attr({
                opacity:.40,
                transform:'matrix(1,.12,0,1,0,0)'
            })
            _self.book.attr({
                transform:'matrix(1,0,0,1,820,20)'
            })
            // mask
            _self.mask = svg.rect(0,0,660,0).attr({fill:'#fff'}).animate({
                'height':'260'
            },10000,function(){
                // this.remove();
            });
            // poem
            var poem = [
                '《水调歌头》---（宋）苏东坡',
                '明月几时有？把酒问青天。',
                '不知天上宫阙, 今夕是何年？',
                '我欲乘风归去, 唯恐琼楼玉宇,',
                '高处不胜寒！ 起舞弄清影, 何似在人间？',
                '转朱阁, 低绮户, 照无眠。',
                '不应有恨, 何事长向别时圆？',
                '人有悲欢离合, 月有阴晴圆缺。',
                '此事古难全',
                '但愿人长久, 千里共婵娟。'
            ];
            _self.poem = svg.text(0,0,poem).attr({
                'transform':'matrix(2,0,0,2,150,100)',
                'font-family':'方正隶书简体',
                'mask':_self.mask,
            });
            var rowArr = _self.poem.selectAll('tspan')
            for(var i = 0,len = rowArr.length; i<len; i++){
                rowArr[i].attr({x:20,y:(i+1)*25})
            }
            console.log(rowArr[0]);
            rowArr[0].attr({
                'x':'10',
                'y':'15',
                'font-size':20
            })
           

            // console.log(a);
            // fun.after(_self.title2);
        },
        '3':function(){

        }
    }
    //remove
    fun.remove = function(name) {
        if (shape[name]) {
            shape[name].remove();
            shape[name] = null;
        }
    };
    // transtion
    fun.transitions = function(){
        shape.common.transitions = svg.rect(0,0,1024,768).attr({
            'opacity':0,
            'z-index': 100
        }).animate({
            'opacity':1
        },1500,function(){
            for(var i in shape[SCREEN]){
                if(shape[SCREEN].hasOwnProperty(i)){
                    shape[SCREEN][i].remove();
                }
            }
            SCREEN++;
            screen[SCREEN]();
            this.animate({
            'opacity':0
            },1000,function(){
                // this.remove();
            })
        })
    }
    // after
    fun.after = function(obj){
        if(shape.common.transitions){
            shape.common.transitions.insertAfter(obj);
        }
    }
    screen[SCREEN]();
//

})(window)