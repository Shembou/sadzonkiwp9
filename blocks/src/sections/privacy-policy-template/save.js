
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save() {

    const blockProps = useBlockProps.save();
    const { children, ...innerBlockProps } = useInnerBlocksProps.save(blockProps)

    return (
        <section {...innerBlockProps}>
            <div className='wrapper'>
                <div className='toc' />
                <div className='policy-wrapper'>
                    {children}
                </div>
            </div>
        </section>
    );
}
