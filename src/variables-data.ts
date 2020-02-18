import {VariableModel} from './variable.model';

export function variablesData(): VariableModel[] {
  return [
    {
      name: '$ownerName',
      description: 'Owner Name'
    },
    {
      name: '$companyName',
      description: 'Company Name',
    },
    {
      name: '$contractType',
      description: 'Contract Type',
    },
    {
      name: '$answerDate',
      description: 'Answer until Date',
    },
    {
      name: '$weeks',
      description: 'Time range in weeks',
    },
    {
      name: '$customerNumber',
      description: 'Customer Number',
    },
    {
      name: '$webshopURL',
      description: 'Link to Hermes web shop',
    },
    {
      name: '$storepageURL',
      description: 'Link to our store page',
    },
    {
      name: '$menuURL',
      description: 'Menu card download link',
    },
    {
      name: '$qrURL',
      description: 'QR Codes download link',
    },
  ];
}
