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
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';

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
		['core/row', {}, [
			['core/image', {}],
			["core/heading", { placeholder: "Odbiór i dostawa roślin" }],
			["core/paragraph", { placeholder: "Odbiór osobisty to nasz priorytet – uwielbiamy rozmowy o roślinach! Jeśli to nie jest możliwe, dostarczamy rośliny na teren całego kraju i za granicę." }],
			["core/buttons", {}, [
				['core/button', { placeholder: "O dostawach" }]
			]],
		]]
	]

	const blockProps = useBlockProps();
	const { children, ...innerBlockProps } = useInnerBlocksProps(blockProps)

	return (
		<div {...innerBlockProps}>
			{children}
		</div>
	);
}
