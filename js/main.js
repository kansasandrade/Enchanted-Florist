$(window).on('load', function () {

//lightbox activation
baguetteBox.run('.tz-gallery');

//about section animation + selection of work
	TweenLite.from(".text2", 1, {fontSize:40,
	   top:'40%', delay: .5, ease: Power4.easeOut})

       var ctrl = new ScrollMagic.Controller({
         globalSceneOptions: {
        }
    });

		// This each sets the animation
		 $('.slide').each(function() {

		        new ScrollMagic.Scene({
		            triggerElement: "#trigger1",
								triggerHook:  0.9,
					     	duration: "95%",
		        		offset: 50 // small offset added to prevent overscrolling accidentally triggering
		        })
						.setClassToggle("#reveal1", "visible")
		        .addTo(ctrl);  // scene end

 					  new ScrollMagic.Scene({
								 triggerHook: 'onLeave',
							   triggerElement: "#trigger2",
								 triggerHook:  0.9,
								 duration: "95%",
								 offset: 50
						})
						.setClassToggle("#reveal2", "visible")
            .addTo(ctrl);  // scene end

            new ScrollMagic.Scene({
        			 	 triggerElement: "#trigger3",
        				 triggerHook:  0.9,
        				 duration: "95%",
        				 offset: 50
        		})
        		.setClassToggle("#reveal3", "visible")
        		.addTo(ctrl);  // scene end
		    }); //slide each

		  }); //window onload



//main title animation

	 TweenMax.to(".title-1", 2, {
	 x: 30,
	 opacity: 1,
	 ease: SlowMo.easeInOut
	 });

	 TweenMax.to(".title-2", 2, {
	 delay: 0.2,
	 x: -80,
	 opacity: 1,
	 ease: SlowMo.easeInOut
	 });

	 TweenMax.from(".lily", 4, {
	 delay: .2,
	 x: -80,
	 opacity: 0,
	 ease: Sine.easeInOut
	 });

  	TweenLite.to(".orange-hibiscus-2", 4, {
		x:-10,
		y: 50,
		z:-20
	});﻿


	TweenLite.to(".rosemallow", 4, {
		x:-100,
		y: 10,
		z:-20
	});﻿﻿


	TweenLite.to(".yellow-hibiscus", 4, {
		x:-100,
		y: 370,
		z:-20
	});﻿﻿


	TweenMax.staggerFrom(".menu ul li", 2, {
	delay: 1.6,
	y: 20,
	opacity: 0,
	ease: Expo.easeInOut
}, 0.1);
