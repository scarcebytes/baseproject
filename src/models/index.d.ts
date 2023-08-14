import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerTokenAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TokenAccount, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly link?: string | null;
  readonly ImportantPerson?: ImportantPerson | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tokenAccountImportantPersonId?: string | null;
}

type LazyTokenAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TokenAccount, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly link?: string | null;
  readonly ImportantPerson: AsyncItem<ImportantPerson | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tokenAccountImportantPersonId?: string | null;
}

export declare type TokenAccount = LazyLoading extends LazyLoadingDisabled ? EagerTokenAccount : LazyTokenAccount

export declare const TokenAccount: (new (init: ModelInit<TokenAccount>) => TokenAccount) & {
  copyOf(source: TokenAccount, mutator: (draft: MutableModel<TokenAccount>) => MutableModel<TokenAccount> | void): TokenAccount;
}

type EagerEndorsement = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Endorsement, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ImportantPerson?: (EndorsementImportantPerson | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEndorsement = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Endorsement, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ImportantPerson: AsyncCollection<EndorsementImportantPerson>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Endorsement = LazyLoading extends LazyLoadingDisabled ? EagerEndorsement : LazyEndorsement

export declare const Endorsement: (new (init: ModelInit<Endorsement>) => Endorsement) & {
  copyOf(source: Endorsement, mutator: (draft: MutableModel<Endorsement>) => MutableModel<Endorsement> | void): Endorsement;
}

type EagerImportantPerson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ImportantPerson, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly endorsements?: (EndorsementImportantPerson | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyImportantPerson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ImportantPerson, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly endorsements: AsyncCollection<EndorsementImportantPerson>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ImportantPerson = LazyLoading extends LazyLoadingDisabled ? EagerImportantPerson : LazyImportantPerson

export declare const ImportantPerson: (new (init: ModelInit<ImportantPerson>) => ImportantPerson) & {
  copyOf(source: ImportantPerson, mutator: (draft: MutableModel<ImportantPerson>) => MutableModel<ImportantPerson> | void): ImportantPerson;
}

type EagerEndorsementImportantPerson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EndorsementImportantPerson, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly endorsementId?: string | null;
  readonly importantPersonId?: string | null;
  readonly endorsement: Endorsement;
  readonly importantPerson: ImportantPerson;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEndorsementImportantPerson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EndorsementImportantPerson, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly endorsementId?: string | null;
  readonly importantPersonId?: string | null;
  readonly endorsement: AsyncItem<Endorsement>;
  readonly importantPerson: AsyncItem<ImportantPerson>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EndorsementImportantPerson = LazyLoading extends LazyLoadingDisabled ? EagerEndorsementImportantPerson : LazyEndorsementImportantPerson

export declare const EndorsementImportantPerson: (new (init: ModelInit<EndorsementImportantPerson>) => EndorsementImportantPerson) & {
  copyOf(source: EndorsementImportantPerson, mutator: (draft: MutableModel<EndorsementImportantPerson>) => MutableModel<EndorsementImportantPerson> | void): EndorsementImportantPerson;
}