import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import { Icon } from '../../components';
import edit from './edit';
import attributes from './attribute.js';

registerBlockType(
	'magazine-blocks/featured-categories',
	{
		title: __( 'Featured Categories', 'magazine-blocks' ),
		icon: <Icon type="blockIcon" name="featuredCategories" size={ 24 } />,
		category: 'magazine-blocks',
		keywords: [ __( 'Category List', 'magazine-blocks' ) ],
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
