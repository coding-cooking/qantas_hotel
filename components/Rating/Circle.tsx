import { HAS_COLOUR } from ".";

type IconProps = React.SVGProps<SVGSVGElement>;

export const HalfCircle = ({ leftFill, rightFill, ...rest }: Omit<IconProps, "fill"> & { leftFill: string; rightFill: string }) => (
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <title>Half Circle</title>
        <circle data-testid="circle-path" cx="8" cy="8" r="7" fill={rightFill} />
        <path data-testid="circle-path" d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15V1Z" fill={leftFill} />
    </svg>
);

export const Circle = (props: IconProps & Required<Pick<IconProps, "fill">>) => (
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>{props.fill === HAS_COLOUR ? 'Full Circle' : 'Empty Circle'}</title>
        <circle data-testid="circle-path" cx="8" cy="8" r="7" fill={props.fill} />
    </svg>
);