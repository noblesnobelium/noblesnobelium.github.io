( function( $ ) {
	'use strict';
	$( '.mzb-news-ticker-list' ).each( function() {
		$( this ).MzbTicker( {
			type: 'vertical',
			direction: 'up',
			autoplay: 2000,
			speed: 1000,
		} );
	} );
} )( jQuery );
