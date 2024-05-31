import * as contentful from 'contentful'


export interface HeaderContent 
{
  contentTypeId: "header",
  fields: {
    navLinks: contentful.EntryFieldTypes.Text[],
    logo: contentful.EntryFieldTypes.Text,
  }
}