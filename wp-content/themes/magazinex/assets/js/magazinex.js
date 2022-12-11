/**
 * Scroll to top.
 */
( function () {

	document.addEventListener('DOMContentLoaded', function () {

		function scrollToTop () {
			let scrollToTopButton = document.getElementById( 'mzx-scroll-to-top' );

			// Only proceed when the button is present.
			if ( scrollToTopButton ) {

				// On scroll and show and hide button.
				window.addEventListener(
					'scroll',
					function() {
						if ( 500 < window.scrollY ) {
							scrollToTopButton.classList.add( 'mzx-scroll-to-top--show' );
						} else if ( 500 > window.scrollY ) {
							scrollToTopButton.classList.remove(
								'mzx-scroll-to-top--show'
							);
						}
					}
				);

				// Scroll to top when clicked on button.
				scrollToTopButton.addEventListener(
					'click',
					function( e ) {
						e.preventDefault();

						// Only scroll to top if we are not in top.
						if ( 0 !== window.scrollY ) {
							window.scrollTo(
								{
									top: 0,
									behavior: 'smooth'
								}
							);
						}
					}
				);
			}
		}
		scrollToTop();

		function toggleSearch () {
			let search = document.querySelector( '.mzx-search' );
			let searchField = search.querySelector( 'input.search-field' );
			let openModalBtn = search.querySelector( '.mzx-searchbox-icon' );
			let closeModalBtn = search.querySelector( '.mzx-searchbox-close-icon' );

			if ( null === openModalBtn ) {
				return;
			}

			searchField.setAttribute( 'tabindex', -1 );
			openModalBtn.addEventListener( 'click', function( e ) {

				e.preventDefault();
				let focusableSelectors = 'input[type="search"], a[class="mzx-searchbox-close-icon"]';
				let focusableElements = Array.from( search.querySelectorAll( focusableSelectors ) );

				let lastElement = focusableElements[focusableElements.length - 1];
				let firstElement = focusableElements[0];

				search.classList.add( 'open' );
				searchField.removeAttribute( 'tabindex' );
				searchField.focus();

				search.addEventListener( 'keydown', function( e ) {
					if ( 'Tab' === e.key ) {
						if ( e.shiftKey ) {
							if ( document.activeElement == firstElement ) {
								e.preventDefault();
								lastElement.focus();
							}
						} else {
							if ( document.activeElement == lastElement ) {
								e.preventDefault();
								firstElement.focus();
							}
						}
					}
				} )
			} )

			closeModalBtn.addEventListener( 'click', function( e ) {
				e.preventDefault();
				search.classList.remove( 'open' );
				searchField.setAttribute( 'tabindex', -1 );
			} )
		}
		toggleSearch();

	});

} )();
