/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Endorsement } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ImportantPersonCreateFormInputValues = {
    first_name?: string;
    last_name?: string;
    endorsements?: Endorsement[];
};
export declare type ImportantPersonCreateFormValidationValues = {
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    endorsements?: ValidationFunction<Endorsement>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ImportantPersonCreateFormOverridesProps = {
    ImportantPersonCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    endorsements?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ImportantPersonCreateFormProps = React.PropsWithChildren<{
    overrides?: ImportantPersonCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ImportantPersonCreateFormInputValues) => ImportantPersonCreateFormInputValues;
    onSuccess?: (fields: ImportantPersonCreateFormInputValues) => void;
    onError?: (fields: ImportantPersonCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ImportantPersonCreateFormInputValues) => ImportantPersonCreateFormInputValues;
    onValidate?: ImportantPersonCreateFormValidationValues;
} & React.CSSProperties>;
export default function ImportantPersonCreateForm(props: ImportantPersonCreateFormProps): React.ReactElement;
