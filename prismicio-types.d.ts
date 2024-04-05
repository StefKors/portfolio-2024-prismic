// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ApplicationDocumentDataSlicesSlice = never;

/**
 * Content for Application documents
 */
interface ApplicationDocumentData {
  /**
   * Url field in *Application*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: application.url
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  url: prismic.LinkField;

  /**
   * Name field in *Application*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: application.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Icon field in *Application*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: application.icon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * Published At field in *Application*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: application.published_at
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  published_at: prismic.DateField;

  /**
   * Slice Zone field in *Application*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: application.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ApplicationDocumentDataSlicesSlice> /**
   * Meta Description field in *Application*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: application.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Application*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: application.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Application*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: application.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Application document from Prismic
 *
 * - **API ID**: `application`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ApplicationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ApplicationDocumentData>,
    "application",
    Lang
  >;

type BlogpostDocumentDataSlicesSlice = TextBlockSlice | EmbedSlice;

/**
 * Content for BlogPost documents
 */
interface BlogpostDocumentData {
  /**
   * Title field in *BlogPost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Created At field in *BlogPost*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.created_at
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  created_at: prismic.DateField;

  /**
   * Slice Zone field in *BlogPost*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogpostDocumentDataSlicesSlice> /**
   * Meta Description field in *BlogPost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blogpost.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *BlogPost*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *BlogPost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blogpost.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * BlogPost document from Prismic
 *
 * - **API ID**: `blogpost`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogpostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogpostDocumentData>,
    "blogpost",
    Lang
  >;

type EventsDocumentDataSlicesSlice = never;

/**
 * Content for Event documents
 */
interface EventsDocumentData {
  /**
   * Name field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: events.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Location field in *Event*
   *
   * - **Field Type**: GeoPoint
   * - **Placeholder**: *None*
   * - **API ID Path**: events.location
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#geopoint
   */
  location: prismic.GeoPointField;

  /**
   * Date field in *Event*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: events.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * Url field in *Event*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: events.url
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  url: prismic.LinkField;

  /**
   * Project Link field in *Event*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: events.project_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  project_link: prismic.ContentRelationshipField<"projects">;

  /**
   * Slice Zone field in *Event*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: events.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<EventsDocumentDataSlicesSlice> /**
   * Meta Description field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: events.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Event*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: events.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: events.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Event document from Prismic
 *
 * - **API ID**: `events`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EventsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<EventsDocumentData>, "events", Lang>;

type HomepageDocumentDataSlicesSlice = never;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Tagline field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.tagline
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  tagline: prismic.RichTextField;

  /**
   * Introduction field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.introduction
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  introduction: prismic.RichTextField;

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type JobDocumentDataSlicesSlice = never;

/**
 * Content for Job documents
 */
interface JobDocumentData {
  /**
   * Role field in *Job*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: job.role
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  role: prismic.KeyTextField;

  /**
   * Company field in *Job*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: job.company
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company: prismic.KeyTextField;

  /**
   * Start Date field in *Job*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: job.start_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  start_date: prismic.DateField;

  /**
   * End Date field in *Job*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: job.end_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  end_date: prismic.DateField;

  /**
   * Url field in *Job*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: job.url
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  url: prismic.LinkField;

  /**
   * Slice Zone field in *Job*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: job.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<JobDocumentDataSlicesSlice> /**
   * Meta Description field in *Job*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: job.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Job*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: job.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Job*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: job.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Job document from Prismic
 *
 * - **API ID**: `job`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type JobDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<JobDocumentData>, "job", Lang>;

type ProjectsDocumentDataSlicesSlice =
  | ProjectImageSlice
  | AppWindowScreenshotSlice;

/**
 * Content for Project documents
 */
interface ProjectsDocumentData {
  /**
   * Date field in *Project*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Url field in *Project*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.url
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  url: prismic.LinkField;

  /**
   * Tech field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.tech
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tech: prismic.KeyTextField;

  /**
   * Slice Zone field in *Project*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectsDocumentDataSlicesSlice> /**
   * Meta Description field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: projects.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: projects.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Project document from Prismic
 *
 * - **API ID**: `projects`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectsDocumentData>,
    "projects",
    Lang
  >;

/**
 * Item in *Showcase → Platform Support*
 */
export interface ShowcaseDocumentDataPlatformSupportItem {
  /**
   * MacOS field in *Showcase → Platform Support*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: showcase.platform_support[].macos
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  macos: prismic.BooleanField;

  /**
   * iOS field in *Showcase → Platform Support*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: showcase.platform_support[].ios
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  ios: prismic.BooleanField;

  /**
   * iPadOS field in *Showcase → Platform Support*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: showcase.platform_support[].ipados
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  ipados: prismic.BooleanField;

  /**
   * tvOS field in *Showcase → Platform Support*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: showcase.platform_support[].tvos
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  tvos: prismic.BooleanField;

  /**
   * WatchOS field in *Showcase → Platform Support*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: showcase.platform_support[].watchos
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  watchos: prismic.BooleanField;

  /**
   * VisionOS field in *Showcase → Platform Support*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: showcase.platform_support[].visionos
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  visionos: prismic.BooleanField;
}

type ShowcaseDocumentDataSlicesSlice = TextBlockSlice | FeatureBlocksSlice;

/**
 * Content for Showcase documents
 */
interface ShowcaseDocumentData {
  /**
   * Title field in *Showcase*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Project Link field in *Showcase*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.project_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  project_link: prismic.ContentRelationshipField<"projects">;

  /**
   * Icon field in *Showcase*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.icon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * Preview field in *Showcase*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.preview
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  preview: prismic.ImageField<never>;

  /**
   * Platform Support field in *Showcase*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.platform_support[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  platform_support: prismic.GroupField<
    Simplify<ShowcaseDocumentDataPlatformSupportItem>
  >;

  /**
   * Slice Zone field in *Showcase*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ShowcaseDocumentDataSlicesSlice> /**
   * Meta Description field in *Showcase*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: showcase.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Showcase*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Showcase*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: showcase.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Showcase document from Prismic
 *
 * - **API ID**: `showcase`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ShowcaseDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ShowcaseDocumentData>,
    "showcase",
    Lang
  >;

export type AllDocumentTypes =
  | ApplicationDocument
  | BlogpostDocument
  | EventsDocument
  | HomepageDocument
  | JobDocument
  | ProjectsDocument
  | ShowcaseDocument;

/**
 * Primary content in *AppWindowScreenshot → Primary*
 */
export interface AppWindowScreenshotSliceDefaultPrimary {
  /**
   * light field in *AppWindowScreenshot → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: app_window_screenshot.primary.light
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  light: prismic.ImageField<never>;

  /**
   * dark field in *AppWindowScreenshot → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: app_window_screenshot.primary.dark
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  dark: prismic.ImageField<never>;

  /**
   * device field in *AppWindowScreenshot → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: MacOS, iOS or Web
   * - **Default Value**: MacOS
   * - **API ID Path**: app_window_screenshot.primary.device
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  device: prismic.SelectField<"MacOS" | "iOS" | "Web", "filled">;
}

/**
 * Default variation for AppWindowScreenshot Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AppWindowScreenshotSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AppWindowScreenshotSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AppWindowScreenshot*
 */
type AppWindowScreenshotSliceVariation = AppWindowScreenshotSliceDefault;

/**
 * AppWindowScreenshot Shared Slice
 *
 * - **API ID**: `app_window_screenshot`
 * - **Description**: AppWindowScreenshot
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AppWindowScreenshotSlice = prismic.SharedSlice<
  "app_window_screenshot",
  AppWindowScreenshotSliceVariation
>;

/**
 * Default variation for GistEmbed Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EmbedSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *GistEmbed*
 */
type EmbedSliceVariation = EmbedSliceDefault;

/**
 * GistEmbed Shared Slice
 *
 * - **API ID**: `embed`
 * - **Description**: Embed
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EmbedSlice = prismic.SharedSlice<"embed", EmbedSliceVariation>;

/**
 * Primary content in *FeatureBlocks → Items*
 */
export interface FeatureBlocksSliceDefaultItem {
  /**
   * Title field in *FeatureBlocks → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature_blocks.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *FeatureBlocks → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature_blocks.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Small Icon field in *FeatureBlocks → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: feature_blocks.items[].small_icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  small_icon: prismic.ImageField<never>;
}

/**
 * Default variation for FeatureBlocks Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeatureBlocksSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<FeatureBlocksSliceDefaultItem>
>;

/**
 * Slice variation for *FeatureBlocks*
 */
type FeatureBlocksSliceVariation = FeatureBlocksSliceDefault;

/**
 * FeatureBlocks Shared Slice
 *
 * - **API ID**: `feature_blocks`
 * - **Description**: FeatureBlocks
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeatureBlocksSlice = prismic.SharedSlice<
  "feature_blocks",
  FeatureBlocksSliceVariation
>;

/**
 * Primary content in *ProjectImage → Items*
 */
export interface ProjectImageSliceDefaultItem {
  /**
   * picture field in *ProjectImage → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_image.items[].picture
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  picture: prismic.ImageField<never>;
}

/**
 * Default variation for ProjectImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ProjectImageSliceDefaultItem>
>;

/**
 * Slice variation for *ProjectImage*
 */
type ProjectImageSliceVariation = ProjectImageSliceDefault;

/**
 * ProjectImage Shared Slice
 *
 * - **API ID**: `project_image`
 * - **Description**: ProjectImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectImageSlice = prismic.SharedSlice<
  "project_image",
  ProjectImageSliceVariation
>;

/**
 * Primary content in *TextBlock → Primary*
 */
export interface TextBlockSliceDefaultPrimary {
  /**
   * content field in *TextBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TextBlock*
 */
type TextBlockSliceVariation = TextBlockSliceDefault;

/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: TextBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSlice = prismic.SharedSlice<
  "text_block",
  TextBlockSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ApplicationDocument,
      ApplicationDocumentData,
      ApplicationDocumentDataSlicesSlice,
      BlogpostDocument,
      BlogpostDocumentData,
      BlogpostDocumentDataSlicesSlice,
      EventsDocument,
      EventsDocumentData,
      EventsDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      JobDocument,
      JobDocumentData,
      JobDocumentDataSlicesSlice,
      ProjectsDocument,
      ProjectsDocumentData,
      ProjectsDocumentDataSlicesSlice,
      ShowcaseDocument,
      ShowcaseDocumentData,
      ShowcaseDocumentDataPlatformSupportItem,
      ShowcaseDocumentDataSlicesSlice,
      AllDocumentTypes,
      AppWindowScreenshotSlice,
      AppWindowScreenshotSliceDefaultPrimary,
      AppWindowScreenshotSliceVariation,
      AppWindowScreenshotSliceDefault,
      EmbedSlice,
      EmbedSliceVariation,
      EmbedSliceDefault,
      FeatureBlocksSlice,
      FeatureBlocksSliceDefaultItem,
      FeatureBlocksSliceVariation,
      FeatureBlocksSliceDefault,
      ProjectImageSlice,
      ProjectImageSliceDefaultItem,
      ProjectImageSliceVariation,
      ProjectImageSliceDefault,
      TextBlockSlice,
      TextBlockSliceDefaultPrimary,
      TextBlockSliceVariation,
      TextBlockSliceDefault,
    };
  }
}