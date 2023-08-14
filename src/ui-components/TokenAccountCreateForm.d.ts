/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImportantPerson as ImportantPerson0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TokenAccountCreateFormInputValues = {
    link?: string;
    ImportantPerson?: ImportantPerson0;
};
export declare type TokenAccountCreateFormValidationValues = {
    link?: ValidationFunction<string>;
    ImportantPerson?: ValidationFunction<ImportantPerson0>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TokenAccountCreateFormOverridesProps = {
    TokenAccountCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    ImportantPerson?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type TokenAccountCreateFormProps = React.PropsWithChildren<{
    overrides?: TokenAccountCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TokenAccountCreateFormInputValues) => TokenAccountCreateFormInputValues;
    onSuccess?: (fields: TokenAccountCreateFormInputValues) => void;
    onError?: (fields: TokenAccountCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TokenAccountCreateFormInputValues) => TokenAccountCreateFormInputValues;
    onValidate?: TokenAccountCreateFormValidationValues;
} & React.CSSProperties>;
export default function TokenAccountCreateForm(props: TokenAccountCreateFormProps): React.ReactElement;
