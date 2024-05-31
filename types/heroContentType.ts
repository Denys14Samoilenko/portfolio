import * as contentful from 'contentful'

export interface HeroContent 
{
  contentTypeId: "hero",
  fields: {
    title: contentful.EntryFieldTypes.Text,
    description: contentful.EntryFieldTypes.Text,
  }
}