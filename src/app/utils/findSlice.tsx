import { AllDocumentTypes } from 'prismicio-types';

import { MaybeUndefined } from '@/app/utils/types';
import { components } from '@/slices';

/**
 * Valid slice type identifiers, derived from the component mapping in slices/index.ts
 * @example 'app_icon' | 'app_window_screenshot' | 'feature_blocks' | etc.
 */
export type SliceType = keyof typeof components;

/**
 * Extracts document types that contain slice arrays from AllDocumentTypes
 * Uses TypeScript's Extract utility to filter the union type to only those
 * types that match the structure { data: { slices: any[] } }
 *
 * @example If AllDocumentTypes = ProjectDocument | BlogDocument | ContactDocument
 * and only ProjectDocument and BlogDocument have slices arrays,
 * then DocumentWithSlices = ProjectDocument | BlogDocument
 */
type DocumentWithSlices = Extract<
  AllDocumentTypes,
  { data: { slices: any[] } }
>;

/**
 * Generic type that extracts the slice type from a document type
 * Uses conditional type inference with infer to extract the slice array type
 *
 * @template T - A document type that may contain slices
 * @returns The type of slices array if it exists, never if it doesn't
 *
 * @example If T = { data: { slices: TextSlice[] } }
 * then DocumentSlices<T> = TextSlice[]
 */
type DocumentSlices<T> = T extends { data: { slices: infer S } } ? S : never;

/**
 * Union type of all possible slice types across all documents
 * Uses indexed access [number] to convert the array type to a union of its elements
 *
 * @example If DocumentSlices<DocumentWithSlices> = (TextSlice | ImageSlice)[]
 * then Slice = TextSlice | ImageSlice
 */
export type Slice = DocumentSlices<DocumentWithSlices>[number];

/**
 * Finds a slice of a specific type within a page's slice zone
 *
 * @template P - Document type extending AllDocumentTypes
 * @template T - Slice type identifier extending Slice['slice_type']
 *
 * @param page - The page document containing slices
 * @param type - The type of slice to find
 *
 * @returns The first matching slice of the specified type, or undefined if not found
 * Uses Extract to narrow the return type to only the specific slice type requested
 *
 * @example
 * // Returns AppIconSlice | undefined
 * const iconSlice = findSlice(page, 'app_icon');
 *
 * // Returns AppWindowScreenshotSlice | undefined
 * const screenshotSlice = findSlice(page, 'app_window_screenshot');
 */
export function findSlice<
  P extends AllDocumentTypes,
  T extends Slice['slice_type'],
>(page: P, type: T): MaybeUndefined<Extract<Slice, { slice_type: T }>> {
  return page.data.slices?.find(
    (slice) => slice.slice_type === type
  ) as MaybeUndefined<Extract<Slice, { slice_type: T }>>;
}
