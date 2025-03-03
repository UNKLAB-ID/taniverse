const SvgIconLeft = ({ color = "black", ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        {...props} // biar bisa nerima props lain seperti className atau ukuran
    >
        <path
            stroke={color} // Warna stroke dikontrol lewat props
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 12h16M9 7s-5 3.682-5 5 5 5 5 5"
        />
    </svg>
);

export default SvgIconLeft;
