import * as contentful from 'contentful'

export interface ProjectContent 
{
  contentTypeId: "projects",
   fields: {
      projects: {
   id: contentful.EntryFieldTypes.Number,
   title: contentful.EntryFieldTypes.Text,
   description: contentful.EntryFieldTypes.Text,
   tech:contentful.EntryFieldTypes.Text[],
   image: contentful.EntryFieldTypes.Text,
   code: contentful.EntryFieldTypes.Text,
   demo: contentful.EntryFieldTypes.Text
     }
  }
}

export interface ProjectData {
      id: number,
   title: string,
   description: string,
   tech:string[],
   image: string,
   code: string,
   demo: string
}