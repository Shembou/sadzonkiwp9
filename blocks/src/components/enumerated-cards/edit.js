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

	function generateColumn(heading, paragraph) {
		return ['core/column', {}, [
			['core/heading', { placeholder: heading }],
			['core/paragraph', { placeholder: paragraph }]
		]]
	}

	const TEMPLATE = [
		['core/columns', {}, [
			generateColumn("Sprzedaż wyłącznie hurtowa", "Nasza oferta skierowana jest wyłącznie do firm i profesjonalistów z branży ogrodniczej – szkółkarzy, centrów ogrodniczych, wykonawców terenów zielonych i architektów krajobrazu."),
			generateColumn("Faktury VAT", "Każda transakcja realizowana przez naszą szkółkę dokumentowana jest fakturą VAT oraz dodajemy dokumenty wymagane przez PIORIN w tym paszporty roślin. Przed złożeniem zamówienia prosimy o podanie pełnych danych firmy."),
			generateColumn("Godziny otwarcia", "Zamówienia i odbiory realizujemy w dni robocze w godz. 8:00–17:00 oraz w soboty w godz. 7:00–16:00. Prosimy o wcześniejszy kontakt w celu umówienia wizyty – zwłaszcza przy odbiorze większej ilości towaru."),
			generateColumn("Obsługa klientów detalicznych", "Osoby prywatne oraz hobbystów zapraszamy do naszego sklepu detalicznego online: www.dosaduiogrodu.pl, gdzie dostępna jest oferta dopasowana do klientów indywidualnych.")
		]]
	]

	const blockProps = useBlockProps();
	const { children, ...innerBlockProps } = useInnerBlocksProps(
		blockProps,
		{
			template: TEMPLATE
		})
	return (
		<div {...innerBlockProps}>
			{children}
		</div>
	);
}
