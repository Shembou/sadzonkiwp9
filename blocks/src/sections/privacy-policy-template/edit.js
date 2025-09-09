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
		['core/heading', { placeholder: "Tytuł posta" }],
		['core/paragraph', { placeholder: "Zawartość posta" }]
	];

	const blockProps = useBlockProps();
	const { children, ...innerBlockProps } = useInnerBlocksProps(
		blockProps,
		{
			template: TEMPLATE,
		},
	)

	return <section {...innerBlockProps}>
		<div className='wrapper'>
			<div className='toc'>
				<p>{__('The table of contents will automatically generate', "sections")}</p>
			</div>
			<div className='policy-wrapper'>
				{children}
			</div>
		</div>
	</section>
}
