
const LogoSecunderIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="208"
        height="49"
        fill="none"
        viewBox="0 0 208 49"
        className={className}
    >
        <path fill="url(#pattern0_1_275)" d="M0 .863h208v47.729H0z"></path>
        <defs>
            <pattern
                id="pattern0_1_275"
                width="1"
                height="1"
                patternContentUnits="objectBoundingBox"
            >
                <use
                    xlinkHref="#image0_1_275"
                    transform="matrix(.00146 0 0 .00583 .004 -.009)"
                ></use>
            </pattern>
            <image
                xlinkHref="data:image/png;base64,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"
                id="image0_1_275"
                width="680"
                height="173"
                preserveAspectRatio="none"
            ></image>
        </defs>
    </svg>
);

export default LogoSecunderIcon;
