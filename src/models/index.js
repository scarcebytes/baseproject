// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TokenAccount, Endorsement, ImportantPerson, EndorsementImportantPerson } = initSchema(schema);

export {
  TokenAccount,
  Endorsement,
  ImportantPerson,
  EndorsementImportantPerson
};