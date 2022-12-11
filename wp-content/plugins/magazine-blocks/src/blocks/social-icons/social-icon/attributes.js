import { blockAttributes } from '../../../components';

const attributes = {
	clientId: {
		type: String,
	},
	link: {
		type: Object,
	},
	icon: {
		default: {
			enable: true,
			icon: 'facebook',
		},
	},
	iconSize: {
		type: Object,
		default: {
			desktop: {
				value: 14,
				unit: 'px',
			},
		},
		style: [
			{
				selector: '{{WRAPPER}} svg { width: {{VALUE}}; height: {{VALUE}}; }',
			},
		],
	},
	...blockAttributes,
};
export default attributes;
