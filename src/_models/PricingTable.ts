import { Model } from '@stackbit/types';

export const PricingTable: Model = {
  type: 'object',
  name: 'PricingTable',
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
      name: 'products',
      label: 'Products',
      required: true,
      items: {
        type: 'object',
        fields: [
          {
            type: 'string',
            name: 'id',
            label: 'ID',
            required: true
          },
          {
            type: 'string',
            name: 'payment_link_id',
            label: 'Payment Link ID',
            required: true
          }
        ]
      }
    }
  ]
};
