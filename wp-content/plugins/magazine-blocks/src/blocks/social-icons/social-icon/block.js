import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import attributes from './attributes.js';
import edit from './edit';
import save from './save';
registerBlockType( 'magazine-blocks/social-icon', {
	title: __( 'Social Icon', 'magazine-blocks' ),
	category: 'magazine-blocks',
	parent: [ 'magazine-blocks/social-ions' ],
	supports: {
		className: false,
		inserter: false,
		reusable: false,
		html: false,
	},
	attributes,
	example: {
		attributes: {},
	},
	edit,
	save,
} );
