import * as contentful from 'contentful';

export interface SkillsContent {
	contentTypeId: 'skills';
	fields: {
		skills: {
			id: contentful.EntryFieldTypes.Number;
			title: contentful.EntryFieldTypes.Text;
		};
	};
}

