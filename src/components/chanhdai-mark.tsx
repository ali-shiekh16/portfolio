export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="302"
      height="131"
      viewBox="0 0 302 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 32.9492H33V129.949H1V32.9492Z" fill="currentColor" />
      <path d="M97 32.9492H129V129.949H97V32.9492Z" fill="currentColor" />
      <path d="M152 1.00003H184V98H152V1.00003Z" fill="currentColor" />
      <path d="M269 1.00003H301V130H269V1.00003Z" fill="currentColor" />
      <path
        d="M30.8701 32.9998L30.9873 1L98.7749 1.24814L98.6577 33.2479L30.8701 32.9998Z"
        fill="currentColor"
      />
      <path
        d="M179 130L179.117 98L246.905 98.2481L246.788 130.248L179 130Z"
        fill="currentColor"
      />
      <path
        d="M35.5732 97.9585L35.6904 65.9587L93.428 66.1701L93.3108 98.1699L35.5732 97.9585Z"
        fill="currentColor"
      />
      <path d="M1 32.9492H33V129.949H1V32.9492Z" stroke="currentColor" />
      <path d="M97 32.9492H129V129.949H97V32.9492Z" stroke="currentColor" />
      <path d="M152 1.00003H184V98H152V1.00003Z" stroke="currentColor" />
      <path d="M269 1.00003H301V130H269V1.00003Z" stroke="currentColor" />
      <path
        d="M30.8701 32.9998L30.9873 1L98.7749 1.24814L98.6577 33.2479L30.8701 32.9998Z"
        stroke="currentColor"
      />
      <path
        d="M179 130L179.117 98L246.905 98.2481L246.788 130.248L179 130Z"
        stroke="currentColor"
      />
      <path
        d="M35.5732 97.9585L35.6904 65.9587L93.428 66.1701L93.3108 98.1699L35.5732 97.9585Z"
        stroke="currentColor"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg width="302" height="131" viewBox="0 0 302 131" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 32.9492H33V129.949H1V32.9492Z" fill="${color}"/><path d="M97 32.9492H129V129.949H97V32.9492Z" fill="${color}"/><path d="M152 1.00003H184V98H152V1.00003Z" fill="${color}"/><path d="M269 1.00003H301V130H269V1.00003Z" fill="${color}"/><path d="M30.8701 32.9998L30.9873 1L98.7749 1.24814L98.6577 33.2479L30.8701 32.9998Z" fill="${color}"/><path d="M179 130L179.117 98L246.905 98.2481L246.788 130.248L179 130Z" fill="${color}"/><path d="M35.5732 97.9585L35.6904 65.9587L93.428 66.1701L93.3108 98.1699L35.5732 97.9585Z" fill="${color}"/><path d="M1 32.9492H33V129.949H1V32.9492Z" stroke="${color}"/><path d="M97 32.9492H129V129.949H97V32.9492Z" stroke="${color}"/><path d="M152 1.00003H184V98H152V1.00003Z" stroke="${color}"/><path d="M269 1.00003H301V130H269V1.00003Z" stroke="${color}"/><path d="M30.8701 32.9998L30.9873 1L98.7749 1.24814L98.6577 33.2479L30.8701 32.9998Z" stroke="${color}"/><path d="M179 130L179.117 98L246.905 98.2481L246.788 130.248L179 130Z" stroke="${color}"/><path d="M35.5732 97.9585L35.6904 65.9587L93.428 66.1701L93.3108 98.1699L35.5732 97.9585Z" stroke="${color}"/></svg>`;
}
