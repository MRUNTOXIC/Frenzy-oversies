export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Editorial / Advisory Role',
      type: 'string',
    },
    {
      name: 'avatar',
      title: 'Profile Photograph',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
      rows: 3,
    },
  ],
};
