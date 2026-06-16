import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  id: string;
};

export const Icon = ({ id, className = "", ...rest }: IconProps) => {
  return (
    <svg className={className} {...rest}>
      <use href={`/sprite.svg#${id}`}></use>
    </svg>
  );
};
