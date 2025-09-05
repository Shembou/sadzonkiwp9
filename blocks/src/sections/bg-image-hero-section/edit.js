/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

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
		['core/paragraph', { placeholder: "Produkty" }],
		['core/heading', { placeholder: "Nasza oferta" }],
		['core/paragraph', { placeholder: "Oferujemy rośliny do dalszej produkcji oraz do nasadzeń – dostępne w multiplatach, doniczkach P9, C2–C5, a także kopane z gruntu. Nasz asortyment obejmuje drzewa, krzewy, byliny i trawy – stale aktualizowany i dopasowany do potrzeb rynku. Sprawdź szczegóły i zapytaj o dostępność wybranych pozycji." }],
		['core/buttons', {}, [
			['core/button', { placeholder: "Skontaktuj się z nami" }],
			['core/button', { placeholder: "Zamów próbne sadzonki" }]
		]],
		['core/image', {}]
	]

	const blockProps = useBlockProps()
	const { children, ...innerBlockProps } = useInnerBlocksProps(blockProps, {
		template: TEMPLATE
	})



	return (
		<section {...innerBlockProps}>
			{children}
		</section>
	);
}
