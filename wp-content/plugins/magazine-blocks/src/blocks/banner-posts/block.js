import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import { Icon } from '../../components';
import edit from './edit';
import attributes from './attribute.js';

registerBlockType(
	'magazine-blocks/banner-posts',
	{
		title: __( 'Banner Posts', 'magazine-blocks' ),
		icon: <Icon type="blockIcon" name="bannerPost" size={ 24 } />,
		category: 'magazine-blocks',
		keywords: [ __( 'Banner Posts', 'magazine-blocks' ) ],
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
