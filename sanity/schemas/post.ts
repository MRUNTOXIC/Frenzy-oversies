export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'excerpt',
      title: 'Excerpt / Summary',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
    },
    {
      name: 'destinationTag',
      title: 'Associated Destination (e.g., UK, Canada, Germany)',
      type: 'string',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
    },
    {
      name: 'readingTime',
      title: 'Reading Time (e.g. 6 min read)',
      type: 'string',
    },
    {
      name: 'featured',
      title: 'Featured On Homepage',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'trending',
      title: 'Trending Article',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'body',
      title: 'Article Body Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          fields: [{ name: 'caption', type: 'string', title: 'Caption' }],
        },
      ],
    },
    {
      name: 'seoTitle',
      title: 'SEO Meta Title',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 2,
    },
  ],
};
