import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import { Icon } from '../../components';
import edit from './edit';
import attributes from './attribute.js';

registerBlockType(
	'magazine-blocks/category-list',
	{
		title: __( 'Category List', 'magazine-blocks' ),
		icon: <Icon type="blockIcon" name="categoryList" size={ 24 } />,
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
