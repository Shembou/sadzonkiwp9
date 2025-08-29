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

	function generate_side_column(headings, paragraphs) {
		const data = headings.map((_, index) => {
			return [
				['core/image', {}],
				['core/heading', { placeholder: headings[index] }],
				['core/paragraph', { placeholder: paragraphs[index] }]
			]
		}).flat();

		return ['core/column', {}, data];
	}

	const TEMPLATE = [
		['core/columns', {}, [
			generate_side_column(
				["2 000 000", "20 lat"],
				["wyprodukowanych sadzonek rocznie", "tradycji i doświadczenia w szkółkarstwie"]
			),
			['core/column', {}, [
				['core/image', {}]
			]],
			generate_side_column(
				["500+", "Ponad 400"],
				["stałych klientów w Polsce i za granicą", "odmian roślin w sprzedaży"]
			)
		]]
	];

	const blockProps = useBlockProps();
	const { children, ...innerBlockProps } = useInnerBlocksProps(
		blockProps,
		{
			template: TEMPLATE,
			templateLock: 'all',
		}
	)
	return (
		<div {...innerBlockProps}>
			{children}
		</div>
	);
}
