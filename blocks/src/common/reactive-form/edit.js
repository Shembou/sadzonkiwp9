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

	const blockProps = useBlockProps();
	const { children, ...innerBlockProps } = useInnerBlocksProps(blockProps);


	return (
		<form {...innerBlockProps}>
			<div className='first-step'>
				<label for="text">Sam zadaj nam pytanie</label>
				<textarea required minLength={2} id="text" name='text' rows={5} />
				<button id="next-step" type='button'>Przejdź dalej</button >
			</div>
			<div className='second-step'>
				<label for="name">Imię i nazwisko / nazwa firmy</label>
				<input type="text" required name="name" id="name" />
				<label for="mail">Adres e-mail</label>
				<input type="mail" required name="mail" id="mail" />
				<div className="checkbox-wrapper">
					<input type="checkbox" id="privacy-policy" name="privacy-policy" />
					<label for="privacy-policy">Akceptuję <a href="/polityka-prywatności" target='_blank'>Politykę prywatnści</a></label>
				</div>
				<button type="submit" className='wp-block-button is-style-fill is-style-fill--11'>Wyślij</button>
			</div>
		</form >
	);
}
