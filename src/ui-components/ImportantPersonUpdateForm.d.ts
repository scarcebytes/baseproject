/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImportantPerson, Endorsement } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ImportantPersonUpdateFormInputValues = {
    first_name?: string;
    last_name?: string;
    endorsements?: Endorsement[];
};
export declare type ImportantPersonUpdateFormValidationValues = {
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    endorsements?: ValidationFunction<Endorsement>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ImportantPersonUpdateFormOverridesProps = {
    ImportantPersonUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    endorsements?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ImportantPersonUpdateFormProps = React.PropsWithChildren<{
    overrides?: ImportantPersonUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    importantPerson?: ImportantPerson;
    onSubmit?: (fields: ImportantPersonUpdateFormInputValues) => ImportantPersonUpdateFormInputValues;
    onSuccess?: (fields: ImportantPersonUpdateFormInputValues) => void;
    onError?: (fields: ImportantPersonUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ImportantPersonUpdateFormInputValues) => ImportantPersonUpdateFormInputValues;
    onValidate?: ImportantPersonUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ImportantPersonUpdateForm(props: ImportantPersonUpdateFormProps): React.ReactElement;
