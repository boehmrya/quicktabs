$(document).ready( function() {

	function init_tabs() {

		 //Does element exist?
		 if (!jQuery('ul.quicktabs').length) {

		 	//If not, exit
		 	return;
		 }

		 //Reveal initial content area(s)
		 jQuery('.tab').each(function() {
		 	jQuery(this).find('div.tab:first').show();
		 });

		 //Listen for click on tabs
		 jQuery('ul.quicktabs a').click(function () {

		 	// If not current tab
		 	if(!jQuery(this).hasClass('current')) {

		 		//Change the current indicator
		 		jQuery(this).addClass('current').parent('li').siblings('li').find('a.current').removeClass('current');

		 		//Show target, hide others
		 		target = jQuery(this).attr('href');
		 		jQuery('.tab').each(function() {
		 			if (jQuery(this).attr('id') == target) {
		 				jQuery(this).addClass('display').siblings().removeClass('display');
		 			}
		 		})
		 	}

		 //No follow
		 this.blur();
		 	return false;
		 });

	}

	//run it
	init_tabs();

});

