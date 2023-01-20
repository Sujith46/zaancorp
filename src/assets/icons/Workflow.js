export const Workflow = ({ color = "#070F21" }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.75"
        y="1.75"
        width="18.5"
        height="18.5"
        rx="3.25"
        stroke={color}
        strokeWidth="1.5"
      />
      <rect x="5" y="5" width="2" height="9" rx="1" fill={color} />
      <rect x="10" y="5" width="2" height="6" rx="1" fill={color} />
      <rect x="15" y="5" width="2" height="12" rx="1" fill={color} />
    </svg>
  );
};
