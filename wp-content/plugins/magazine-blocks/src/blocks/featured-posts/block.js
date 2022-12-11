import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import { Icon } from '../../components';
import edit from './edit';
import './editor.scss';
import attributes from './attribute.js';

registerBlockType(
	'magazine-blocks/featured-posts',
	{
		title: __( 'Featured Posts', 'magazine-blocks' ),
		icon: <Icon type="blockIcon" name="featurePost" size={ 24 } />,
		category: 'magazine-blocks',
		keywords: [ __( 'Featured Post', 'magazine-blocks' ) ],
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
