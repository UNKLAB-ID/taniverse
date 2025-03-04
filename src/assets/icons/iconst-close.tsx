
const CloseIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        className={className}
    >
        <path
            stroke="#1F1F1F"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M6 18 18 6M6 6l12 12"
        ></path>
    </svg>
);

export default CloseIcon;
