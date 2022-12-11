import { applyFilters } from '@wordpress/hooks';
import classnames from 'classnames';

import './style.scss';

const Save = ( props ) => {
	const { attributes: { cssID, clientId, className, advertisementImage, link, imageSize } } = props;

	const getImageAttr = () => {
		if ( advertisementImage.type && 'external' === advertisementImage.type ) {
			return { src: advertisementImage.external };
		}

		return { src: advertisementImage.local };
	};

	const classNames = applyFilters(
		'magazine.blocks.image.classnames',
		classnames(
			`mzb-advertisement mzb-advertisement-${ clientId }`,
			className
		)
	);

	return (
		<div id={ cssID ? cssID : null } className={ classNames }>
			<div className="mzb-advertisement-content">
				<div className={ `mzb-advertisement-${ imageSize }` } >
					{ link ?
					// eslint-disable-next-line react/jsx-no-target-blank
						<a href={ link.url } target={ link.newTab ? '_blank' : null } rel={ link.newTab ? 'noopener' : null }>
							{ /* eslint-disable-next-line jsx-a11y/alt-text */ }
							<img { ...getImageAttr() } />
						</a>
						:
					// eslint-disable-next-line jsx-a11y/alt-text
						<img { ...getImageAttr() } /> }
				</div>
			</div>
		</div>
	);
};

export default Save;
