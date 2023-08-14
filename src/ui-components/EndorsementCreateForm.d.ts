/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImportantPerson as ImportantPerson0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EndorsementCreateFormInputValues = {
    ImportantPerson?: ImportantPerson0[];
};
export declare type EndorsementCreateFormValidationValues = {
    ImportantPerson?: ValidationFunction<ImportantPerson0>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EndorsementCreateFormOverridesProps = {
    EndorsementCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ImportantPerson?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type EndorsementCreateFormProps = React.PropsWithChildren<{
    overrides?: EndorsementCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EndorsementCreateFormInputValues) => EndorsementCreateFormInputValues;
    onSuccess?: (fields: EndorsementCreateFormInputValues) => void;
    onError?: (fields: EndorsementCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EndorsementCreateFormInputValues) => EndorsementCreateFormInputValues;
    onValidate?: EndorsementCreateFormValidationValues;
} & React.CSSProperties>;
export default function EndorsementCreateForm(props: EndorsementCreateFormProps): React.ReactElement;
