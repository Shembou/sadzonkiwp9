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

	function generateSideImagesColumn() {
		return ['core/column', {}, [
			['core/image', {}],
			['core/image', {}],
			['core/image', {}]
		]]
	}

	const TEMPLATE = [
		['core/columns', {}, [
			generateSideImagesColumn(),
			['core/column', {}, [
				['core/paragraph', { placeholder: "Logistyka" }],
				['core/heading', { placeholder: "Zmienność i dostępność" }],
				['core/paragraph', { placeholder: "Asortyment regularnie aktualizujemy – każdego sezonu wprowadzamy nowości oraz reagujemy na trendy i potrzeby rynku. Ze względu na technologię produkcji, nie wszystkie rośliny dostępne są „od ręki” – w takich przypadkach chętnie dokonamy rezerwacji z wyprzedzeniem. Jeśli nie widzisz jakiejś odmiany w naszym asortymencie zgłoś nam ten problem – zaproponujemy zamiennik lub wspólnie znajdziemy inne rozwiązanie." }]
			]],
			generateSideImagesColumn()
		]]
	];

	const blockProps = useBlockProps();
	const { children, ...innerBlockProps } = useInnerBlocksProps(
		blockProps,
		{
			template: TEMPLATE,
			templateLock: "all"
		},
	)

	return <section {...innerBlockProps}>
		{children}
		{VECTORS && VECTORS.map((v, i) => (
			<React.Fragment key={i}>{v}
			</React.Fragment>
		))}
	</section>
}

const VECTORS = [
	<svg width="1366" height="254" viewBox="0 0 1366 254" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M-136 252.843C-130.875 247.719 -24.5763 186.378 84.368 124.151C192.22 62.5481 320.077 46.358 440.051 78.5047L447.097 80.3929C522.768 100.669 602.443 100.669 678.114 80.3929L849.478 34.476C897.449 21.6223 948.633 35.3371 983.75 70.4541V70.4541C1018.87 105.571 1070.05 119.286 1118.02 106.432L1511.5 1" stroke="#388E3C" />
	</svg>,
	<svg width="1366" height="183" viewBox="0 0 1366 183" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M-145 182.343C-139.755 180.245 115.482 112.121 290.416 65.5458C336.011 53.4065 383.985 53.4556 429.56 65.6675L496.581 83.6256C548.201 97.4572 603.279 82.6991 641.067 44.9105V44.9105C678.856 7.12196 733.934 -7.63614 785.554 6.19543L924.832 43.5149C968.835 55.3053 1015.17 55.3053 1059.17 43.5149V43.5149C1125.65 25.701 1196.49 35.0267 1256.09 69.4407L1389 146.174" stroke="#CFEBD0" />
	</svg>,
	<svg width="1366" height="183" viewBox="0 0 1366 183" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1435 182.5C1429.76 180.402 1174.52 112.277 999.584 65.7025C953.989 53.5632 906.015 53.6123 860.44 65.8242L793.419 83.7823C741.799 97.6139 686.721 82.8558 648.933 45.0672V45.0672C611.144 7.2787 556.066 -7.4794 504.446 6.35216L365.168 43.6717C321.165 55.4621 274.835 55.4621 230.832 43.6717V43.6717C164.35 25.8577 93.5133 35.1835 33.9065 69.5975L-99 146.331" stroke="#CFEBD0" />
	</svg>
]
