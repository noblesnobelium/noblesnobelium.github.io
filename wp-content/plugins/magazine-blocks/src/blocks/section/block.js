import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import { Icon } from '../../components';
import edit from './edit';
import save from './save';
import attributes from './attributes.js';
import './editor.scss';
import './style.scss';

registerBlockType( 'magazine-blocks/section', {
	title: __( 'Section', 'magazine-blocks' ),
	description: __( 'Add Rows and Columns inside rows to create various layouts.', 'magazine-blocks' ),
	icon: <Icon type="blockIcon" name="section" size={ 24 } />,
	category: 'magazine-blocks',
	keywords: [ __( 'Section Block', 'magazine-blocks' ) ],
	attributes,
	example: {
		attributes: {},
	},
	supports: {
		className: false,
		align: [ 'center', 'wide', 'full' ],
		color: {
			background: false,
			gradient: false,
			text: false,
		},
	},
	edit,
	save,
} );
