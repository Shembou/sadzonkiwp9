import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

import "./editor.scss"

export default function Edit() {

	const blockProps = useBlockProps();
	const { children, ...innerBlockProps } = useInnerBlocksProps(blockProps, { allowedBlocks: ["core/image"] });

	return <div {...innerBlockProps} >
		{children}
		<span />
	</div>
}
