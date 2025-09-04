import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function Edit() {

	const blockProps = useBlockProps();
	const {  ...innerBlockProps } = useInnerBlocksProps(blockProps, { allowedBlocks: [] });

	return <div {...innerBlockProps} >
		<p>Data blogu + czas czytania </p>
	</div>
}
