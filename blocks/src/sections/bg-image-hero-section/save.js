import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';



export default function save() {

    const blockProps = useBlockProps.save()
    const { children, ...innerBlockProps } = useInnerBlocksProps.save(blockProps)

    return (
        <section {...innerBlockProps}>
            {children}
        </section>
    )
}
