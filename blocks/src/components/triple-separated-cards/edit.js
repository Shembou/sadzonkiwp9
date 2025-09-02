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
		['core/columns', {}, [
			['core/column', {}, [
				['core/image', {}],
				["core/heading", { placeholder: "Formy zamówień" }],
				["core/paragraph", { placeholder: "Zamówienia można składać mailowo lub telefonicznie – dane kontaktowe w zakładce" }],
				["core/paragraph", { placeholder: "Ustalenie terminu odbioru lub dostawy odbywa się indywidualnie." }],
			]],
			['core/column', {}, [
				['core/image', {}],
				["core/heading", { placeholder: "Formy płatności" }],
				["core/paragraph", { placeholder: "Oferujemy dwie wygodne opcje płatności:" }],
				["core/paragraph", { placeholder: "Gotówka przy odbiorze towaru" }],
				["core/paragraph", { placeholder: "Przelew z góry – przed realizacją zamówienia" }],
			]],
			['core/column', {}, [
				['core/image', {}],
				["core/heading", { placeholder: "Rabaty i zniżki" }],
				["core/paragraph", { placeholder: "Doceniamy większe zakupy i oferujemy rabaty:" }],
				["core/paragraph", { placeholder: "3% rabatu – przy zakupie od 5 000 zł netto (przy płatności gotówką)" }],
				["core/paragraph", { placeholder: "5% rabatu – przy zakupie od 10 000 zł netto (przy płatności gotówką)" }],
			]],
		]]
	]

	const blockProps = useBlockProps();
	const { children, ...innerBlockProps } = useInnerBlocksProps(blockProps, { template: TEMPLATE })

	return (
		<div {...innerBlockProps}>
			{children}
		</div>
	);
}
