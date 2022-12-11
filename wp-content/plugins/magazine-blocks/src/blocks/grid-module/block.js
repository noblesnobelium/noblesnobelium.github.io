import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import { Icon } from '../../components';
import edit from './edit';
import './editor.scss';
import attributes from './attribute.js';

registerBlockType(
	'magazine-blocks/grid-module',
	{
		title: __( 'Grid Module', 'magazine-blocks' ),
		icon: <Icon type="blockIcon" name="gridModule" size={ 24 } />,
		category: 'magazine-blocks',
		keywords: [ __( 'Grid Module', 'magazine-blocks' ) ],
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
	}
);
