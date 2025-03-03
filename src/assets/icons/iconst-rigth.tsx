const SvgIcon = ({ color = "black", ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M20 12H4M15 17s5-3.682 5-5-5-5-5-5"
        ></path>
    </svg>
);

export default SvgIcon;
