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
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

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
		['core/heading', { placeholder: "Czy mogę złoźyć zamówienie próbne?" }],
		['core/paragraph', { placeholder: "Oczywiście – zamówienie próbne to świetny sposób, by bez ryzyka sprawdzić jakość naszych sadzonek P9. Wystarczy wypełnić krótki formularz na stronie, podać rodzaj roślin, ilość oraz preferowany termin odbioru." }]
	];

	const blockProps = useBlockProps({
		name: "faq"
	});
	const { children, ...innerBlockProps } = useInnerBlocksProps(
		blockProps,
		{
			template: TEMPLATE,

		},
	)
	return (
		<details {...innerBlockProps}>
			{children}
		</details>
	);
}