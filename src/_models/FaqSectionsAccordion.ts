import { Model } from '@stackbit/types';

export const FaqSectionsAccordion: Model = {
  type: 'object',
  name: 'FaqSectionsAccordion',
  fields: [
    {
      type: 'string',
      name: 'heading',
      label: 'Heading',
      required: true
    },
    {
      type: 'string',
      name: 'subheading',
      label: 'Subheading',
      required: true
    },
    {
      type: 'list',
      name: 'questions',
      label: 'Questions',
      required: true,
      items: {
        type: 'object',
        fields: [
          {
            type: 'string',
            name: 'question',
            label: 'Question',
            required: true
          },
          {
            type: 'markdown',
            name: 'answer',
            label: 'Answer',
            required: true
          }
        ]
      }
    }
  ]
};
