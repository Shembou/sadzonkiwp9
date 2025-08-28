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
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

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
export default function Edit() {

	const TEMPLATE = [
		['core/paragraph', { placeholder: 'O nas' }],
		['core/heading', { placeholder: 'Kim jesteśmy i czym się wyróżniamy' }],
		['core/paragraph', { placeholder: 'Jesteśmy rodzinną szkółką z wieloletnim doświadczeniem w produkcji roślin. Specjalizujemy się w sadzonkach P9, multiplatach (MP60, MP126, MP144) oraz roślinach kopanych z gruntu (BK, GK). Zapewniamy elastyczność zamówień, indywidualne podejście i doradztwo na każdym etapie współpracy.' }],
		['core/paragraph', { placeholder: 'Jesteśmy rodzinną szkółką z wieloletnim doświadczeniem w produkcji roślin. Specjalizujemy się w sadzonkach P9, multiplatach (MP60, MP126, MP144) oraz roślinach kopanych z gruntu (BK, GK). Zapewniamy elastyczność zamówień, indywidualne podejście i doradztwo na każdym etapie współpracy.' }],
		['core/buttons', {}, [
			['core/button', { placeholder: "O naszej szkółce" }]
		]],
		['core/image', {}]
	]

	const blockProps = useBlockProps();
	const { children, ...innerBlockProps } = useInnerBlocksProps(
		blockProps,
		{
			allowedBlocks: [
				"core/image",
				"core/paragraph",
				"core/heading",
				"core/buttons"],
			template: TEMPLATE
		});


	return (
		<div {...innerBlockProps}>
			<div className='wrapper'>
				{children}
			</div>
		</div>
	);
}
