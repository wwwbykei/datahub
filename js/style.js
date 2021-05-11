
//navigation
function navCollapse(){//sub menu mobile
    if( $( window ).width() <= 1180 ){
        $( ".nav-gnb > li" ).click( function(){
            $( ".nav-gnb > li" ).removeClass( "active" );
            $( this ).addClass( "active" );
        });
    }else{
        $( "body,nav,.nav-gnb > li,.bg-close" ).removeClass( "active" );
    }
};
function navBtn(){
    $( ".nav-btn" ).click( function(){
        $( "body,nav,.bg-close" ).toggleClass( "active" );
    });
    $( "header" ).append( "<div class='bg-close'></div>" );
    $( "nav" ).bind( 'webkitTransitionEnd otransitionend oTransitionEnd transitionend', function() {
        $( ".bg-close, .nav-close" ).click( function(){
            $( "body, nav, .bg-close" ).removeClass( "active" );
        });
    });
};

function loadHeaderFooter(){
    $( "header" ).load( "header.html", function(){
        navCollapse();
        navBtn();
    });
    $( ".global-footer" ).load( "footer.html" );
}

//datepicker
function datepicker(){
    $( ".i-month" ).datepicker({
        format: 'yyyy.mm',
	    viewMode: "months", 
	    minViewMode: "months",
        autoclose: true
    });
    $( ".i-date" ).datepicker({
        format: 'yyyy.mm.dd',
        autoclose: true,
        todayHighlight: true
        // startDate: 'today',
        // daysOfWeekDisabled : [0,6],
        // language : "kr"
    })
}
//tooltip
function tooltip(){
	$( ".tooltip" ).tooltipster({
	    contentCloning: true,
	    delay: 0,
	    minWidth: 80,
	    side: ['right', 'top', 'left', 'bottom']
	});
	$( ".tooltip-top" ).tooltipster({
	    contentCloning: true,
	    delay: 0,
	    minWidth: 80,
	    side: ['top', 'right', 'left', 'bottom']
	});
	$( ".tooltip-bottom" ).tooltipster({
	    contentCloning: true,
	    delay: 0,
	    minWidth: 80,
	    side: ['bottom', 'top', 'right', 'left']
	});
    $( ".tooltip-arrowless:not(.disabled)" ).tooltipster({
	    contentCloning: true,
	    delay: 0,
	    minWidth: 80,
	    side: ['right', 'top', 'left', 'bottom'],
	    theme: ['tooltipster-arrowless'],
	    arrow: false
	});
	$( ".tooltip-clickable" ).tooltipster({
		contentCloning: true,
	    minWidth: 80,
	    side: ['right', 'top', 'left', 'bottom'],
		trigger: 'custom',
		interactive: true,
		contentAsHTML: true,
		triggerOpen: {
		    mouseenter: true
		},
		triggerClose: {
		    mouseleave: true
		}
	});
	$( ".tooltip_templates a" ).on('click', function() {
		$(".tooltip_templates").hide();
	});
}

$( document ).ready( function(){
	loadHeaderFooter();
});

$( window ).resize( function(){
    navCollapse();
});

$( window ).load( function(){
    tooltip();
});