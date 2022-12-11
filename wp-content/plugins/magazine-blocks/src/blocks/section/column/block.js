import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import edit from './edit';
import save from './save';
import attributes from './attributes';
import { Icon } from '../../../components';

registerBlockType( 'magazine-blocks/column', {
	title: __( 'Column', 'magazine-blocks' ),
	description: __( 'Add Rows and Columns inside rows to create various layouts.', 'magazine-blocks' ),
	category: 'magazine-blocks',
	icon: <Icon type="blockIcon" name="column" size={ 24 } />,
	parent: [ 'magazine-blocks/section' ],
	supports: { className: false, inserter: false, reusable: false, html: false },
	attributes,
	edit,
	save,
} );
