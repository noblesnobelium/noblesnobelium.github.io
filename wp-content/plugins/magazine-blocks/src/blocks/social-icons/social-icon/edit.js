import { InspectorControls } from '@wordpress/block-editor';
import { __experimentalInputControl as InputControl, Popover } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import useClientId from '../../../hooks/useClientId';
import useBlockCSS from '../../../hooks/useBlockCSS';

import { TabPanel,
	Tab,
	Panel,
	URLInput,
	Slider,
	Icon,
	Dimensions,
	blockResponsiveSettings,
	blockCSSSettings, IconSelector } from '../../../components';
const Edit = ( props ) => {
	const [ isVisible, setIsVisible ] = useState( false );
	const {
		attributes: {
			clientId,
			icon,
			link,
			iconSize,
			blockPadding,
			blockZIndex,
			cssID,
			hideOnDesktop,
			hideOnTablet,
			hideOnMobile,
			className,
		},
		setAttributes,
		deviceType,
	} = props;
	useClientId( props.clientId, setAttributes, props.attributes, 'social-icon' );
	useBlockCSS( { blockName: 'social-icon', clientId, attributes: props.attributes, deviceType } );
	return <>
		<InspectorControls>
			<TabPanel>
				<Tab tabTitle={ __( 'Settings', 'magazine-blocks' ) }>
					<Panel title={ __( 'General', 'magazine-blocks' ) } initialOpen>
						<URLInput
							label={ __( 'URL', 'magazine-blocks' ) }
							onChange={ val => setAttributes( { link: val } ) }
							value={ link }
							placeholder="https://"
							newTab
						/>
					</Panel>
					<Panel title={ __( 'Icons', 'magazine-blocks' ) } initialOpen>
						<Slider
							onChange={ val => setAttributes( { iconSize: val } ) }
							label={ __( 'Size', 'magazine-blocks' ) }
							units={ [ 'px', 'em', '%' ] }
							responsive={ true }
							min={ 0 }
							max={ 40 }
							value={ iconSize }
						/>
					</Panel>
				</Tab>
				<Tab tabTitle={ __( 'Advanced', 'magazine-blocks' ) }>
					<Panel title={ __( 'Advanced', 'magazine-blocks' ) } initialOpen={ true }>
						<Dimensions
							value={ blockPadding || {} }
							responsive
							label={ __( 'Block Padding', 'magazine-blocks' ) }
							min={ 0 }
							max={ 500 }
							defaultUnit="px"
							units={ [ 'px', 'rem', 'em', '%' ] }
							onChange={ val => setAttributes( { blockPadding: val } ) }
						/>
						<Slider
							label={ __( 'Z-Index', 'magazine-blocks' ) }
							value={ blockZIndex || 0 }
							min={ 0 }
							max={ 10000 }
							onChange={ val => setAttributes( { blockZIndex: val } ) }
						/>
						<InputControl
							className="magazine-blocks-control magazine-blocks-input"
							value={ cssID || '' }
							label={ __( 'CSS ID', 'magazine-blocks' ) }
							onChange={ val => setAttributes( { cssID: val } ) }
							labelPosition="side"
						/>
					</Panel>
					{ blockResponsiveSettings(
						hideOnDesktop,
						hideOnTablet,
						hideOnMobile,
						setAttributes
					) }
					{ blockCSSSettings( className, setAttributes, false ) }
				</Tab>
			</TabPanel>
		</InspectorControls>
		<span className={ `mzb-social-icon mzb-social-icon-${ clientId }` } onClick={ () => setIsVisible( true ) }>
			<a href="#"> <Icon type="socialIcon" name={ icon.icon || '' } /> </a>
		</span>
		{ isVisible && (
			<Popover onClose={ () => setIsVisible( false ) } position="top center">
				<IconSelector enableByDefault value={ icon || {} }
					onChange={ val => setAttributes( { icon: val } ) }
					type="socialIcon" />
				<URLInput
					label={ __( 'URL', 'magazine-blocks' ) }
					onChange={ val => setAttributes( { link: val } ) }
					value={ link }
					placeholder="https://"
					newTab
				/>
			</Popover> ) }
	</>;
};

export default withSelect( ( select ) => { // eslint-disable-line no-shadow
	const {
		__experimentalGetPreviewDeviceType: getPreviewDeviceType,
	} = select( 'core/edit-post' ) || false;

	if ( ! getPreviewDeviceType ) {
		return {
			deviceType: null,
		};
	}

	return {
		deviceType: getPreviewDeviceType().toLowerCase(),
	};
} )( Edit );
