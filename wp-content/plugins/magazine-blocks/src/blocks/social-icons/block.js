import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import { Icon } from '../../components';
import edit from './edit';
import save from './save';
import './editor.scss';
import attributes from './attributes.js';

registerBlockType( 'magazine-blocks/social-icons', {
	title: __( 'Social Icons', 'magazine-blocks' ),
	description: __( 'Create stylish title for each section with various markups from H1 to H6.', 'magazine-blocks' ),
	icon: <Icon type="blockIcon" name="social-icons" size={ 24 } />,
	category: 'magazine-blocks',
	keywords: [ __( 'Heading Block', 'magazine-blocks' ) ],
	attributes,
	example: {
		attributes: {},
	},
	supports: {
		className: false,
		align: false,
		color: {
			background: false,
			gradient: false,
			text: false,
		},
	},
	edit,
	save,
} );
