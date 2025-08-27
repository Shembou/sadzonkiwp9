import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save() {

	const blockProps = useBlockProps.save();
	const { children, ...innerBlockProps } = useInnerBlocksProps.save(blockProps);

	return <div {...innerBlockProps}>
		{children}
		<span />
	</div>
}
