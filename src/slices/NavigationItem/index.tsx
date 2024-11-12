import { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `NavigationItem`.
 */
export type NavigationItemProps =
  SliceComponentProps<Content.NavigationItemSlice>;

/**
 * Component for "NavigationItem" Slices.
 */
const NavigationItem = ({ slice }: NavigationItemProps): JSX.Element => {
  console.log(slice);
  return (
    <ul>
      <li>
        <PrismicNextLink field={slice.primary.link} />
      </li>

      {slice.primary.child_link.length > 0 ? (
        <ul>
          {slice.primary.child_link.map(({ link }) => (
            <li key={link?.id ?? link.text}>
              <PrismicNextLink field={link}>
                {link.text ?? link.uid}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      ) : null}
    </ul>
  );
};

export default NavigationItem;
