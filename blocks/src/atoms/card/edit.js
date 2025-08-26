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
export default function Edit() {
	const TEMPLATE = [
		["core/image", {}],
		["core/heading", { placeholder: "Gwarancja jakości" }],
		["core/paragraph", { placeholder: "Każda sadzonka przechodzi rygorystyczną kontrolę stanu zdrowotnego i spełnienia wymogów jakościowych. Dostarczamy wyłącznie produkty spełniające najwyższe standardy dzięki czemu... itd. Szkółka znajduje się pod stałym nadzorem Państwowej Inspekcji Ochrony Roślin i Nasiennictwa" }]
	]

	return (
		<div {...useBlockProps()}>
			<InnerBlocks template={TEMPLATE} />
		</div>
	);
}
