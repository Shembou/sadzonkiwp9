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
			<label for="name">Imię i nazwisko / nazwa firmy</label>
			<input
				type="text"
				required
				name="name"
				id="name"
				title="Proszę podać imię i nazwisko lub nazwę firmy"
			/>
			<label for="mail">Adres e-mail</label>
			<input
				type="email"
				required
				name="mail"
				id="mail"
				title="Proszę podać poprawny adres email"
			/>
			<label for="mail">Numer telefonu</label>
			<input
				type="tel"
				required
				name="tel"
				id="tel"
				title="Proszę podać poprawny numer telefonu"
				pattern="^\+?[0-9\s\-]{7,15}$"
			/>
			<label for="text" id="input-label">Sam zadaj nam pytanie</label>
			<textarea
				required
				minlength="4"
				id="text"
				name="text"
				rows="5"
				title="Proszę wpisać conajmniej 4 litery"
			></textarea>
			<div class="checkbox-wrapper">
				<input
					type="checkbox"
					id="privacy-policy"
					name="privacy-policy"
					required
					title='Proszę zaakceptować politykę prywatności'
				/>
				<label for="privacy-policy">
					Akceptuję <a href="/polityka-prywatności" target="_blank">Politykę prywatnści</a>
				</label>
			</div>
			<button type="submit">Wyślij</button>
		</form >
	);
}