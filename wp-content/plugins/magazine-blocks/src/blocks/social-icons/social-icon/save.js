// import './style.scss';
import classnames from 'classnames';
import { Element, Icon } from '../../../components';
/* eslint-disable jsx-a11y/anchor-is-valid  */

const Save = ( props ) => {
	const { attributes: { clientId, icon, link, className } } = props;
	const classNames = classnames(
		`mzb-social-icon mzb-social-icon-${ clientId }`,
		className
	);

	return (
		<span className={ classNames }>
			<Element
				tagName="a"
				htmlAttrs={ {
					href: link && link.url ? link.url : '#',
					target: link && link.newTab ? '_blank' : null,
					rel: link && link.newTab ? 'noopener' : null,
				} }
			>
				<Icon type="socialIcon" name={ icon.icon || '' } />
			</Element>
		</span>
	);
};

export default Save;
