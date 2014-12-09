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
                    var title = svg.paper.text(100,100,'每逢佳节被思亲').attr({
                        'transform':'rotate(720)',
                    })
            },
             '2': function(){
                
            }
        }
    // var  c1 = svg.paper.text(-36,6,element.text1).animate({
    //                     // 'x':600
    //                     'transform':'rotate(720)',

    //                 },1000,function(){
    //                     console.log('end');
    //                 });

    // var g1 = svg.paper.g().attr({
    //   'transform':'translate(100, 100)'
    // });
    // g1.add( c1);

    // svg.paper.line(0,100,800,100).attr({stroke:'#000'});

    // svg.paper.line(100,0 ,100,800).attr({stroke:'#000'});
svg.attr({
    'class':'bg_black'
})
pathAttr = {
    'stroke': 'yellow',
    'strokeWidth':'1',
}
var path1 = svg.path('M 0 140 Q  80 95 140 100 Q  210 100 300 0').attr(pathAttr).attr({ 'transform':'matrix(1,0,0,1,30,70)'});
var path2 = svg.path('M 0 0 Q  130 110 220 40 ').attr(pathAttr).attr({ 'transform':'matrix(1,0,0,1,804,0)'});
var path3 = svg.path('M 0 0 C  5 100 60 100 100 80 S 180 50  300 100').attr(pathAttr).attr({ 'transform':'matrix(1,0,0,1,0,668)'});
var title_text = svg.paper.text(0,0,'每逢佳节倍思亲').attr({
        'fill':'#fff',
        'font-size':40,
        'dx':'3,3,3,3,3,3',
        'transform':'rotate(-20)'
})
var title = svg.g(title_text).attr({
    'transform':'matrix(1,0,0,1,40,200)'
});


var bigCircle = svg.circle(70,70,70).attr({"fill":"#59dc19"});

var smallCircle = svg.ellipse(70,50,60,50).attr({"fill":"l(1,0,1,1)#fff-#59dc19"});
var btnPlay = svg.polyline(0,0,0,60,50,30).attr({
    'fill':'#fff',
     'transform':'matrix(1,0,0,1,55,36)'
})
var textPlay = svg.text(0,0,'play').attr({
    'class':'hide',
    'fill':'#fff',
    'font-size':50,
     'transform':'matrix(1,0,0,1,20,75)'
})
var play = svg.g(bigCircle,smallCircle,btnPlay,textPlay).attr({
    'class':'btn',
    'transform':'matrix(.8,0,0,.8,480,300)'
}).hover(function(){
    textPlay.attr({'class':''});
    btnPlay.attr({'class':'hide'});
},function(){
    btnPlay.attr({'class':''});
    textPlay.attr({'class':'hide'});
})

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

var sign = svg.g(signText,signBorder).attr({
    'transform':'matrix(1,0,0,1,920,650)'
})

})(window)