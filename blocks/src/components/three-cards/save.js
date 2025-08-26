/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save() {
	return (
		<div {...useBlockProps.save()}>
			<InnerBlocks.Content />
			{VECTORS && VECTORS.map((v, i) => (
				<React.Fragment key={i}>{v}
				</React.Fragment>
			))}
		</div>
	);
}

const VECTORS = [
	<svg width="100%" height="254" viewBox="0 0 1366 254" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none'>
		<path d="M-142 253.052C-136.875 247.927 -30.5763 186.586 78.368 124.359C186.22 62.7565 314.077 46.5663 434.051 78.7131L441.097 80.6012C516.768 100.877 596.443 100.877 672.114 80.6012L843.478 34.6844C891.449 21.8306 942.633 35.5454 977.75 70.6624V70.6624C1012.87 105.779 1064.05 119.494 1112.02 106.641L1505.5 1.20837" stroke="#388E3C" />
	</svg>,
	<svg width="100%" height="184" viewBox="0 0 1366 184" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none'>
		<path d="M-151 182.552C-145.755 180.454 109.482 112.329 284.416 65.7541C330.011 53.6148 377.985 53.664 423.56 65.8759L490.581 83.834C542.201 97.6655 597.279 82.9074 635.067 45.1189V45.1189C672.856 7.33034 727.934 -7.42777 779.554 6.4038L918.832 43.7233C962.835 55.5137 1009.17 55.5137 1053.17 43.7233V43.7233C1119.65 25.9093 1190.49 35.2351 1250.09 69.6491L1383 146.383" stroke="#CFEBD0" />
	</svg>,
	<svg width="100%" height="184" viewBox="0 0 1366 184" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none'>
		<path d="M1429 182.708C1423.76 180.61 1168.52 112.486 993.584 65.9109C947.989 53.7716 900.015 53.8207 854.44 66.0326L787.419 83.9907C735.799 97.8223 680.721 83.0642 642.933 45.2756V45.2756C605.144 7.48708 550.066 -7.27103 498.446 6.56054L359.168 43.8801C315.165 55.6705 268.835 55.6705 224.832 43.8801V43.8801C158.35 26.0661 87.5133 35.3919 27.9065 69.8058L-105 146.539" stroke="#CFEBD0" />
	</svg>
]

