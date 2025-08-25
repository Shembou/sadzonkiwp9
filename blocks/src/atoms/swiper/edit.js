/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

import { Swiper } from 'swiper';
import 'swiper/css';

export default function Edit() {

	const swiper = new Swiper(".swiper-container", {
		effect: "coverflow",
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: "auto",
		spaceBetween: 40,
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 100,
			modifier: 1,
		},
		initialSlide: 3
	});

	return (
		<div {...useBlockProps()}>
			<div className='swiper swiper-container'>
				<div className='swiper-wrapper'>
					<InnerBlocks allowedBlocks={["core/image"]} />
				</div>
			</div>
		</div>
	);
}
