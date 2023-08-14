/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TokenAccount, ImportantPerson as ImportantPerson0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TokenAccountUpdateFormInputValues = {
    link?: string;
    ImportantPerson?: ImportantPerson0;
};
export declare type TokenAccountUpdateFormValidationValues = {
    link?: ValidationFunction<string>;
    ImportantPerson?: ValidationFunction<ImportantPerson0>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TokenAccountUpdateFormOverridesProps = {
    TokenAccountUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    ImportantPerson?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type TokenAccountUpdateFormProps = React.PropsWithChildren<{
    overrides?: TokenAccountUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tokenAccount?: TokenAccount;
    onSubmit?: (fields: TokenAccountUpdateFormInputValues) => TokenAccountUpdateFormInputValues;
    onSuccess?: (fields: TokenAccountUpdateFormInputValues) => void;
    onError?: (fields: TokenAccountUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TokenAccountUpdateFormInputValues) => TokenAccountUpdateFormInputValues;
    onValidate?: TokenAccountUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TokenAccountUpdateForm(props: TokenAccountUpdateFormProps): React.ReactElement;
