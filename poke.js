$(function(){
	/*产生poke*/
	let color = ['a','b','c','d'];
	let poke = [];
	let flag = {};
	let btnR=$('div.btnR')
    while(poke.length<52){
    	let num = Math.floor(Math.random()*13+1);
    	let hua = color[Math.floor(Math.random()*color.length)];
    	if(!flag[`${hua}_${num}`]){
    		 // num = Math.floor(Math.random()*13+1);
    		 // hua = color[Math.floor(Math.random()*color.length)];
             poke.push({hua,num})
    		
    		  flag[`${hua}_${num}`] = true;

    	}
  }  		
    
   console.log(poke);
   let index=0;
   for(let i=0;i<7;i++){
   	for(let j=0;j<=i;j++){
   		 // hua = Math.floor(Math.random()*13+1);
    	// num = color[Math.floor(Math.random()*color.length)];
   		let left=350-50*i+100*j,
   		top=50*i;
   		$('<div>').addClass('poke box').attr('id',`${i}-${j}`).data('num',`${poke[index].num}`).css('background-image',`url(image/${poke[index].hua}${poke[index].num}.jpg)`).appendTo('.zhuozi').delay(index*10).animate({left,top,opacity:1})
   	
   	index++;
   }
   }
   let i=0
   for(;index<poke.length;index++){
   	$('<div>').appendTo('.zhuozi').attr({id:`${index}`}).data('num',`${poke[index].num}`).addClass('poke zuo').css('background-image',`url('image/${poke[index].hua}${poke[index].num}.jpg')`).delay(index*10).animate({left:'50px',top:'500px',opacity:1})
   }
    let first =null;
    $('.zhuozi').on('click','.poke',function(e){
    	let element=$(e.target);
   	    let ids= element.attr('id').split('-');
   	    console.log(ids)
    	let ele1=`#${ids[0]*1+1}-${ids[1]*1}`;
    	let ele2=`#${ids[0]*1+1}-${ids[1]*1+1}`;
    	console.log(ele1,ele2)
    	if($(ele1).length  || $(ele2).length){
    		return;
    	}
    	element.toggleClass('active');
    	if(element.hasClass('active')){
    		element.animate({top:'-=20'})
    	}else{
    		element.animate({top:'+=20'})
    	}
    	if(!first){
    		first =$(e.target);

    	}else{
    		if(first.data('num')*1+element.data('num')*1 ==14){
    			$('.active').animate({left:600,top:0,opacity:0},function(){$(this).remove();
    			})
    		    }else{
    				$('.active').animate({top:'+=20'},
                     function(){
	                 $(this).removeClass('active');
                     })
    			}
    			first=null;
    		}
    	
    })
    let zIndex=0
    btnR.on('click',function(){
    	if (!$('.zuo').length) {return;}
        $('.zuo').eq(-1).css('zIndex',zIndex++).animate({left:600}).removeClass('zuo').addClass('you')
    });
    zIndex=0;
    $('div.btnL').on('click',function(){
    	if (!$('.you').length) {return;}
        $('.you').each(function(index){
        	$(this).delay(index*100).animate({left:52,zIndex:zIndex++}).removeClass('you').addClass('zuo')
        })
   }) 
})