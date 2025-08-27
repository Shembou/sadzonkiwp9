import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
export default function save() {
	const blockProps = useBlockProps.save();
	const innerBlockProps = useInnerBlocksProps.save();

	return (
		<div {...blockProps}>
			<div className="swiper thumbs-parent-swiper">
				<div className="swiper-wrapper" {...innerBlockProps}></div>
				
				<div className='navigation'>
					<ArrowPrev />
					<ArrowNext />
				</div>
			</div>
		</div>
	);
}

const ArrowPrev = () => (
	<svg
		width="24"
		height="25"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="swiper-button-prev swiper-button"
	>
		<g clipPath="url(#clip0_6505_5283)">
			<path
				d="M5 12.9805H19"
				stroke="#A3F6A7"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5 12.9805L11 18.9805"
				stroke="#A3F6A7"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5 12.9805L11 6.98047"
				stroke="#A3F6A7"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_6505_5283">
				<rect width="24" height="24" fill="white" transform="translate(0 0.980469)" />
			</clipPath>
		</defs>
	</svg>
);

const ArrowNext = () => (

	<svg
		width="24"
		height="25"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="swiper-button-next swiper-button"
	>
		<g clipPath="url(#clip0_6505_5286)">
			<path
				d="M5 12.9805H19"
				stroke="#A3F6A7"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13 18.9805L19 12.9805"
				stroke="#A3F6A7"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13 6.98047L19 12.9805"
				stroke="#A3F6A7"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_6505_5286">
				<rect width="24" height="24" fill="white" transform="translate(0 0.980469)" />
			</clipPath>
		</defs>
	</svg>
);

