import { Model } from '@stackbit/types';

export const ContactDefaultForm: Model = {
  type: 'object',
  name: 'ContactDefaultForm',
  label: 'Contact Default Form',
  fields: [
    { name: 'heading', label: 'Heading', type: 'text' },
    { name: 'subheading', label: 'Subheading', type: 'text' },
    { name: 'submit_text', label: 'Submit Text', type: 'text' },
  ]
};